export const contactsTypeFilter: any = (data, type): any => {
  return data.filter(i => i.contactType == type);
};
