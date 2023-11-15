import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public password: string = '';
  public passwordLevel: string = "The password must contain at least 8 characters";
  public firstSectionColor: string = 'rgb(143, 143, 143)';
  public secondSectionColor: string = 'rgb(143, 143, 143)';
  public thirdSectionColor: string = 'rgb(143, 143, 143)';

  updatePasswordStrength(): void {
    if (this.password.length > 0 && this.password.length <= 7) {
      this.firstSectionColor = 'rgb(209, 5, 5)';
      this.secondSectionColor = 'rgb(209, 5, 5)';
      this.thirdSectionColor = 'rgb(209, 5, 5)';
      this.passwordLevel = 'The password must contain at least 8 characters';
    } else {
      this.firstSectionColor = 'rgb(143, 143, 143)';
      this.secondSectionColor = 'rgb(143, 143, 143)';
      this.thirdSectionColor = 'rgb(143, 143, 143)';
      this.passwordLevel = 'The password must contain at least 8 characters';
    }

    if (this.password.length > 7 && (this.isOnlyLetters() || this.isOnlyDigits() || this.isOnlySymbols())) {
      this.firstSectionColor = 'rgb(209, 5, 5)';
      this.secondSectionColor = 'rgb(143, 143, 143)';
      this.thirdSectionColor = 'rgb(143, 143, 143)';
      this.passwordLevel = 'Easy';
    } else {
      this.passwordLevel = 'The password must contain at least 8 characters';
    }

    if (this.password.length > 7) {
      if (this.isCombinationOfLettersAndSymbols() || this.isCombinationOfLettersAndDigits() || this.isCombinationOfDigitsAndSymbols()) {
        this.firstSectionColor = 'rgb(243, 235, 2)';
        this.secondSectionColor = 'rgb(243, 235, 2)';
        this.thirdSectionColor = 'rgb(143, 143, 143)';
        this.passwordLevel = 'Medium';
      }}

    if (this.password.length > 7){
      if (this.hasAllTypes()) {
        this.firstSectionColor = 'rgb(18, 176, 4';
        this.secondSectionColor = 'rgb(18, 176, 4';
        this.thirdSectionColor = 'rgb(18, 176, 4';
        this.passwordLevel = 'Strong';
      } 
    }
  }
 
  private isOnlyLetters(): boolean {
    return /^[a-zA-Z]+$/.test(this.password);
  }

  private isOnlyDigits(): boolean {
    return /^[0-9]+$/.test(this.password);
  }

  private isOnlySymbols(): boolean {
    return /^[^\w\s\d]+$/.test(this.password);
  }

  private isCombinationOfLettersAndSymbols(): boolean {
    return /[a-zA-Z]+[^a-zA-Z\d\s]+|[^a-zA-Z\d\s]+[a-zA-Z]+/.test(this.password);
  }

  private isCombinationOfLettersAndDigits(): boolean {
    return /[a-zA-Z]+\d+|\d+[a-zA-Z]+/.test(this.password);
  }
  
  private isCombinationOfDigitsAndSymbols(): boolean {
    return /\d+[^a-zA-Z\d\s]|[^a-zA-Z\d\s]+\d+/.test(this.password);
  }

  private hasAllTypes(): boolean {
    const has = (regex: RegExp) => regex.test(this.password);
    return has(/[a-zA-Z]/) && has(/\d/) && has(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/);
  }
}
