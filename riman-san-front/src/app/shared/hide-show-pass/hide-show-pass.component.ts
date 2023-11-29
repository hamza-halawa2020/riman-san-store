import { Component } from '@angular/core';

@Component({
  selector: 'app-hide-show-pass',
  templateUrl: './hide-show-pass.component.html',
  styleUrls: ['./hide-show-pass.component.css']
})
export class HideShowPassComponent {
  type:string = 'password';
isText:boolean = false;
eyeIcon:string = 'fa-eye-slash';
  hideshowpass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye': this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'fa-eye': this.type = 'password';
    }
}
