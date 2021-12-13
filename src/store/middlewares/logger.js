export const logger = (store) => (next) => (action) => {
  if (action.type === "teachers/setTeachers") {
    console.log("Hey-hey-hey");
  }
  console.log("dispatching", action);

  console.log("prev state", store.getState());

  let result = next(action);

  console.log("next state", store.getState());
  return result;
};
