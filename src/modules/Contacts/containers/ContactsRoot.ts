import { connect } from 'react-redux';
import { compose } from 'recompose';
import { prop } from 'ramda';
import { stateMapper } from '../selectors';
import { ContactsLayout } from '../components/ContactsLayout';

export default compose(
  connect(stateMapper)
)(ContactsLayout);
