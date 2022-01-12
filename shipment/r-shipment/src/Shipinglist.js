import Header from './Header';
import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap'
import { useQuery } from "@apollo/client";
import { SHIPMENTS } from './Queries';
import {DELETE} from './Mutations';
import { useMutation } from '@apollo/client';
function Shipinglist() {
    const [deleteShipment ] = useMutation(DELETE);

    const { loading, error, data } = useQuery(SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    return (
        <div>
            <Header />
            <h1>view</h1>
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Waybill</th>
                        <th>address</th>
                        <th>name</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>


                    {data.myShipments.map(myShipment => {
                        return <>
                            <tr>
                                <td>{myShipment.id}</td>
                                <td>{myShipment.waybill}</td>
                                <td>{myShipment.address}</td>
                                <td>{myShipment.name}</td>
                                <td>{myShipment.phone }</td>
                                <td><button  onClick={
                                    async e => {
              
                                        e.preventDefault();
                                          await deleteShipment({ variables: {id:myShipment.id} })
                                            window.location.reload()
                                       
                                      }
                                }>Cancel</button><button   onClick={
                                     e => {
                                        window.location.href=`/updateshipment/${myShipment.id}`
                                       
                                       
                                      }
                                }>Edit</button></td>

                            </tr>


                        </>


                    })}




                </tbody>
            </Table>
        </div>

    )

}
export default Shipinglist