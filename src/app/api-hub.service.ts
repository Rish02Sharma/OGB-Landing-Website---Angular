import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ApiHubService {

  private list: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase,
    private _http: HttpClient
    ) {
    this.list = this.firebase.list('leads');
  }


  getLeadsFromFirebase() {
    return this.list;
  }

  addALeadToFirebase(lead: any) {
    this.list.push(lead);
  }

  updateALeadOnFirebase(lead: any) {
    let key = lead.key;
    this.list.update(key, lead);
  }

  deleteALeadFromFirebase(key: string){
    this.list.remove(key);
  }

}
