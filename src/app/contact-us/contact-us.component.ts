import {Component, OnInit} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {FlexModule} from "@angular/flex-layout";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {
  AbstractControl,
  FormBuilder,
  FormControl, FormGroup,
  FormsModule,
  ReactiveFormsModule,

  Validators,
} from "@angular/forms";
import {NgIf} from "@angular/common";

export class UserEnquiryRequest{
  firstName!: string
  lastName!: string
  email!: string
  phoneNumber!: string
  message!: string
}
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
    MatToolbar,
    ReactiveFormsModule,
    FormsModule,
    MatError,
    NgIf,

  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  userEnquiry !: FormGroup;
userEnquiryRequest: UserEnquiryRequest= new UserEnquiryRequest();

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.userEnquiry =this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4), Validators.pattern('[a-zA-Z]+') ]],
      lastName:['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
      email: ['',[Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('[0-9]+')]],
      message: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.userEnquiry.valid){
      this.userEnquiryRequest.firstName = this.userEnquiry.value.firstName;
      this.userEnquiryRequest.lastName = this.userEnquiry.value.lastName;
      this.userEnquiryRequest.email = this.userEnquiry.value.email;
      this.userEnquiryRequest.phoneNumber = this.userEnquiry.value.phoneNumber;
      this.userEnquiryRequest.message =this.userEnquiry.value.message;
      console.log('data',this.userEnquiryRequest)
    }

  }
}
