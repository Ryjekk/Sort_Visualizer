import React from 'react';
import Layout from '../src/hoc/Layout/Layout'
import SortContent from "./containers/SortContent/SortContent";

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <SortContent />
      </Layout>
    </div>
  );
}

export default App;
