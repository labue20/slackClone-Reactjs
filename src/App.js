
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Chat from './component/Chat';
import Login from './component/Login';
import styled from 'styled-components';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import { auth, provider } from "./firebase";


import React, { useEffect, useState } from 'react';


import db from './firebase';


function App() {

  const [ rooms, setRooms] = useState([]);
  const [ user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

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

  console.log("user in app state", user);

  const signOut = () =>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }
  
  return (
    <div className ="App">
      <Router>
        {
          !user ? 
          <Login setUser ={setUser}/>
        :


        <Container>
          <Header signoutuser={user}/>
         
          <Main>
              <Sidebar rooms={rooms}/>
                <Switch>

                  <Route path="/room">

                  </Route>
                  <Chat/>

                

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