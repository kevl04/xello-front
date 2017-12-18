import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  host: {
    '(document:click)': 'bodyClick($event)',
    '(document:keyup)': 'bodyKeyup($event)'
  },
  styleUrls: ['./tooltip-popup.component.scss']
})
export class TooltipPopupComponent implements OnInit {
  @Input() text: string;
  @Input() buttonClick: boolean;
  show: boolean;
  //elementRef:any;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.show = true;
  }

  bodyClick(e) {
    let clickedComp = e.target;
    let inside = false;
    do {
      console.log(clickedComp);
      if (clickedComp === this.element.nativeElement) {
        inside = true;
        break;
      }
      clickedComp = clickedComp.parentNode;
    } while (clickedComp)

    if(!inside && !this.buttonClick){
      this.show = false;
    }
    else{
      this.buttonClick = false;
      this.show = true;
    }
  }

  bodyKeyup(e){

  }

}
