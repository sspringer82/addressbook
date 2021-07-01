import { Address } from './Address';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@material-ui/core';

const Detail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [address, setAddress] = useState<Address>({
    id: 0,
    firstname: '',
    lastname: '',
    birthday: '',
    street: '',
    place: '',
    postcode: '',
    country: '',
    phone: '',
    email: '',
  });
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/users/${id}`)
        .then((response) => response.json())
        .then((data) => setAddress(data));
    }
  }, [id]);
  return (
    <Card>
      <h1>
        {address.firstname} {address.lastname}
      </h1>
      <div>Id: {address.id}</div>
      <div>Firstname: {address.firstname}</div>
      <div>Lastname: {address.lastname}</div>
      <div>Birthday: {address.birthday}</div>
      <div>Street: {address.street}</div>
      <div>Place: {address.place}</div>
      <div>Postcode: {address.postcode}</div>
      <div>Country: {address.country}</div>
      <div>Phone: {address.phone}</div>
      <div>Email: {address.email}</div>
      <Link to="/list">zurück</Link>
    </Card>
  );
};

export default Detail;
