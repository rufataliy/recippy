import React from "react";
import { Layout } from "./components";
import { StateProvider } from "./store";

function App() {
  return (
    <StateProvider>
      <Layout />
    </StateProvider>
  );
}

export default App;
