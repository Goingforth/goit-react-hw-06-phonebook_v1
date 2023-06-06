import { nanoid } from 'nanoid';
export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const delContact = id => {
  return {
    type: 'contacts/delContact',
    payload: { id },
  };
};

export const updateFilter = value => {
  return {
    type: 'filter/updateFilter',
    payload: {
      filter: value,
    },
  };
};
