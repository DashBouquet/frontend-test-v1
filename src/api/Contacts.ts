import { request } from './base';

export
const fetchContacts = (params: any = {}): Promise<any> => {
  return request
    .get('contacts', params)
    .then((contacts): any => contacts);
};
