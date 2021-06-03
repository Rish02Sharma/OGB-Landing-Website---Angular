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
    console.log("constructor " + JSON.stringify(this.list))
  }

  insertCollection(): Observable<any> {
    const endPoint = `https://api.kvstore.io/collections`;
		const header = new HttpHeaders({ 'Content-Type': 'application/json' , 'kvstoreio_api_key': 'ba38e57c1b5fc717ea25c8fa5f3712c77eed62016805b2d0edb32013c8f28e44'});
		return this._http.post(endPoint, JSON.stringify({"collection": "user_leads"}), {headers: header});
	}

  getLeadsFromFirebase() {
    return this.list;
  }

  addALeadToFirebase(lead: any) {
    this.list.push(lead);
    console.log(JSON.stringify(this.list))
  }

  updateALeadOnFirebase(lead: any) {
    let key = lead.key;
    this.list.update(key, lead);
  }

  deleteALeadFromFirebase(key: string){
    this.list.remove(key);
  }

}
