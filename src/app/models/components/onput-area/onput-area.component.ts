import { Component, OnInit } from '@angular/core';

interface Field {
  name: string,
  value: string
}

@Component({
  selector: 'app-onput-area',
  templateUrl: './onput-area.component.html',
  styleUrls: ['./onput-area.component.scss']
})

export class OnputAreaComponent implements OnInit {
  listOfData: Field[] = [
    {
      name: "Tiêu đề",
      value: "Cộng hòa xã hội chủ nghĩa Việt Nam"
    },
    {
      name: "Tiêu đề",
      value: "Cộng hòa xã hội chủ nghĩa Việt Nam"
    },
    {
      name: "Tiêu đề",
      value: "Cộng hòa xã hội chủ nghĩa Việt Nam"
    },
    {
      name: "Tiêu đề",
      value: "Cộng hòa xã hội chủ nghĩa Việt Nam"
    },
    {
      name: "Tiêu đề",
      value: "Cộng hòa xã hội chủ nghĩa Việt Nam"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
