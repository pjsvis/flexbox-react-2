import * as React from "react";
import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TextareaAutosize from "react-textarea-autosize";
import ReactMarkdown from "react-markdown";

interface Props {
  onClick(source: string): void;
}
const guidance = `

**Please enter as much of a description as you can.** 

1. *You can include links to web sites by pasting in the link*

1. *Click on the Review tab to see a preview of your text.*

1. *Click on the Save button to submit your description.*

**Click on the Edit tab to begin**
`;
export const Editor = (props: Props) => {
  const [source, setSource] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    const src = e.target.value;
    setSource(src);
  };

  const handleClick = (source: string) => {
    if (!source) {
      alert("*Please enter a description of the breach*");
      return;
    }
    props.onClick(source);
  };
  return (
    <>
      <div className="fl w-50 mt4">
        <div className="f6 black-70 black-70 mb1">
          Please enter a description of the breach
        </div>
        <div className="ba br3 b--black-10 pa2">
          <Tabs className="f6">
            <TabList>
              <Tab>
                <i className="fa fa-fw fa-info-circle blue mr1" />
                Guidance
              </Tab>
              <Tab>
                <i className="fa fa-fw fa-pencil-square-o blue mr1" />
                Edit
              </Tab>
              <Tab>
                <i className="fa fa-fw fa-eye blue mr1" />
                Review
              </Tab>

              <button
                onClick={() => handleClick(source)}
                className="btn btn-sm btn-primary fr mb1 mr2"
              >
                <i className="fa fa-fw fa-save mr1" />
                Save
              </button>
            </TabList>
            <TabPanel>
              <ReactMarkdown
                source={guidance}
                escapeHtml={false}
                className=" f6"
              />
            </TabPanel>
            <TabPanel>
              <TextareaAutosize
                className="input-reset bn br3 b--black-0 form-control f6"
                onChange={handleChange}
                value={source}
                placeholder="Enter your description here..."
              />
            </TabPanel>
            <TabPanel>
              <ReactMarkdown
                source={
                  source ||
                  "*Please select the Edit tab and enter your description there...*"
                }
                escapeHtml={false}
                className=" f6"
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};
