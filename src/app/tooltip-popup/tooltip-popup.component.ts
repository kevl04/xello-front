import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  host: {
    '(document:keyup)': 'bodyKeyup($event)',
    '(document:click)': 'bodyClick($event)'
  },
  styleUrls: ['./tooltip-popup.component.scss']
})
export class TooltipPopupComponent implements OnInit {
  @Input() text: string;
  @Output() onBodyClick = new EventEmitter<boolean>();
  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  bodyClick(e) {
    let clickedComp = e.target;
    let inside = false;
    do {
      if (clickedComp === this.element.nativeElement) {
        inside = true;
        break;
      }
      clickedComp = clickedComp.parentNode;
    } while (clickedComp)


    this.onBodyClick.emit(inside);
  }

  bodyKeyup(e){
    if(e.which == 27){
      this.onBodyClick.emit(false);
    }
  }

}
