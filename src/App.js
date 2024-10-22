import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataInputFrom from './DataInputFrom';
import Table from './Table';


function App() {
  const [submittedData, setSubmittedData] = useState(null); 
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<DataInputFrom setSubmittedData={setSubmittedData} />} 
        />
        <Route 
          path="/display" 
          element={<Table data={submittedData} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
