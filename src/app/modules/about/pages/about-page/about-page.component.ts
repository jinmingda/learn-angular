import { Component, OnInit } from '@angular/core';

import { AboutService } from '../../about.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  content: string;

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit() {
    this.getText();
  }

  getText() {
    this.aboutService.getText()
      .subscribe(content => this.content = content);
  }

}
