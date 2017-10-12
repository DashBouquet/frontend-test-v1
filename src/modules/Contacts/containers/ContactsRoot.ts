import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { prop } from 'ramda';
import { stateMapper } from '../selectors';
import { updateContacts } from '../../../core/actions'
import { ContactsLayout } from '../components/ContactsLayout';

export default compose(
  connect(stateMapper),
  branch(
    ({ contacts }) => !contacts,
    renderNothing
  ),
  lifecycle({
    componentDidMount() {
      const { dispatch, contacts }:any = this.props;
      dispatch(updateContacts(contacts.data));
    }
  })
)(ContactsLayout);
