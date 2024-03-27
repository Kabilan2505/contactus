import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {FlexModule} from "@angular/flex-layout";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatCardModule,
    MatCard,
    MatLabel,
    MatCardHeader,
    MatDivider,
    MatCardContent,
    FlexModule,
    MatButton,

  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
