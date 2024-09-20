import ReactDOM  from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Sparkle } from "./components/Sparkle.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <Sparkle>
        <App />
      </Sparkle>
    </ThemeProvider>
  </BrowserRouter>
);
