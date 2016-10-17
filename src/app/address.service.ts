import { Injectable } from '@angular/core';
import { Address } from './shared/address';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AddressService {

  constructor(public http: Http) { }

  get(id: number): Promise<Address> {
    return this.http.get('/address/' + id)
    .toPromise()
    .then(res => {
      return res.json() as Address;
    });
  }

  getAll(): Promise<Address[]> {
    return this.http.get('/address')
    .toPromise()
    .then(res => {
      return res.json() as Address[];
    });
  }

  create(address: Address): Promise<Address> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post('/address', JSON.stringify(address), {headers: headers})
      .toPromise()
      .then(res => address);
  }

  update(address: Address) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .put('/address/' + address.id, JSON.stringify(address), {headers: headers})
      .toPromise()
      .then(res => address);
  }

  delete(id: number) {
    const url = '/address/' + id;
    return this.http
      .delete(url)
      .toPromise();
  }

}
