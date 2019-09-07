import * as React from 'react';
import { FC } from 'react';
import Sticky from 'react-stickynode';
import { Header } from './header';
import { Main } from './main';
import { StickyMenu } from './sticky-menu';

export const App: FC = () => {
  App.displayName = 'App';
  return (
    <>
      <div className="content">
        <Header />
        <Sticky enabled={true} top={78} bottomBoundary={10000} innerZ={2}>
          <StickyMenu />
        </Sticky>
        <Main />
      </div>
    </>
  );
};
