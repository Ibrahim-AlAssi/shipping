import React from "react";
import { useQuery,gql } from "@apollo/client";

export const SHIPMENTS= gql`
query{
 myShipments{
    id
    waybill
    address
    name
    phone
}
}
`;


export const SHIPMENT= gql`
query($id:ID!){
 shipment(id:$id){
    id
    waybill
    address
    name
    phone
}
}
`;

export const ME= gql`
query{
 me{

    name
    
}
}
`;