import GlobalStyle from "./styles/global";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./context/ThemeProvider";

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
