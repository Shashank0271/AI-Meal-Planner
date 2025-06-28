import MainLayout from "./components/layouts/MainLayout";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        {/* TODO : 
        define all the routes here and wrap them in main layout
      */}
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
