
import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import {REGISTER} from './Mutations';
import { useMutation } from '@apollo/client';





 function Register() {
const [register, { data}] = useMutation(REGISTER);
  const history=useNavigate()

  useEffect(()=>{
    if (localStorage.getItem('token')){
    
        window.location.href="/";

    } 
 },[])
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [password_confirmation,setPasswordd]=useState("")
    // const [ values,setvalues] =useState({
    //     name:'',
    //     email:'',
    //     password:'',
    //     password_confirmation:''})

        // const onChange =(event) =>{
        //     setvalues({...values,[event.target.name]:event.target.value});
        // }

        //  let item={name,email,password,password_confirmation}
        // console.warn(item)
    // const history=useNavigate()
    // const [register,{error}] =useMutation(REGISTERMUtATIONS)

    // const signup = () => {
    //     register({
    //         variables:{
    //             name: name ,
    //             email: email,
    //             password: password,
    //             password_confirmation: password_confirmation
    //         }
    //     })
          
   
    // localStorage.setItem("user-info",JSON.stringify(result))
    // history.push("/addshipment")
    // };
    // async function signup(){
    //     let item={name,email,password,password_confirmation}
    //     console.warn(item)
    //    let result= await fetch("http://localhost:8000/graphql",{
    //     method:'POST',
    //     body:JSON.stringify(item),
    //     headers:{
    //         "Content-Type" :'application/josn',
    //         "Accept" :'application/josn'
    //     }

    // })
    // result = await result.json()
    // console.warn("result",result)
    // localStorage.setItem("user-info",JSON.stringify(result))
    // history.push("/addshipment")
    // }
    

    return (
        <>
        <Header />

        <div className="col-sm-4 offset-sm-4">
            
            <h1>REGISER</h1>
            <input type={"text"} value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"></input><br></br>
            <input type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"></input><br></br>
            <input type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"></input><br></br>
            <input type={"password"} value={password_confirmation} onChange={(e)=>setPasswordd(e.target.value)} className="form-control" placeholder="Password"></input><br></br>
            <button   onClick={async e => {
              
                e.preventDefault();
                let result =await register({ variables: {name,email,password,password_confirmation} });
               
                localStorage.setItem('token',result.data.register.token)
                console.log(result);
                if(result){
                    window.location.href="/";
                }
              
            
               
              }}  className="btn btn-primary">REGISER</button>
            
        </div>
        </>
    )

}
export default Register