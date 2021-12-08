import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { Provider } from "react-redux";

import { store } from "./store/index";
import { Home } from "./views/Home";
import { Loading } from "./components/Loading";
import { Menu } from "./components/Menu";
import { theme } from "./theme/colors";

const AsyncTeacher = lazy(() => import("./views/Teacher"));
const AsyncTeachers = lazy(() => import("./views/Teachers"));
const AsyncForm = lazy(() => import("./views/Form"));

export const ThemeContext = createContext(theme.dark);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={theme.light}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route index element={<Home />} />
              <Route path="/form" element={<AsyncForm />} />
              <Route path="/teachers" element={<AsyncTeachers />} />
              <Route path="/teachers/:id" element={<AsyncTeacher />} />
            </Routes>
          </Suspense>
        </ThemeContext.Provider>
      </Provider>
    );
  }
}

export default App;
