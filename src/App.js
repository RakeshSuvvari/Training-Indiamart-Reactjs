// import logo from './logo.svg';
import Greet from './1.components/1.function/Greet';
import { GreetNamed } from './1.components/1.function/GreetNamed';
import { GreetOne, GreetTwo } from './1.components/1.function/multiGreet';
import { NamedFatArrow } from './1.components/1.function/NamedFatArrow';
import DefaultFatArrow from './1.components/DefaultFatArrow';
import './App.css';

function App() {
  return (
    <div className="container">
      <Greet></Greet>
      <GreetNamed />
      <DefaultFatArrow />
      <NamedFatArrow />
      <GreetOne />
      <GreetTwo />
    </div>
  );
}

export default App;
