
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <>
    <h1>MeMe Generator</h1>

<Routes>
  <Route path={'/'} element={<Home/>}/>
</Routes>
</>    
  );
}

export default App;
