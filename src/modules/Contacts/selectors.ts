import { createSelector } from '../../utils/createSelector';
import { prop } from 'ramda';

const ModuleState = ({ contacts }) => contacts;

export const stateMapper = createSelector(
  ModuleState,
  (contacts) => ({
    contacts
  })
);
