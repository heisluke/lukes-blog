import Navbar from './Navbar';
import Home from './Home';

function App() {

  const hello = 'Luke is learning React!';
  const likes = 20;
  const fish = 'ragigy';
  const road = likes + ' ' + fish ;
  const link = 'https://google.com';


  return (
    <div className="App">
      <Navbar/>
     <div className="content">
        
        <Home/>
        
        {/*
        <h1> {hello} </h1>
        <p>This has been liked {likes} times. </p>
        <p> {road} </p>
        <a href= {link} >G.i.Y.F</a>
        <p> {[1,2,3,45,5,6]} </p>
        <p> {29} </p>
        <p> {Math.random() + 20 } </p>         
        */}
      </div>
    </div>
  );
}

export default App;
