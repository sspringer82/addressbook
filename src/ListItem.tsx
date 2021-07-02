import { withStyles, TableRow, TableCell, IconButton } from '@material-ui/core';
import { Address } from './Address';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { getContact } from './util1';
import React from 'react';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

type Props = {
  address: Address;
  onDelete: (address: Address) => void;
};

const ListItem: React.FC<Props> = ({ address, onDelete }) => {
  const history = useHistory();
  return (
    <StyledTableRow>
      <TableCell>{address.id}</TableCell>
      <TableCell>
        {address.firstname} {getContact(address)}
      </TableCell>
      <TableCell>{address.lastname}</TableCell>
      <TableCell>{address.email}</TableCell>
      <TableCell>
        <IconButton
          // onClick={React.useCallback(() => onDelete(address), [address, onDelete])}
          onClick={React.useMemo(
            () => () => onDelete(address),
            [address, onDelete],
          )}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={() => history.push(`/edit/${address.id}`)}>
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={() => history.push(`/detail/${address.id}`)}>
          <SearchIcon />
        </IconButton>
      </TableCell>
    </StyledTableRow>
  );
};

function areEqual(prevProps: Props, nextProps: Props) {
  // console.log(prevProps.address.firstname, nextProps.address.firstname);
  return (
    prevProps.address.id === nextProps.address.id &&
    prevProps.address.firstname === nextProps.address.firstname &&
    prevProps.address.lastname === nextProps.address.lastname &&
    prevProps.address.email === nextProps.address.email
  );
}

export default React.memo(ListItem, areEqual);
