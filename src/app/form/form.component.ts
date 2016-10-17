import { Component, OnInit } from '@angular/core';
import { Address } from '../shared/address';
import { AddressService } from '../address.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private address: Address;

  constructor(private addressService: AddressService, private router: Router, private route: ActivatedRoute) {
    this.address = {
      id: 0,
      name: '',
      street: '',
      place: ''
    }
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (Number.isInteger(id)) {
        this.addressService.get(id).then((address: Address) => {
          this.address.id = id;
          this.address = address;
        });
      }
    });
  }

  onSubmit() {
    let promise;
    if (this.address.id === 0) {
      promise = this.addressService.create(this.address);
    } else {
      promise = this.addressService.update(this.address);
    }
    promise.then(() => this.router.navigate(['list']));
  }

}
