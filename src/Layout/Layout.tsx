"use client";
import { persistor, store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </SessionProvider>
  );
};

export default Layout;

// "use client";
// import { store } from "@/redux/store";
// // import { persistor, store } from "@/redux/store";
// import React from "react";
// import { Provider } from "react-redux";
// // import { PersistGate } from "redux-persist/integration/react";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// export default Layout;
