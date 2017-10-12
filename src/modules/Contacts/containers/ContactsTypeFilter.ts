import { connect } from 'react-redux';
import { compose, withProps, withState, withHandlers } from 'recompose';
import { prop, range, filter } from 'ramda';
import { contactsTypeFilter } from '../../../filters/contactsTypeFilter';
import { stateMapper } from '../selectors';
import { updateContacts } from '../../../core/actions'
import { ContactsTypeFilter } from '../components/ContactsTypeFilter';

export default compose(
  connect(stateMapper),
  withProps(
    (props) => ({
      types: ['Shipping/Carrier', 'Customers', 'Contractor', 'Employee']
    })
  ),
  withState(
    'selectedType',
    'handleSelectType',
    null
  ),
  withHandlers({
    handleSelect: ({ handleSelectType, dispatch, contacts }) => (e) => {
      const selectedChar = e.target.value;
      const filteredContacts = contactsTypeFilter(contacts.data, selectedChar);
      handleSelectType(selectedChar);
      dispatch(updateContacts(filteredContacts));
    }
  })
)(ContactsTypeFilter);
