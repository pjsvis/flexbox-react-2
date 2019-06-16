import * as React from "react";
interface Props {}

/**
 * @see<https://www.codeseek.co/elussich/flex-layout-samples-with-tachyons-KNPqLJ>
 */
export const Main = (props: Props) => {
  const sideColStyle = 'w-20 ba br3 b--black-10 pa2 ml3 mr3'
  const mainColStyle = 'w-60 ba br3 b--black-10 pa2 ml3 mr3'
  return (
    <>
      <div className="flex justify-between pa2">
        <div className={sideColStyle}>
          <div className="hi2 f6">left</div>
          <div className="hi2 f6">left</div>
          <div className="hi2 f6">left</div>
          <div className="hi2 f6">left</div>
        </div>
        <div className={mainColStyle}>
          <div className="hi2 f6">main</div>
          <div className="hi2 f6">main</div>
          <div className="hi2 f6">main</div>
          <div className="hi2 f6">main</div>
          <div className="hi2 f6">main</div>
        </div>
        <div className={sideColStyle}>
            <div className="hi2 f6">right</div>
            <div className="hi2 f6">right</div>
            <div className="hi2 f6">right</div>
            <div className="hi2 f6">right</div>

            <div className="hi2 f6">right</div>

        </div>
      </div>
    </>
  );
};
