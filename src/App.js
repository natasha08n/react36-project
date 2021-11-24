import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";

import { Home } from "./views/Home";
import { Loading } from "./components/Loading";
import { theme } from "./theme/colors";

const AsyncTeacher = lazy(() => import("./views/Teacher"));
const AsyncTeachers = lazy(() => import("./views/Teachers"));
const AsyncForm = lazy(() => import("./views/Form"));

export const ThemeContext = createContext(theme.dark);

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={theme.light}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/form" element={<AsyncForm />} />
            <Route path="/teachers" element={<AsyncTeachers />} />
            <Route path="/teachers/:id" element={<AsyncTeacher />} />
          </Routes>
        </Suspense>
      </ThemeContext.Provider>
    );
  }
}

export default App;
