export function addTeacher(teacher) {
  return {
    type: "ADD_TEACHER",
    payload: {
      teacher,
    },
  };
}

export function deleteTeacher(id) {
  return {
    type: "DELETE_TEACHER",
    payload: {
      id,
    },
  };
}

export function setTeachers(teachers) {
  return {
    type: "SET_TEACHERS",
    payload: {
      teachers,
    },
  };
}
