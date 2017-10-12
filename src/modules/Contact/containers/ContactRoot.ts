import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { prop } from 'ramda';
import { getContact } from '../../../core/actions'
import { stateMapper } from '../selectors';
import { ContactLayout } from '../components/ContactLayout';

export default compose(
  connect(stateMapper),
  lifecycle({
    componentDidMount() {
      const { dispatch, match }:any = this.props;
      dispatch(getContact({id: match.params.id}))
    }
  }),
  branch(
    ({ contact }) => !contact,
    renderNothing
  ),
)(ContactLayout);
