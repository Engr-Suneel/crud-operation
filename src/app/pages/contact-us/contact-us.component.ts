import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICountry } from 'src/app/shared/models/cntry.model';
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
  countryList: Array<ICountry> = [];

  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.firstName = new FormControl("", [Validators.required]);
    this.lastName = new FormControl("", [Validators.required]);
    this.age = new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]);
    this.gender = new FormControl(null, [Validators.required]);

    this.state = new FormControl("", [Validators.required]);
    this.zipCode = new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]);
    this.city = new FormControl("", [Validators.required]);
    this.area = new FormControl("", [Validators.required]);
    this.country = new FormControl(null, [Validators.required]);

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
    ],
      this.countryList = [
        { code: null!, value: "Select Country" },
        { code: "AFG", value: "Albania" },
        { code: "ALB", value: "Afghanistan" },
        { code: "DZA", value: "Algeria" },
        { code: "ASM", value: "American Samoa" },
        { code: "AND", value: "Andorra" },
        { code: "AGO", value: "Angola" },
      ]
  }

  get form() {
    return this.contactUsFormGroup.controls;
  }

  get addressForm() {
    return this.address.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactUsFormGroup.invalid) {
      return;
    }

    console.log(this.contactUsFormGroup.value);
  }
}
