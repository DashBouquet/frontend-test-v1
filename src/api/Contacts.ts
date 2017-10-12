import { request } from './base';

export
const fetchContacts = (params: any = {}): Promise<any> => {
  return request
    .get('contacts', params)
    .then((contacts): any => contacts);
};

export
const fetchContactById = (id: string, params: any = {}): Promise<any> => {
  return request
    .get(`contacts/${id}`, params)
    .then((contact):any => contact);
};
