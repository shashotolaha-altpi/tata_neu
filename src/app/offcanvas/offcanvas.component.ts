import { Component,ViewEncapsulation } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OffcanvasComponent {

  fasearch = faMagnifyingGlass;
  falocation = faLocationDot;
  fauser = faUser;

  list:string[] = ['javascript', 'css', 'hmtl', 'typescript', 'angular']
  mobilemedia:any = window.matchMedia("(max-width:520px)")

  constructor(){
    if (this.mobilemedia.matches) {
      console.log("matched");
    }
  }

}

