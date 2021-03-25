import './App.css';
import { useState } from 'react'
import CSVReader from "react-csv-reader";
import List from './List';

function App() {
  const [data, setData] = useState(null)
  const handleForce = (data) => {
    setData(data)
  }

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  }

  return (
    <div className="App">
      <CSVReader
        cssClass="react-csv-input"
        label="Import users"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      {
        data
        ? data.isArray
          ? <List data={data}/>
          : <h1>Некорректный формат файла</h1>
        : null
      }
    </div>
  );
}

export default App;
