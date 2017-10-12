import { ContactCard } from '../components/ContactCard';
import { stateMapper } from '../selectors';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { prop } from 'ramda';
import { getContact } from '../../../core/actions'

export default compose(
  connect(stateMapper),
  lifecycle({
    componentDidMount() {

      console.log(this.props.match);
      this.props.dispatch(getContact({id: this.props.match.params.id}))
    }
  })
)(ContactCard);
