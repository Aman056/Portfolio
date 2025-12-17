// import logo from './logo.svg';
import './App.css';
import Background from './Components/Background';
import Bio from './Components/Bio';
import EmailMe from './Components/EmailMe';
import Landing from './Components/Landing';
import MyRole from './Components/MyRole';
import ScrollAni from './Components/ScrollAnimation/ScrollAni';
import Work_Wofo from './Components/Work_at_wofo';
import Work_Apping from './Components/Work_at_apping';
import Work_with_me from './Components/Work_with_me';


function App() {
  return (
    <div className="App">

      <Landing />
      <EmailMe />
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div className='scroll-ani-div'>

        <ScrollAni />
        </div>
        <div>
          <Bio />
          <Background />
          <Work_Apping/>
          <Work_Wofo />
          <MyRole />
          <Work_with_me />
        </div>

      </div>
    </div >
  );
}

export default App;
