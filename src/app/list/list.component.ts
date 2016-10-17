import { Component, OnInit } from '@angular/core';
import { Address } from '../shared/address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private addresses: Address[];

  constructor(private addressService: AddressService, private router: Router) {}

  ngOnInit() {
    this.addressService.getAll().then((addresses) => {
      this.addresses = addresses
    });
  }

  remove(id: number) {
    this.addressService.delete(id).then(() => {
      const index = this.addresses.findIndex((address) => {
        if (address.id == id) { return true; }
      });
      this.addresses.splice(index, 1);
    });
  }

}
