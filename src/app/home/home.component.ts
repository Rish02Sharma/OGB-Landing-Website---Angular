import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ApiHubService } from '../api-hub.service';

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
    console.log("submit ")
    this.api.addALeadToFirebase(this.enquiryForm.value)
    // this.api.insertCollection();
  }

}


