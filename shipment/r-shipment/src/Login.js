import Header from './Header';
import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {LOGININPUT} from './Mutations';
import { useMutation } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history=useNavigate();
    const [login, { data}] = useMutation(LOGININPUT);
    useEffect(()=>{
        if (localStorage.getItem('token')){
        
            window.location.href="/";
 
        } 
     },[])

     
//     async function signin(){
//         console.warn(email,password)
//         let item ={email,password};
//        let result = await fetch("http://localhost:8000/graphql",{
//        method:'POST',
//        headers:{
//         "Content-Type" :'application/josn',
//         "Accept" :'application/josn'
//     },
//     body:JSON.stringify(item),
    
// })
// result = await result.json()
//  localStorage.setItem("user-info",JSON.stringify(result))
//  history.push("/addshipment")
//      }

    return(
        <div>
             <Header />
            <h1>loginheelo</h1>
             <div className="col-sm-4 offset-sm-4">
            <input type="email" value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control' /> <br></br>
            <input type="password" value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} className='form-control' /> <br></br>
            <button   onClick={async e => {
              
              e.preventDefault();
              let result= await login({ variables: {email,password} })
   
              localStorage.setItem('token',(result.data.login.token))
              localStorage.setItem('username',(result.data.login.name))
              console.log(result);
            
             
            }}className='btn btn-primary'>Login</button>
                    

            </div>
        </div>

    )
    
}
export default Login