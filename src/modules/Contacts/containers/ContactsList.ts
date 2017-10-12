import { ContactsList } from '../components/ContactsList';
import { stateMapper } from '../selectors';
import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import { prop } from 'ramda';

export default compose(
  connect(stateMapper),
  branch(
    ({ contacts }) => !contacts,
    renderNothing
  ),
)(ContactsList);
