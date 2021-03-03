
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

  const [ rooms, setRooms] = useState([]);
  const [ user, setUser] = useState();

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc)=>{
        return { id: doc.id, name: doc.data().name }
        //return doc.data();
      }))
      
    })

  }

  useEffect(() => {
    getChannels();

  },[])

  //console.log(rooms);
  
  return (
    <div className ="App">
      <Router>
        {
          !user ? 
          <Login/>
        :


        <Container>
          <Header/>
         
          <Main>
              <Sidebar rooms={rooms}/>
                <Switch>

                  <Route path="/room">

                  </Route>
                  <Chat/>

                  <Route path="/">
                  <login/>
                 </Route>

                </Switch>

        </Main>
      </Container>
        }
      </Router>
        
    </div>
  );
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:grid;
  grid-template-rows: 38px auto;

  `

  const Main = styled.div `
    display: grid;
    grid-template-columns: 260px auto;
  `