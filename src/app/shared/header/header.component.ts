import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  onPackageClick() {
    this._router.navigate([ '/packages']);
  }

  onProcessClick() {
    this._router.navigate([ '/process']);
  }

  onAboutClick() {
    this._router.navigate([ '/about']);
  }

  onHomeClick() {
    this._router.navigate([ '/home']);
  }

  onContactClick(){
    this._router.navigate([ '/contactus']);
  }

}
