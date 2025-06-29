import { Redirect, Route, Switch } from "wouter";
import MainLayout from "./components/layouts/MainLayout";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Switch>
          <Route path={"/"}>
            <Redirect to="/home" />
          </Route>

          <Route path={"/home"} component={Home}></Route>
        </Switch>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
