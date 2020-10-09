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
  secrete: string,
  type_doc: string
}

const vn_field: Field = {
  date_doc: "Ngày tháng",
  des_quote: "Mô tả",
  name: "Tên",
  num_doc: "Số hiệu",
  organ_send: "Đơn vị",
  secrete: "Độ bảo mật",
  type_doc: "Loại văn bản"
}

interface Sample {
  active: boolean,
  src: string,
  thumnail: string
  field: object
}

const demo_samples: Sample[] = [
  {
    active: false,
    src: "/assets/pdf/demo_1.pdf",
    thumnail: "/assets/pdf/thumnail_1.png",
    field: {
      date_doc: "Ngày tháng 1",
      des_quote: "Mô tả",
      name: "Tên",
      num_doc: "Số hiệu",
      organ_send: "Đơn vị",
      secrete: "Độ bảo mật",
      type_doc: "Loại văn bản"
    }
  },
  {
    active: false,
    src: "/assets/pdf/demo_2.pdf",
    thumnail: "/assets/pdf/thumnail_2.png",
    field: {
      date_doc: "Ngày tháng 2",
      des_quote: "Mô tả",
      name: "Tên",
      num_doc: "Số hiệu",
      organ_send: "Đơn vị",
      secrete: "Độ bảo mật",
      type_doc: "Loại văn bản"
    }
  },
  {
    active: false,
    src: "/assets/pdf/demo_3.pdf",
    thumnail: "/assets/pdf/thumnail_3.png",
    field: {
      date_doc: "Ngày tháng 3",
      des_quote: "Mô tả",
      name: "Tên",
      num_doc: "Số hiệu",
      organ_send: "Đơn vị",
      secrete: "Độ bảo mật",
      type_doc: "Loại văn bản"
    }
  }
]

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  apiUrl: string = "http://192.168.1.250:9002/process"

  listOfData: any = [];

  fileList: NzUploadFile[] = []

  loading: boolean = false

  previewSrc: string = null

  fileUploaded: any = null

  demo_samples = demo_samples

  constructor(
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
    this.imageClickHandle(demo_samples[0])
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
      let data = Object.keys(obj).map(key => ({ name: vn_field[key], value: obj[key] }))
      this.listOfData = data

    } else if (info.file.status === 'error') {
      this.loading = false

      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  imageClickHandle(sample: Sample): void {
    this.demo_samples = this.demo_samples.map(s => (s === sample ? {...s, active: true} : {...s, active: false}))

    this.previewSrc = sample.src
    this.listOfData = Object.keys(sample.field).map(key => ({ name: vn_field[key], value: sample.field[key] }))
  }

  private setPreview(file: File) {
    let reader = new FileReader();

    reader.onloadend = (e: any) => {
      this.previewSrc = e.target.result;
    };

    reader.readAsArrayBuffer(file);
  }

}
