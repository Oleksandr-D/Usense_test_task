import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../shared/servises/password/password.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  public password: string = '';

  constructor(public passwordService:PasswordService ){};

    ngOnInit(): void {}

    onPasswordChange(): void {
      this.passwordService.updatePasswordStrength(this.password);
      this.passwordService.passwordSubject.next(this.password);
    }
}
