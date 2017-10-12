import { loadInitialData } from './actions';

export default function initialize(store:any) {
  store.dispatch(loadInitialData());
}
