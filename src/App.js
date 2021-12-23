import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "./store/index";
import { Home } from "./views/Home";
import { Loading } from "./components/Loading";
import { Menu } from "./components/Menu";
import { theme } from "./theme/colors";
import { Login } from "./views/Login";
import Register from "./views/Register";
import { persistor } from "./store/index";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

const AsyncTeacher = lazy(() =>
  import("./views/Teacher").then((m) => ({ default: m.Teacher }))
);
const AsyncTeachers = lazy(() => import("./views/Teachers"));
const AsyncForm = lazy(() => import("./views/Form"));

export const ThemeContext = createContext(theme.dark);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value={theme.light}>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route
                  index
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/register"
                  element={
                    <PublicRoute>
                      <Register />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/form"
                  element={
                    <PrivateRoute>
                      <AsyncForm />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/teachers"
                  element={
                    <PrivateRoute>
                      <AsyncTeachers />
                    </PrivateRoute>
                  }
                >
                  <Route
                    path=":id"
                    element={
                      <PrivateRoute>
                        <AsyncTeacher />
                      </PrivateRoute>
                    }
                  />
                </Route>
              </Routes>
            </Suspense>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
