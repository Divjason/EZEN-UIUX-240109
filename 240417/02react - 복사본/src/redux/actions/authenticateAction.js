const login = (id, password) => {
  return (dispatch) => {
    console.log("login success action");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
};

export const authenticateAction = { login };
