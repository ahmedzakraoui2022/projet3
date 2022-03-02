
import './App.css';
import x from"./voiture_renault.jpg" ;
function App() {
  return (
    <div className="App">
      <h1>premier projet en jsx</h1>
      <img src="./voiture peugeot.jpg"/>
      <video width="500" height="300" controls>
      <source src="./lavage.mp4" type="video/mp4"/>
      </video>
      <img src= {x}/>
    </div>
  );
}

export default App;
