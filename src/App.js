import './App.css';
import DataBlock from './Components/DataBlock';
import ErrorBlock from './Components/ErrorBlock';
import LoadingBlock from './Components/LoadingBlock';

function App() {

  return (
    <div className="App">
      <DataBlock url="http://localhost:7070/data" />
      <ErrorBlock url="http://localhost:7070/error" />
      <LoadingBlock url="http://localhost:7070/loading" />
    </div>
  );
}

export default App;
