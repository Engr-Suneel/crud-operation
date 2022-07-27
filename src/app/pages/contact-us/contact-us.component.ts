import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGender } from 'src/app/shared/models/gender.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsFormGroup: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  age: FormControl;
  gender: FormControl;

  address: FormGroup;
  state: FormControl;
  zipCode: FormControl;
  city: FormControl;
  area: FormControl;
  country: FormControl;

  genderList: Array<IGender> = [];
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.firstName = new FormControl("", [Validators.required]);
    this.lastName = new FormControl("", [Validators.required]);
    this.age = new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]);
    this.gender = new FormControl(null, [Validators.required]);

    this.state = new FormControl("");
    this.zipCode = new FormControl("");
    this.city = new FormControl("");
    this.area = new FormControl("");
    this.country = new FormControl("");

    this.address = this.formBuilder.group({
      state: this.state,
      zipCode: this.zipCode,
      city: this.city,
      area: this.area,
      country: this.country,
    });

    this.contactUsFormGroup = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      address: this.address
    });
  }

  ngOnInit(): void {
    this.genderList = [
      { key: null!, value: "Select Gender" },
      { key: "m", value: "Male" },
      { key: "f", value: "Female" },
      { key: "o", value: "Other" },
    ]
  }

  get form() {
    return this.contactUsFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactUsFormGroup.invalid) {
      return;
    }

    console.log(this.contactUsFormGroup.value);
  }
}
