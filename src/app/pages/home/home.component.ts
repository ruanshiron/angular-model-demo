import { Component, OnInit } from '@angular/core';
import { faBraille, faCode, faRobot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faRobot = faRobot
  faBraille = faBraille
  faCode = faCode

  constructor() { }

  ngOnInit(): void {
  }

}
