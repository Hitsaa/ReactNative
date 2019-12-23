import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import SocialMediaButtons from './SocialMediaButtons'
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h2>Click a button below to test react-share@1.16.0 {'\u2728'}</h2>

    <SocialMediaButtons url="www.google.com" text="Check out this website: www.google.com"/>
  </div>
);

render(<App />, document.getElementById('root'));
