import React from 'react';
import './App.css';

import FlexNavbar from './components/FlexNavbar';
import FlexFooter from './components/FlexFooter';

export default function App(props) {
  return (
    <>
      <FlexNavbar />
      {props.children}
      <FlexFooter />
    </>
  );
}
