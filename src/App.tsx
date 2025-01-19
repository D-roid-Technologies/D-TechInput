import React, { ChangeEvent } from 'react';
import './App.css';
import DTextInput from './App/UI/Components/DTextInput/DTextInput';

function App() {
  return (
    <DTextInput label={'Sex'} name={'me'} value={'value'} onChange={() => { }} />
  );
}

export default App;
