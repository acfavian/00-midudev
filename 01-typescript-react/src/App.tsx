import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

import { Sub } from './types'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'dapelu hace de moderardor a veces',
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_errano',
  }
]

function App() {
  // const [subs, setSubs] = useState<Array<Sub>>([])
  const [subs, setSubs] = useState<AppState["subs"]>([])
  // const [newSubsNumber, setNewSubsNumber] = useState<number>(0)

  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
  
  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  // const [number, setNumber] = useState<number>(5)
  // const changeNumber = () => {
  //   setNumber('2')
  // }
  return (
    <div className="App">
      {/* {number}
      <button onClick={changeNumber}>Change number</button> */}
      <h1>midu subs</h1>
      <List subs={subs} />
      {/* <Form onNewSub={setSubs}/> */}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
