import * as React from "react";
import { ErrorBoundary } from "./error-boundary";
import { Provider } from "unstated";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import "./app.css";

interface Props {}

/**
 * @see<https://www.codeseek.co/elussich/flex-layout-samples-with-tachyons-KNPqLJ>
 */
export const App = (props: Props) => {
  return (
    <ErrorBoundary>
      <Provider>
        <div className="App site">
          <div className="site-content">
            <div className="App-header">
              <Header />
            </div>
            <div className="main">
              <Main />
            </div>
          </div>
          <Footer />
        </div>
      </Provider>
    </ErrorBoundary>
  );
};
