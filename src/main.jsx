import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./firebase/firebaseContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);
