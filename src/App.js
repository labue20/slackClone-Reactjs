
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Chat from './component/Chat';
import Login from './component/Login';
import styled from 'styled-components';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import React, { useEffect, useState } from 'react';

import db from './firebase';


function App() {

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })
      
    })

  }

  useEffect(() => {
    console.log("hello use effect")

  },[])

  getChannels();
  
  return (
    <div className ="App">
      <Router>
        <Container>
          <Header/>

          <Main>
          <Sidebar/>
          

        <Switch>
          <Route path="/room">
            <Chat/>

          </Route>

          <Route path="/">
            <login/>
          </Route>

        </Switch>

        </Main>
        </Container>
        
      </Router>
    </div>
  );
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100vh;
  //background:orange;
  display:grid;
  grid-template-rows: 38px auto;

  `

  const Main = styled.div `
    background :  white;
    display: grid;
    grid-template-columns: 260px auto;
  `