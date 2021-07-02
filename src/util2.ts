import { Address } from './Address';

export class Util {
  static getFullname(address: Address): string {
    console.log('method getFullname');
    return `${address.firstname} ${address.lastname}`;
  }

  static getContact(address: Address): string {
    console.log('method getContact');
    return `${address.firstname} ${address.lastname} <${address.email}>`;
  }
}
