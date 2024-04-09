import { PropsWithChildren } from "react";
import Realm from "realm";
import { RealmProvider } from "@realm/react";
import { Task } from "../models/Task";

const RealmCustomProvider = ({ children }: PropsWithChildren) => {
  return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
};

export default RealmCustomProvider;
