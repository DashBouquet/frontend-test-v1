import { connect } from 'react-redux';
import { compose } from 'recompose';
import { prop } from 'ramda';
import { getContact } from '../selectors';
import { ContactCard } from '../components/ContactCard';

export default compose(
  connect(getContact)
)(ContactCard);
