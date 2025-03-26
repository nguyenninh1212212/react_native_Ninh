import React from "react";
import { AuthProvider } from "./components/context/AuthContext";
import RootRouter from "./components/Router/index";

const App = () => {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
};

export default App;
