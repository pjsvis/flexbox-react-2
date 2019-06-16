import * as React from "react";


interface Props {}



/**
 * @see<https://www.codeseek.co/elussich/flex-layout-samples-with-tachyons-KNPqLJ>
 */
export const Header = (props: Props) => {
  return (
    <div className="w-100">
      <header className="bg-rbs-blue w-100 ph2 pv2 pv2-ns ph2-m ph5-l">
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
            <a className="w-100 f6 link dib white dim mr3 mr4-ns" href="#0">
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
       
      </header>
    </div>
  );
};
