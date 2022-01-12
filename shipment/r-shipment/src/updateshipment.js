import Header from './Header';
import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {SHIPMENT} from './Queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {UPDATE_SHIPMENT} from './Mutations';

   


function Update(){
   
    const {id} = useParams();
    const { loading, error, data } = useQuery(SHIPMENT,{
        variables: { id }
    });
   
  
  
     console.log(id);
  
   
    const [waybill,setWaybill]=useState("")
    const [address,setAddress]=useState("")
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
     const [updateShipment] = useMutation(UPDATE_SHIPMENT);
    

  
    return(

        <>
        
        <Header />
        <div className="col-sm-4 offset-sm-4">
            <br></br>
            <input type=" text" value={waybill} placeholder='waybill' onChange={(e)=>setWaybill(e.target.value)} className='form-control' /> <br></br>
            <input type="text" value={address} placeholder='address' onChange={(e)=>setAddress(e.target.value)} className='form-control' /> <br></br>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"></input><br></br>
            <input type="text" value={phone} placeholder='phone' onChange={(e)=>setPhone(e.target.value)} className='form-control' /> <br></br>
            <button onClick={ e => {
              
              e.preventDefault();
              updateShipment({ variables: {id,waybill,address,name,phone,} }).then(function(){
                window.location.href="/";
            });
   


            }}>update</button>
        </div>
        </>
    )
    
}
export default Update