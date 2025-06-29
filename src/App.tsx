import { Redirect, Route, Switch } from "wouter";
import MainLayout from "./components/layouts/MainLayout";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Switch>
          <Route path={"/"}>
            <Redirect to="/home" />
          </Route>
          <Route path={"/home"} component={Home} />
          <Route path={"/signup"} component={SignUp} />
          <Route path={"/subscribe"} component={Subscribe} />
        </Switch>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
