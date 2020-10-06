import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/core/model.service';

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

  inputValue: string | null = null;

  listOfData: any = []

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
  }

  upload() {
    this.modelService.getData()
      .subscribe((res: Result) =>{
        let obj = res.result[0]
        let data = Object.keys(obj).map(key => ({name: key, value: obj[key]}))
        this.listOfData = data
      })
  }

}
