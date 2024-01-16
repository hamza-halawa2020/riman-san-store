import { Component, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent {


  isArabicSelected: boolean = false;
  isEnglishSelected: boolean = false;

constructor(private translate: TranslateService) {}

changeLanguage(language: string): void {
  this.translate.use(language);

  if (language === 'ar') {
    this.isArabicSelected = true;
    this.isEnglishSelected = false; // Reset English flag
  } else if (language === 'en') {
    this.isEnglishSelected = true;
    this.isArabicSelected = false; // Reset Arabic flag
  }
}
}