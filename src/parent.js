import React from 'react';
import './style.css';
import Header from './Header.js';
import Brand from './Brand.js';
import Brandcatalogue from './Brandcatalogue.js';
import New from './New.js';

export default function Parent() {
  return (
    <div>
      <Header />
      <Brand />
      <New />
      <Brandcatalogue />
      <Brandcatalogue />
      <Brandcatalogue />
      <Brandcatalogue />
      <Brandcatalogue />
      <Brandcatalogue />
    </div>
  );
}
