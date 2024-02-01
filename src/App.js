import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Form from './components/Form';

function App() {
  
  function clicked() {
    alert('app.js')
  }
  
  return (
    <div className="container">
      <Name/>
      <Example names ={['Python', 'Java', 'C', 'Cpp']}/>
      <Form/>
    </div>
  );
}

export default App;
