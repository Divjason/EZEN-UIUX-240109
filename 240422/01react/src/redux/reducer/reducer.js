const initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
};

export default reducer;
