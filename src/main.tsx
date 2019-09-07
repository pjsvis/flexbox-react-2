import * as React from 'react';
import { FormExample } from './form-example';

/**
 * @see<https://www.codeseek.co/elussich/flex-layout-samples-with-tachyons-KNPqLJ>
 */
export const Main = (): JSX.Element => {
  const mainColStyle = 'w-100 ba br3 b--black-10 pa3 ml3 mr3 shadow-4';
  return (
    <>
      <div className="flex justify-between pa2 animated fadeIn fast">
        <div className={mainColStyle}>
          <div className="hi2 f6">
            Copy and paste divs in main to push footer down.
          </div>
          <div className="hi2 f6">main</div>
          <div className="hi2 f6">main</div>
          <div className="hi2 f6">main</div>
          <div className="hi2 f6">main</div>
          <FormExample />
          <div className="pretty p-switch p-fill">
            <input type="checkbox" />
            <div className="state p-success">
              <label>Outline</label>
            </div>
          </div>
          <div className="pretty p-switch p-fill p-pulse">
            <input type="checkbox" />
            <div className="state p-danger">
              <label>Fill</label>
            </div>
          </div>
          <div className="pretty p-switch p-fill p-pulse">
            <input type="checkbox" />
            <div className="state">
              <label>Slim</label>
            </div>
          </div>

          <div className="pretty p-icon p-curve p-pulse">
            <input type="checkbox" />
            <div className="state">
              <i className="icon fa fa-check green" />
              <label>Default</label>
            </div>
          </div>

          <div className="pretty p-icon p-curve p-fill p-pulse">
            <input type="checkbox" />
            <div className="state">
              <i className="icon fa fa-times red" />
              <label>Fill</label>
            </div>
          </div>

          <div className="pretty p-icon p-round p-pulse">
            <input type="radio" name="icon_solid" />
            <div className="state p-success">
              <i className="icon fa fa-check" />
              <label>New York</label>
            </div>
          </div>

          <div className="pretty p-icon p-round p-fill p-pulse">
            <input type="radio" name="icon_solid" />
            <div className="state p-success">
              <i className="icon fa fa-check" />
              <label>Paris</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
