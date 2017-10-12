import { ContactsLayout } from '../components/ContactsLayout';
import { stateMapper } from '../selectors';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { prop } from 'ramda';

export default compose(
  connect(stateMapper)
)(ContactsLayout);
