import * as React from "react";
import { Header } from "./header";
import { Main } from "./main";

interface Props {}


export const App = (props: Props) => {
  return (
    <div className="content">
      <Header />
      <Main />
    </div>
  );
};
