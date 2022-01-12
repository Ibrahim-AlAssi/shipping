import { gql, useMutation } from '@apollo/client';

export const REGISTER = gql`
mutation register(
  $name:String!
  $email:String!
  $password:String!
  $password_confirmation:String!
){
  register(
    input:{
      name: $name
      email: $email
      password: $password
      password_confirmation:$password_confirmation

    }
  ){
    token
    
  }
}
`;
export const CREATE = gql`
mutation createShipment(
  
  $waybill:String!
  $address:String!
  $name:String!
  $phone:String!
){
  createShipment(
    
     
     waybill: $waybill
      address: $address
      name: $name
      phone:$phone
    
  ){
    name
  }
  
}
`;



export const LOGININPUT = gql`
mutation login(
  $email:String!
  $password:String!
 
){
  login(
    input:{
     
      email: $email
      password: $password
    

    }
  ){
    token
    
  }
}
`;

export const DELETE = gql`
mutation deleteShipment($id:ID!){
  deleteShipment(id:$id)
  {
  name
  }
}
`;
export const UPDATE_SHIPMENT = gql`
mutation updateShipment($id:ID!,$waybill:String!,$address:String!,$name:String!,$phone:String!) {
  updateShipment (id:$id,waybill:$waybill,address:$address,name:$name,phone:$phone){
    name
  }
    
}
`;





// export const REGISTER = gql`
//   mutation Register($input: RegisterInput) {
//     register(input: $input) {
      
//       token
//     }

//   }
// `;




