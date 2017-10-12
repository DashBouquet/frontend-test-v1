import { createSelector } from '../../utils/createSelector';
import { prop } from 'ramda';

const ModuleState = ({ contacts }) => contacts;
const ListState = ({ contactList }) => contactList;

export const getList = createSelector(
  ListState,
  (contactList) => ({
    contactList
  })
);

export const stateMapper = createSelector(
  ModuleState,
  (contacts) => ({
    contacts
  })
);
