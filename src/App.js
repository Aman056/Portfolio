// import logo from './logo.svg';
import './App.css';
import Background from './Components/Background';
import Bio from './Components/Bio';
import EmailMe from './Components/EmailMe';
import Landing from './Components/Landing';
import MyRole from './Components/MyRole';
import Work from './Components/Work';
import Work_with_me from './Components/Work_with_me';

function App() {
  return (
    <div className="App">
      <Landing />
      <EmailMe/>
      <Bio />
      <Background />
      <Work />
      <MyRole />
      <Work_with_me />
    </div>
  );
}

export default App;
