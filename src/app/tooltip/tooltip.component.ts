import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  showA: boolean;
  showB: boolean;
  btnClick: boolean;
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.btnClick = false;
    this.showA = false;
    this.showB = false;
  }

  onButtonClick(button: string) {
    this.hideAll();
    //console.log(this.elRef.nativeElement.offsetTop);
    switch (button) {
      case 'btna':
        this.showA = true;
        break;
      case 'btnb':
        this.showB = true;
        break;
    }
    this.btnClick = true;
    console.log('btn2', this.btnClick)
    
  }

  hideAll() {
    this.showA = false;
    this.showB = false;
  }

  show(isInside:boolean){
    if(!isInside && !this.btnClick){
      this.hideAll();
    }
    else{
      this.btnClick = false;
    }
  }
}
