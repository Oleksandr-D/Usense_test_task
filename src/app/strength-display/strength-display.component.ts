import { Component, OnDestroy } from '@angular/core';
import { PasswordService } from '../shared/servises/password/password.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-strength-display',
  templateUrl: './strength-display.component.html',
  styleUrls: ['./strength-display.component.scss'] 
})
export class StrengthDisplayComponent implements OnDestroy {
  public password: string = '';
  public passwordLevel: string = '';
  public firstSectionColor: string = '';
  public secondSectionColor: string = '';
  public thirdSectionColor: string = '';
  private subscription!: Subscription;
  
  constructor(private passwordService: PasswordService) {
    this.subscription = this.passwordService.password$.subscribe(() => {
      this.passwordLevel = this.passwordService.passwordLevel;
      this.firstSectionColor = this.passwordService.firstSectionColor;
      this.secondSectionColor = this.passwordService.secondSectionColor;
      this.thirdSectionColor = this.passwordService.thirdSectionColor;
      this.password = this.passwordService.password; 
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
