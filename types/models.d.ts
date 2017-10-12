/** ContactsMVC model definitions **/

declare interface ContactItemData {
  address: {
    line1: string
  },
  contactName: string,
  contactType: string,
  id: string,
  phone: string
}

declare interface ContactsLinksData {
  first: string,
  last: string,
  next: string,
  prev: string,
  self: string
}

declare interface ContactsMetaData {
  current_page: number,
  total_pages: number
}

declare interface ContactsData {
  data: ContactItemData[],
  links: ContactsLinksData,
  meta: ContactsMetaData
}

declare interface ContactData {
  data: {
    id: string,
    active: boolean,
    contactType: string,
    contactName: string,
    contactEmail: string,
    phone: string,
    address: {
      line1: string,
      line2: string,
      city: string,
      state: string,
      country: string,
      postcode: string
    },
    avatar: string,
    carrierName: string,
    account: {
      state: string,
      amount: number,
      dueDate: string
    },
    invoices: any[],
    paymentDetails: {
      cardNumber: string,
      expiryMonth: string,
      expiryYear: string,
      checked: boolean
    }
  }
}

declare type ContactsStoreState = ContactsData;

declare type ContactStoreState = ContactData;