import * as React from "react";

interface Props {}

export const StickyMenu = (props: Props) => {
  return (
    <>
      <article className="fr mr3 mt2">
        <ul className="ba br3 b--black-10 shadow-4 list pl0 ml0 center ba b--light-silver br2 pointer">
          <li className="ph3 pv3 bb b--light-silver">Mackeral Tabby</li>
          <li className="ph3 pv3 bb b--light-silver">Burmese</li>
          <li className="ph3 pv3 bb b--light-silver">Orange Tabby</li>
          <li className="ph3 pv3 bb b--light-silver">Maine Coon</li>
          <li className="ph3 pv3 bb b--light-silver">Siamese</li>
          <li className="ph3 pv3 bb b--light-silver">Scottish Fold</li>
          <li className="ph3 pv3">American Bobtail</li>
        </ul>
      </article>
    </>
  );
};
