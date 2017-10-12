import { createSelector } from '../../utils/createSelector';
import { prop } from 'ramda';

const ModuleState = ({ contact }) => contact;

export const stateMapper = createSelector(
  ModuleState,
  (contact) => ({
    contact
  })
);
