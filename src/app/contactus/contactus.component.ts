import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiHubService } from '../api-hub.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private api: ApiHubService) { }

  ngOnInit(): void {
    this.initializeContactForm();
  }

  initializeContactForm() {
		this.contactForm = new FormGroup({
			name: new FormControl(),
			phone: new FormControl(),
			email: new FormControl(),
			message: new FormControl(),
		});
	}

  submitContactForm(){
    this.api.addALeadToFirebase(this.contactForm.value)
    this.initializeContactForm();
  }

}
