const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const contactsName = state.contacts.map(el => el.name);
      const name = action.payload.name;
      return contactsName.includes(name)
        ? (alert(`${name} is already in contacts`), state)
        : { ...state, contacts: [...state.contacts, action.payload] };
    }

    case 'contacts/delContact': {
      const delID = action.payload.id;
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== delID),
      };
    }

    case 'filter/updateFilter': {
      return { ...state, filter: action.payload.filter };
    }

    default:
      return state;
  }
};
