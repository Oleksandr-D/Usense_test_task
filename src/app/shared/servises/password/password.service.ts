import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  public password: string = '';
  public passwordLevel: string = "The password must contain at least 8 characters";
  public firstSectionColor: string = 'rgb(143, 143, 143)';
  public secondSectionColor: string = 'rgb(143, 143, 143)';
  public thirdSectionColor: string = 'rgb(143, 143, 143)';
  public passwordSubject = new BehaviorSubject<string>('');
  public password$ = this.passwordSubject.asObservable();

  updatePasswordStrength(password: string): void {
    this.passwordSubject.next(password);
    this.password = password;
    if (password.length > 0 && password.length <= 7) {
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

    if (password.length > 7 && (this.isOnlyLetters(password) || this.isOnlyDigits(password) || this.isOnlySymbols(password))) {
      this.firstSectionColor = 'rgb(209, 5, 5)';
      this.secondSectionColor = 'rgb(143, 143, 143)';
      this.thirdSectionColor = 'rgb(143, 143, 143)';
      this.passwordLevel = 'Easy';
    } else {
      this.passwordLevel = 'The password must contain at least 8 characters';
    }

    if (password.length > 7) {
      if (this.isCombinationOfLettersAndSymbols(password) || this.isCombinationOfLettersAndDigits(password) || this.isCombinationOfDigitsAndSymbols(password)) {
        this.firstSectionColor = 'rgb(243, 235, 2)';
        this.secondSectionColor = 'rgb(243, 235, 2)';
        this.thirdSectionColor = 'rgb(143, 143, 143)';
        this.passwordLevel = 'Medium';
      }}

    if (password.length > 7){
      if (this.hasAllTypes(password)) {
        this.firstSectionColor = 'rgb(18, 176, 4';
        this.secondSectionColor = 'rgb(18, 176, 4';
        this.thirdSectionColor = 'rgb(18, 176, 4';
        this.passwordLevel = 'Strong';
      } 
    }
  }
 
  private isOnlyLetters(password: string): boolean {
    return /^[a-zA-Z]+$/.test(password);
  }

  private isOnlyDigits(password: string): boolean {
    return /^[0-9]+$/.test(password);
  }

  private isOnlySymbols(password: string): boolean {
    return /^[^\w\s\d]+$/.test(password);
  }

  private isCombinationOfLettersAndSymbols(password: string): boolean {
    return /[a-zA-Z]+[^a-zA-Z\d\s]+|[^a-zA-Z\d\s]+[a-zA-Z]+/.test(password);
  }

  private isCombinationOfLettersAndDigits(password: string): boolean {
    return /[a-zA-Z]+\d+|\d+[a-zA-Z]+/.test(password);
  }
  
  private isCombinationOfDigitsAndSymbols(password: string): boolean {
    return /\d+[^a-zA-Z\d\s]|[^a-zA-Z\d\s]+\d+/.test(password);
  }

  private hasAllTypes(password: string): boolean {
    const has = (regex: RegExp) => regex.test(password);
    return has(/[a-zA-Z]/) && has(/\d/) && has(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/);
  }
}
