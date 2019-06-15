import * as React from "react";
interface Props {}

export type ButtonType = "primary" | "info" | "warning" | "success" | "default";

const Arrow = () => {
  return <i className="fa fa-fw fa-arrow-right white pa3 mr2" />;
};
const Check = () => {
  return <i className="fa fa-fw fa-check white ml1" />;
};

/**
 * @see<https://www.codeseek.co/elussich/flex-layout-samples-with-tachyons-KNPqLJ>
 */
export const Header = (props: Props) => {
  return (
    <div className="ma0 flex vh100">
      <header className="z-5 bg-rbs-blue fixed w-100 ph2 pv2 pv2-ns ph2-m ph5-l">
        {/* nav bar left */}
        <nav className="cf">
          <div className="fl">
            <img
              className="br-100 h3 w3 dib ba b--black-05 pa2 mr3"
              src="https://avatars0.githubusercontent.com/u/729613?v=4"
              alt="pjsvis"
            />
            <div className="link dim white dib mr3">
              GDPR Breach Management System
            </div>
          </div>
          {/* nav bar right */}
          <div className="fr pa3">
            <a className="f6 link dib white dim mr3 mr4-ns" href="#0">
              About
            </a>
            <a className="f6 link dib white dim mr3 mr4-ns" href="#0">
              Sign In
            </a>
            <a
              className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
              href="#0"
            >
              Sign Up
            </a>
          </div>
        </nav>
        {/* progress bar centered */}
        <nav className="cf fl f6 fw6 ttu tracked">
          <div className="flex-center">
            <button type="button" className="btn btn-xs btn-primary mb2">
              About You
              <Check />
            </button>
            <Arrow />
            <button type="button" className="btn btn-xs btn-primary mb2">
              Find Out
              <Check />
            </button>
            <Arrow />
            <button type="button" className="btn btn-xs btn-primary mb2">
              What Happened
              <Check />
            </button>
            <Arrow />
            <button type="button" className="btn btn-xs btn-primary mb2">
              Categorise
              <Check />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};
