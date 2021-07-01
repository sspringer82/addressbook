import { withStyles, TableRow, TableCell, IconButton } from '@material-ui/core';
import { Address } from './Address';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

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
      <TableCell>{address.firstname}</TableCell>
      <TableCell>{address.lastname}</TableCell>
      <TableCell>{address.email}</TableCell>
      <TableCell>
        <IconButton onClick={() => onDelete(address)}>
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

export default ListItem;
