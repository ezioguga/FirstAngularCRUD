import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _user: Contact;
  private baseUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {
  }

  // retrieving ContactServices

  getContacts(): Observable<any> {

    return this._http.get<Contact>(this.baseUrl + '/contacts');
  }
}
