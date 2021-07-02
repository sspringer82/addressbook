import {
  TableRow,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  TableBody,
  Table,
  Fab,
} from '@material-ui/core';
import { Address } from './Address';
import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
// import ListItem from './ListItem';
const ListItem = React.lazy(() => import('./ListItem'));

const List: React.FC = () => {
  const history = useHistory();
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => setAddresses(data));
  }, []);

  function handleDelete(address: Address) {
    fetch(`http://localhost:3001/users/${address.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setAddresses((oldAddresses) => {
          return oldAddresses.filter(
            (oldAddress) => oldAddress.id !== address.id,
          );
        });
      }
    });
  }

  return (
    <Suspense fallback={<PacmanLoader />}>
      <TableContainer component={Paper} style={{ marginBottom: 80 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses.map((address) => {
              return (
                <ListItem
                  key={address.id}
                  address={address}
                  onDelete={handleDelete}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        color="primary"
        style={{ position: 'fixed', right: 40, bottom: 40 }}
        onClick={() => history.push('/new')}
      >
        <AddIcon />
      </Fab>
    </Suspense>
  );
};

export default List;
