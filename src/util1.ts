import { Address } from './Address';

export function getFullname(address: Address): string {
  console.log('function getFullname');
  return `${address.firstname} ${address.lastname}`;
}

export function getContact(address: Address): string {
  console.log('function getContact');
  return `${address.firstname} ${address.lastname} <${address.email}>`;
}
