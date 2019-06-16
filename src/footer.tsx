import * as React from "react";

interface Props {}

/**
 * @see<https://www.codeseek.co/elussich/flex-layout-samples-with-tachyons-KNPqLJ>
 */
export const Footer = (props: Props) => {
  return (
    <div className="w-100 bg-rbs-blue white pa2 animated fadeIn fast">
      <div className="fl ml2 f7">Crazy Data Management System</div>
      <div className="fr mr2 f7">Version 0.0.19</div>
    </div>
  );
};
