import React from 'react';

import GlobalStyles from '~/styles/global';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Layout;
