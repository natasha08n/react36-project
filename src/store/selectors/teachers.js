import { createSelector } from "@reduxjs/toolkit";

export const getTeachers = (state) => state.teachers.items;

export const getTeachersLoadingStatus = (state) => state.teachers.loading;

export const getTeacher = createSelector(
  [(_, id) => id, getTeachers],
  (id, teachers) => teachers.find((teacher) => teacher.id === Number(id))
);

export const getTeachersByQuery = createSelector(
  [(_, query) => query.toLowerCase(), getTeachers],
  (query, teachers) =>
    !query
      ? teachers
      : teachers.filter((teacher) => {
          const name = teacher.name.toLowerCase();
          const surname = teacher.surname.toLowerCase();
          const description = teacher.description.toLowerCase();

          return (
            name.includes(query) ||
            surname.includes(query) ||
            description.includes(query)
          );
        })
);
