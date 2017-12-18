import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  btnAClick: boolean;
  btnBClick: boolean;
  constructor() { }

  ngOnInit() {
    this.btnAClick = false;
    this.btnBClick = false;
  }

  onButtonClick(button: string) {
    switch (button) {
      case 'btna':
        this.btnAClick = true;
        this.btnBClick = false;
        break;
      case 'btnb':
        this.btnAClick = false;
        this.btnBClick = true;
        break;
    }

  }
}
