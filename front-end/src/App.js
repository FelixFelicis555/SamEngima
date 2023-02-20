// Routing of the web application handled here
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import './App.css';
import Meet from './Components/Meet/Meet';
import Join from './Components/Join/Join';
import Home from './Components/Home/Home';
import { ContextProvider } from './SocketContext';
import Message from './Components/Messages/Message';
import JoinRoom from './Components/JoinRoom/JoinRoom';
import ChatRoom from './Components/Chat Room/ChatRoom';
import { useEffect } from 'react';

function App() {
    //if application is not connected to the internet, display this alert

    useEffect(() => {
        if (!navigator.onLine) alert('Connect to internet!');
    }, );

    return (
        //SocketContect provider for the components
        <ContextProvider >
        <Router >
        <Routes >
        <Route exact path = '/'component = { Home } > </Route> 
        <Route path = '/meet' component = { Meet } > </Route> 
        < Route path = '/message' component = { Message } > </Route> 
        < Route path = '/join' component = { Join } > </Route>
        <Route path = '/joinRoom'  component = { JoinRoom } ></Route> 
         <Route path = '/chatRoom'component = { ChatRoom } > </Route> 
         </Routes >
          </Router>  
           </ContextProvider>
    );
}

export default App;