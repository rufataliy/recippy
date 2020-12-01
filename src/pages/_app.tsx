import React, { useEffect } from "react";
import { Layout } from "@/components";
import "@/asssets/styles/index.css";
import { StateProvider } from "@/store";

interface Props {
  Component: React.FunctionComponent;
  pageProps: any;
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
  useEffect(() => {
    setRootHeight();
    window.addEventListener("resize", (e) => {
      if ((e.target as typeof window)?.innerWidth < 500) {
        setRootHeight();
      }
    });

    function setRootHeight() {
      const root = document.getElementById("__next");
      if (root) {
        root.style.height = window.innerHeight.toString() + "px";
      }
    }
  }, []);

  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
        <script> </script>
      </Layout>
    </StateProvider>
  );
};

export default App;
