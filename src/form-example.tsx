import * as React from "react";
import { useRef } from "react";
import {
  Form,
  Text,
  RadioGroup,
  Radio,
  Checkbox,
  useFieldState,
  useFormState,
  useFormApi
} from "informed";

interface Props {}

const Debug = () => {
  const formState = useFormState();
  return (
    <pre>
      <code>{JSON.stringify(formState, null, 2)}</code>
    </pre>
  );
};
const submit = (frmState: any) => {
  console.log("frmState", frmState);
};

export const FormExample = (props: Props) => {
  return (
    <div className="ba br3 b--black-10 shadow-5 pa2 ma2">
      <h5>Component using formApi:</h5>
      <Form initialValues={{ name: "xxx" }} onSubmit={submit}>
        {/* City radio buttons */}
        <RadioGroup field="city">
          <div className="pretty p-icon p-round p-pulse">
            <Radio type="radio" name="icon_solid" value="New York" />
            <div className="state p-success">
              <i className="icon fa fa-check" />
              <label>New York</label>
            </div>
          </div>

          <div className="pretty p-icon p-round p-pulse">
            <Radio type="radio" name="icon_solid" value="Paris" />
            <div className="state p-success">
              <i className="icon fa fa-check" />
              <label>Paris</label>
            </div>
          </div>
        </RadioGroup>
      
          <div className="pretty p-icon p-curve p-pulse">
            <Checkbox field="shapes" type="checkbox" />
            <div className="state">
              <i className="icon fa fa-check green" />
              <label>Default</label>
            </div>
          </div>

          <div className="pretty p-icon p-curve p-pulse">
            <Checkbox field="shapes" type="checkbox" />
            <div className="state">
              <i className="icon fa fa-times red" />
              <label>Fill</label>
            </div>
          </div>
      
        <div>
          <label>
            Name:
            <Text field="name" onBlur={submit} className="form-control" />
          </label>
          <button className="btn btn-sm btn-primary ml2" type="submit">
            <i className="fa fa-fw fa-save mr2" />
            Submit
          </button>

          <Debug />
        </div>
      </Form>
    </div>
  );
};
