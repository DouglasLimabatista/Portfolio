import './App.css';
import Menu from './components/Menu'
import Panel from './components/Panel';
import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills'
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      {Menu()} {About()} {Panel()} {Projects()}
      {Skills()} {Contacts()}
    </div>
  )
}

export default App;
