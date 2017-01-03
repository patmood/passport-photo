/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';

function Layout({ children }) {
  return (
    <div className='Layout'>
      <h1 className='title'>Passport Ready Photo</h1>
      <div className='container'>
        {children}
      </div>
      <footer className='footer'>
        Crafted by <a href='https://twitter.com/patmood' target='_blank'>patmood</a> - Tweet me yo feedback!
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
