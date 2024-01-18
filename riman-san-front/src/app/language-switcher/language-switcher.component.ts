import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent {
  isArabicSelected: boolean = false;
  isEnglishSelected: boolean = true;

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage) {
      this.translate.use(savedLanguage);
      this.setLanguageSelection(savedLanguage);
    } else {
      this.translate.use('en');
    }
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
    this.setLanguageSelection(language);

    localStorage.setItem('selectedLanguage', language);
  }

  private setLanguageSelection(language: string): void {
    if (language === 'ar') {
      this.isArabicSelected = true;
      this.isEnglishSelected = false;
    } else if (language === 'en') {
      this.isEnglishSelected = true;
      this.isArabicSelected = false;
    }
  }
}
