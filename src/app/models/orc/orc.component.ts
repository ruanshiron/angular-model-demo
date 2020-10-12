import { Component, OnInit } from '@angular/core';
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
      date_doc: "Đồng Tháp, ngày 16 tháng 10 năm 2019",
      des_quote: "Ban hành Quy định về chính sách hỗ trợ phát triểnngành nghề nông thôntrên địa bàn tỉnh Đồng Tháp",
      name: "file",
      num_doc: "25/2019/QĐ-UBND",
      organ_send: "ỦY BAN NHÂN DÂN TỈNH ĐỒNG THÁP",
      secrete: "Không",
      type_doc: "Quyết Định"
    }
  },
  {
    active: false,
    src: "/assets/pdf/demo_2.pdf",
    thumnail: "/assets/pdf/thumnail_2.png",
    field: {
      date_doc: "Hà Nội, ngày 08 tháng 01 năm 2018",
      des_quote: "Về việc công bố thủ tục hành chính được thay thế, thủ tục hành chính bị bãi bỏ trong lĩnh vực phổ biến giáo dục pháp luật thuộc phạm vi chức năng quản lý nhà nước của Bộ Tư Pháp",
      name: "file",
      num_doc: "40/QĐ-BTP",
      organ_send: "BỘ TƯ PHÁP",
      secrete: "Không",
      type_doc: "Quyết Định"
    }
  },
  {
    active: false,
    src: "/assets/pdf/demo_3.pdf",
    thumnail: "/assets/pdf/thumnail_3.png",
    field: {
      date_doc: "Hà Nội, ngày 20 tháng 3 năm 2019",
      des_quote: "Về điều chỉnh mức giá bán điện bình quân và quy định giá bán điện",
      name: "file",
      num_doc: "648/QĐ-BCT",
      organ_send: "Bộ Công Thương",
      secrete: "Không",
      type_doc: "Quyết Định"
    }
  }
]

@Component({
  selector: 'app-model',
  templateUrl: './orc.component.html',
  styleUrls: ['./orc.component.scss']
})
export class OrcComponent implements OnInit {

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
    //
    this.demo_samples = this.demo_samples.map(s => ({ ...s, active: false }))

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
    this.demo_samples = this.demo_samples.map(s => (s === sample ? { ...s, active: true } : { ...s, active: false }))

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
