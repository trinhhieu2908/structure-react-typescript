export interface UserState {
  id: string;
  name: string;
}

const initialState: UserState = {
  id: "string",
  name: "string",
};

const userReducer = (state: UserState = initialState) => {
  return state;
};

export default userReducer;
