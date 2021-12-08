const DEFAULT_STATE = {};

export const draftTeacherReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "ADD_DRAFT_TEACHER":
      return {
        ...state,
        ...action.payload.teacher,
      };
    case "DELETE_DRAFT_TEACHER":
      return DEFAULT_STATE;
    default:
      return state;
  }
};
