import { ContactsList } from '../components/ContactsList';
import { stateMapper } from '../selectors';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { prop } from 'ramda';

export default compose(
  connect(stateMapper),
)(ContactsList);
