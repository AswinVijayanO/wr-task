import "./App.css";
import Routes from "./route/routes";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./mainTheme";
const cache = createCache({
  key: "css",
  prepend: true,
});

function App() {
  return (
    <div className="App">
      <CacheProvider value={cache}>
      <ThemeProvider theme={mainTheme}>
        <Routes />
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
