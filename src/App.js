import React from 'react';
import HelloModalWindow from './components/HelloModalWindow/HelloModalWindow'
import ButtonTest from './components/ButtonTest/ButtonTest'
import ConditionalTest from './components/ConditionalTest/ConditionalTest'
import Snippets from './components/SnippetTest/SnippetTest';
import FormTest from './components/FormTest/FormTest';
// import './App.css';



function App() {
  return (
    <div className="App">
        {/* <HelloModalWindow index={0}/> */}
        <ButtonTest/>
        <ConditionalTest />
        <Snippets />
        =========
        <FormTest />
    </div>
  );
}

export default App;
