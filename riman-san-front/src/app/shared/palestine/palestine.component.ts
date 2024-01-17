import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-palestine',
  templateUrl: './palestine.component.html',
  styleUrls: ['./palestine.component.css'],
})
export class PalestineComponent {
  constructor(public translate: TranslateService) {}
}
