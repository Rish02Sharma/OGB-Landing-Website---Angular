import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiHubService } from '../api-hub.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private api: ApiHubService
  ) { }

  estimateForm: FormGroup;
  basicPlanAmount: any = 1000;
  standardPlanAmount: any = 1200;
  premiumPlanAmount: any = 1500;
  floor: any = 1;

  ngOnInit(): void {
    this.initializeEstimateForm();
  }

  initializeEstimateForm() {
		this.estimateForm = new FormGroup({
			name: new FormControl(),
			mobile: new FormControl(),
			plotArea: new FormControl(),
			floors: new FormControl(),
		});
	}

  submitEstimateForm() {
    this.basicPlanAmount = 1000;
    this.standardPlanAmount = 1200;
    this.premiumPlanAmount = 1500;
    // this.api.addALeadToFirebase(this.estimateForm.value)

    if(this.estimateForm.controls['floors'].value > 0){
      this.floor = this.floor * this.estimateForm.controls['floors'].value;
    }

    this.basicPlanAmount = this.basicPlanAmount * this.estimateForm.controls['plotArea'].value * this.floor;
    this.standardPlanAmount = this.standardPlanAmount * this.estimateForm.controls['plotArea'].value * this.floor;
    this.premiumPlanAmount = this.premiumPlanAmount * this.estimateForm.controls['plotArea'].value * this.floor;

    this.initializeEstimateForm();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

}
