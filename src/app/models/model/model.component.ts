import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/core/model.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';

interface Field {
  date_doc: string,
  des_quote: string,
  name: string,
  num_doc: string,
  organ_send: string,
  secrete: boolean,
  type_doc: string
}
interface Result {
  result: Field[]
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  apiUrl: string = "https://run.mocky.io/v3/009b514a-9a3b-4115-85bc-46dea6a81dcc"

  inputValue: string | null = null;

  listOfData: any = [];

  fileList: NzUploadFile[] = []

  loading = false

  previewSrc: string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"

  constructor(
    private modelService: ModelService,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
  }

  upload(info: NzUploadChangeParam): void {
    console.log(info);

    // output loading
    this.loading = true;

    // Uploaded file list
    let fileList = [...info.fileList];
    fileList = fileList.length > 0 && fileList.slice(-1);
    this.fileList = fileList;

    // let obj = res.result[0]
    // let data = Object.keys(obj).map(key => ({ name: key, value: obj[key] }))
    // this.listOfData = data

    if (info.file.status === 'done') {
      this.loading = false

      this.msg.success(`${info.file.name} file uploaded successfully`);

      this.setPreview(info.file.originFileObj);

      console.log(info.file.response)
      let obj = info.file.response.result[0]
      let data = Object.keys(obj).map(key => ({ name: key, value: obj[key] }))
      this.listOfData = data

    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  private setPreview(file: File) {
    let reader = new FileReader();

    reader.onloadend = (e: any) => {
      this.previewSrc = e.target.result;
    };

    reader.readAsArrayBuffer(file);
  }

}
