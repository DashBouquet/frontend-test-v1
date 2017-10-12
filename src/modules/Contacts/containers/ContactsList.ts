import { ContactsList } from '../components/ContactsList';
import { getList } from '../selectors';
import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import { prop } from 'ramda';

export default compose(
  connect(getList),
  branch(
    ({ contactList }) => !contactList,
    renderNothing
  ),
)(ContactsList);
