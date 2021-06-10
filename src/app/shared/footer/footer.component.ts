import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _router: Router,) { }

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

}
