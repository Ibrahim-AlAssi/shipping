
import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import {CREATE} from './Mutations';
import { useMutation } from '@apollo/client';


function Addshipment(){
    const [createShipment, { data}] = useMutation(CREATE);
    const [waybill,setWaybill]=useState("")
    const [address,setAddress]=useState("")
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const history=useNavigate()
   
    

    //  const [createShipment,{error}] =useMutation( CREATEMUtATIONS)

    //  const add = () => {
    //     createShipment({
    //         variables:{
    //             waybill:waybill,
    //             name: name ,
    //             address: address,
    //             phone: phone,
                
    //         }
    //     })
          
   
    // localStorage.setItem("user-info",JSON.stringify(result))
    // history.push("/addshipment")
    // };

//    async function add(){
//         console.warn(waybill,address,name,phone)
//         const  formData = new FormData();
//         formData.append('waybill',waybill)
//         formData.append('address',address)
//         formData.append('name',name)
//         formData.append('phone',phone)
//         let result= await fetch("http://localhost:8000/graphql",{
//             method:'POST',
//             body:formData
//     });
//     alert("shipment added")

// }


    return(
        <>
        <Header />
        <div className="col-sm-4 offset-sm-4">
           
            <div>
            <h1>addshipment</h1>
            <input type=" text" value={waybill} placeholder='waybill' onChange={(e)=>setWaybill(e.target.value)} className='form-control' /> <br></br>
            <input type="text" value={address} placeholder='address' onChange={(e)=>setAddress(e.target.value)} className='form-control' /> <br></br>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"></input><br></br>
            <input type="text" value={phone} placeholder='phone' onChange={(e)=>setPhone(e.target.value)} className='form-control' /> <br></br>
            <button onClick={e => {
              
              e.preventDefault();
              localStorage.getItem('token')
             createShipment({ variables: {waybill,address,name,phone,} }).then(function(){
                 window.location.href="/";
             });
             
   
            }} className="btn btn-primary">ADD</button>
            </div>
        </div>
        </>
    )
    
}
export default Addshipment