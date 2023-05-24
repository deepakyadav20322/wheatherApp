
import './assets/App.css'
import Header from './components/Header'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
       <h1>
          <Header/>
          <Main/>
       </h1>
    </div>
  );
}

export default App;
