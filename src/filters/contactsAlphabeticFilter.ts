export const alphabeticFilter: any = (data, char): any => {
  return data.filter((i) => {
    return i.contactName.charAt(0).toLowerCase() == char.toLowerCase();
  });
};
