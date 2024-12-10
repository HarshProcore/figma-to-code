import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppComponents } from "./pages/components/index.tsx";
import { SignInScreen } from "./components/auth/SignInScreen.tsx";
import { Background } from "./components/custom/Background.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Background></Background>} />
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/components" element={<AppComponents />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
