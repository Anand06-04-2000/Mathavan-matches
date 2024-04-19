import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
 function Login(){
    const [useremail,setUseremail]=useState('');
    const [userpassword,setUserpassword]=useState('');
    const navigate=useNavigate();
    const Login=()=>{
        const log_det=[
            {
                useremail_:useremail,
                userpassword_:userpassword
            }
        ]
        axios.post('http://localhost:8000/login',{log_det}).then(res=>{
            //console.log(res);
            const bol=res;
            if(bol){
                console.log('user verified successfully');
                navigate('/product');
            }else{
                navigate('/');
            }
        });
        

    }
    return(
        <div className="container">
            <div className="container_border">
            <div className='container pt-3 my-3 bg-primary text-white'>

                <h1>Login</h1><br></br>
                </div>
                <div className="form-group">
                <label for="mail">Email</label>
                    <input type="email" className="form-control" value={useremail} onChange={(e)=>setUseremail(e.target.value)}/>
                    <br></br>
                    <label for="pass">Password</label>
                    <input type="password" className="form-control" value={userpassword} onChange={(e)=>setUserpassword(e.target.value)}/>
                    <br></br>
                    <button className="btn btn-primary" onClick={Login}>Login</button><br></br>
                     <br></br>
                </div>
            </div>
            
        </div>
    )
}
export default Login;