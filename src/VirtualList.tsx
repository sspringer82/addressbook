import { Table, Column } from 'react-virtualized';
import { useEffect, useState } from 'react';
import { Address } from 'cluster';
import 'react-virtualized/styles.css';

const VirtualList: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  useEffect(() => {
    fetch('http://localhost:3001/fakeUsers/100')
      .then((response) => response.json())
      .then((data) => setAddresses(data));
  }, []);

  return (
    <Table
      width={650}
      height={350}
      headerHeight={20}
      rowHeight={30}
      rowCount={addresses.length}
      rowGetter={({ index }) => addresses[index]}
    >
      <Column label="Id" dataKey="id" width={50} />
      <Column label="Firstname" dataKey="firstname" width={200} />
      <Column label="Lastname" dataKey="lastname" width={200} />
      <Column label="E-Mail" dataKey="email" width={200} />
    </Table>
  );
};
export default VirtualList;
