import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-black',
  templateUrl: './header-black.component.html',
  styleUrls: ['./header-black.component.css']
})
export class HeaderBlackComponent implements OnInit {

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
