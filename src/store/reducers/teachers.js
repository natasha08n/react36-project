const DEFAULT_STATE = [];

export const teachersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "ADD_TEACHER":
      return [...state, action.payload.teacher];
    case "DELETE_TEACHER":
      return state.filter((i) => i.id !== action.payload.id);
    case "SET_TEACHERS":
      return [...state, ...action.payload.teachers];
    case "REMOVE_TEACHERS":
        return DEFAULT_STATE;
    default:
      return state;
  }
};
