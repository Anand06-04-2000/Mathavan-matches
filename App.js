import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate=useNavigate();
  const login=()=>{
      navigate('/login');
  }
  const signup=(e)=>{
    e.preventDefault();
     navigate('/signup');
  }
  return (
    <div className="bg-container">  
    <div className='container'>
      <div className='container pt-3 my-3 bg-primary text-white'>

        <h1>welcome to Mathavan Matches</h1><br></br>
        </div>
        <br></br>
        <div className='container'>
        <button className='btn btn-primary' onClick={login}>Login</button><pre></pre>
        <button className='btn btn-success' onClick={signup}>Signup</button><br></br>
        </div>
    </div>
    </div>
  );
}

export default App;
