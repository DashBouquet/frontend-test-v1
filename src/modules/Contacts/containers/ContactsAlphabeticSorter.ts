import { connect } from 'react-redux';
import { compose, withProps, withState, withHandlers, lifecycle } from 'recompose';
import { prop, range, filter } from 'ramda';
import { alphabeticFilter } from "../../../filters/contactsAlphabeticFilter";
import { stateMapper } from '../selectors';
import { updateContacts } from '../../../core/actions';
import { ContactsAlphabeticSorter } from '../components/ContactsAlphabeticSorter';

export default compose(
  connect(stateMapper),
  withProps(
    (props) => ({
      alphabet: range('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1).map(i => String.fromCharCode(i)),
    })
  ),
  withState(
    'selectedChar',
    'handleSelectChar',
    null
  ),
  withHandlers({
    handleSelect: ({ handleSelectChar, dispatch, contacts }) => (e) => {
      const selectedChar = e.target.value;
      const filteredContacts = alphabeticFilter(contacts.data, selectedChar);
      handleSelectChar(selectedChar);
      dispatch(updateContacts(filteredContacts));
    }
  })
)(ContactsAlphabeticSorter);
