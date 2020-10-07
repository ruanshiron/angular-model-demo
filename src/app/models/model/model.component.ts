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

  apiUrl: string = "http://192.168.1.250:9002/process"

  inputValue: string | null = null;

  listOfData: any = [];

  fileList: NzUploadFile[] = []

  loading: boolean = false

  previewSrc: string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"

  fileUploaded: any = null

  constructor(
    private modelService: ModelService,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
  }

  upload(info: NzUploadChangeParam): void {
    if (this.fileUploaded?.uid !== info.file.uid)
      this.setPreview(info.file.originFileObj);
    // output loading
    this.loading = true;

    // Uploaded file list
    let fileList = [...info.fileList];
    fileList = fileList.length > 0 && fileList.slice(-1);
    this.fileList = fileList;

    if (info.file.status === 'done') {
      this.loading = false

      this.msg.success(`${info.file.name} file uploaded successfully`);

      let obj = info.file.response.result[0]
      let data = Object.keys(obj).map(key => ({ name: key, value: obj[key] }))
      this.listOfData = data

    } else if (info.file.status === 'error') {
      this.loading = false

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
