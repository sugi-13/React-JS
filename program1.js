import './App.css';

function App() {
  const welcome = 'vanakam da mapla madurai la irunthu';
  function names(){
    var name = ['dharshini','priyo','divya'];
    var int = Math.floor(Math.random() * 3);
    return name[int];
  }
  return (
   <div>
    <h4>{welcome}</h4>
    <p>Sunday dating with {names()}</p>
  </div>
  );
}

export default App;
