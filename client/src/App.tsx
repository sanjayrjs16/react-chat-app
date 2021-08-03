
import './App.css';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'; 

import Join from './components/join/Join';
import Chat from './components/chat/Chat';

function App() {
  return (
   <Router>
     <Route path="/" exact  component={Join} />
     <Route path="/chat" render={() => <Chat location={window.location} />} />
   </Router>
  );
}

export default App;
