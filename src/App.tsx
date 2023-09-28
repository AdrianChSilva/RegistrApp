import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "./App.css";
import "./styles/TimeLine.css";
import "primeicons/primeicons.css";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./tracker/components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <AppRouter />
    </>
  );
}

export default App;
