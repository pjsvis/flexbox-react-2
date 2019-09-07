import * as React from 'react';
import './error-boundary.css';

const logErrorToMyService = (error: $TsFixMe, info: $TsFixMe): void => {
  // eslint-disable-next-line no-console
  console.log(info);

  // eslint-disable-next-line no-console
  console.log(error);
};
interface Props {
  children: JSX.Element;
}

interface State {
  hasError: boolean;
  error: $TsFixMe;
  info: $TsFixMe;
}
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: undefined, info: undefined };
  componentDidCatch = (error: $TsFixMe, info: $TsFixMe): void => {
    // Display fallback UI
    this.setState({ hasError: true, error: error, info: info });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  };

  render(): JSX.Element {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>An error has occurred</h3>
              <div>
                <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
              </div>
              <div>
                <pre>{JSON.stringify(this.state.info, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
