import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ApiHubService } from '../api-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estimateForm: FormGroup;
  enquiryForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private api: ApiHubService
  ) { }

  ngOnInit(): void {
    this.initializeEstimateForm();
    this.initializeEnquiryForm();
  }

  initializeEstimateForm() {
		this.estimateForm = new FormGroup({
			name: new FormControl(),
			mobile: new FormControl(),
			plotArea: new FormControl(),
			floors: new FormControl(),
		});
	}

  initializeEnquiryForm() {
		this.enquiryForm = new FormGroup({
			eName: new FormControl(),
			key: new FormControl(),
			ePlotArea: new FormControl(),
			eFloors: new FormControl(),
      eLocation: new FormControl(),
      eType: new FormControl(),
		});
	}

  submitEstimateForm() {
    console.log(JSON.stringify(this.estimateForm.value))
  }

  submitEnquiryForm() {
    this.api.addALeadToFirebase(this.enquiryForm.value)
    this.initializeEnquiryForm();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  onPackageClick() {
    this._router.navigate([ '/packages']);
  }

  onProcessClick() {
    this._router.navigate([ '/process']);
  }

}


