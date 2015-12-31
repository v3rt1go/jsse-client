'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import WideTemplate from './templates/wide';

const mainMountNode = document.getElementById('main');

const JsseClient = () => {
  return (
    <Router>
      <Route path="/" component={WideTemplate}>
        <IndexRoute />
      </Route>
    </Router>
  );
};

ReactDOM.render(<JsseClient />, mainMountNode);
