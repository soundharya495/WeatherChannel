import WeatherBoard from "./viewsList/WeatherBoard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="appLayout">
      <ThemeProvider theme={theme}>
        <WeatherBoard />
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
