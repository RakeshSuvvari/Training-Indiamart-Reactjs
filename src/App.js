// import logo from './logo.svg';
import Greet from './1.components/1.function/Greet';
import { GreetNamed } from './1.components/1.function/GreetNamed';
import { GreetOne, GreetTwo } from './1.components/1.function/multiGreet';
import { NamedFatArrow } from './1.components/1.function/NamedFatArrow';
import DefaultFatArrow from './1.components/DefaultFatArrow';
import { NamedWelcome } from './1.components/2.class/NamedWelcome';
import Welcome from './1.components/2.class/Welcome';
import './App.css';
import Hello from './2.jsx/Hello';
import Greeting from './3.props/Greeting';

function App() {
  return (
    <div className="container">
      
      <Greet></Greet>
      <GreetNamed />
      <DefaultFatArrow />
      <NamedFatArrow />
      <GreetOne />
      <GreetTwo />
      <Welcome />
      <NamedWelcome />
      <br /><br />
      <Hello />
      <Greeting name ="Rakesh" 
      id = {1}
      isAdmin = {true}
      department = {null}
      details = {undefined}
      address = {{city: "Boston"}}
      displayOne = {function (){return "Welcome to ReactJS"}}
      displayTwo = {() => "Welcome to ReactJS"}
      subjects = {["Agile", "ReactJS", "Angular"]}
      />
      
    </div>
  );
}

export default App;
