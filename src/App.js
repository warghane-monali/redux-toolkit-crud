import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CrudOpration } from './components/crudOperationScreen/CrudOpration';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CrudOpration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
