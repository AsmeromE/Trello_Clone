import { PropsWithChildren } from "react";
import Realm from "realm";
import { RealmProvider, AppProvider, UserProvider } from "@realm/react";
import { Task } from "../models/Task";
import Login from "../components/Login";

const appId = "application-0-rshsq";

const RealmCustomProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={Login}>
        <RealmProvider schema={[Task]}>{children}</RealmProvider>
      </UserProvider>
    </AppProvider>
  );
};

export default RealmCustomProvider;
