import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Signup.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
export default function Signup(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [pass,setPassword]=useState('');
    const [confirm_pass,setConfirmPass]=useState('');
    const [user,setUser]=useState(false);
    const [admin,setAdmin]=useState(false);
    const [passwordmatch,setPasswordmatch]=useState(true);
    const navigate=useNavigate();
    
    const passwordcheck=(event)=>{
        const n_pass=event.target.value;
        setPassword(n_pass);
        setPasswordmatch(n_pass===confirm_pass);
    }
    const c_passwordcheck=(event)=>{
        const c_pass=event.target.value;
        setConfirmPass(c_pass);
        setPasswordmatch(pass===c_pass);
    }
    const setUserCheck=(e)=>{
        setUser(e.target.checked);
    }
    const setAdminCheck=(e)=>{
        setAdmin(e.target.checked);
    }
    const sendData=()=>{
            const details=[
                {name_:name,email_id:email,mobile_no:mobile,pass_:pass,confirm_pass_:confirm_pass,user_c:user,admin_c:admin}
            ];
            console.log(details);
            alert("User account created Successfully");
            axios.post('http://localhost:8000/signup',{details}).then(response=>{
                console.log(response);
                alert(response);
            })
            navigate('/');
    }
    return(
        <div className="bg-container">
        <div className="container">
            <div className="container_border">
                <div className="form-group">
                    <br></br>
                    <label for="user">Name</label> 
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <br></br>
                    <label for="mail">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br></br>
                    <label for="mobile">Mobile No</label> 
                    <input type="number" className="form-control" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                    {mobile.length>10 || mobile.length<10?<span className='demo1'>Mobile number should contains 10 digits only</span>:<span className='demo'>Mobile Number Verified</span>}
                    <br></br>
                    <label for="pass">Password</label>
                    <input type="password" className="form-control" value={pass} onChange={passwordcheck}/>
                    <br></br>
                    <label for="confirm_pass">Confirm Password</label> 
                    <input type="password" className="form-control" value={confirm_pass} onChange={c_passwordcheck}/>
                    {passwordmatch?<span className='demo'>Verified</span>:<span className='demo1'>Password wrong with confirm password</span>}
                    <br></br>
                    <div className='form-check'>
                        <input type='checkbox' className='form-check-input' checked={user} onChange={setUserCheck}/>
                        <label className='form-check-label'>User</label> 
                     </div>  
                     <div className='form-check'>
                        <input type='checkbox' className='form-check-input' checked={admin} onChange={setAdminCheck}/>
                        <label className='form-check-label'>Admin</label>
                    </div> 
                    <br></br>
                     <button className="btn btn-primary" disabled={!passwordmatch} onClick={sendData}>Signup</button><br></br>
                     <br></br>
                </div>  
            </div>

        </div>
        </div>
    )
}