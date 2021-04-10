import axios from "axios";
const BASE_URL="http://localhost:8080/v1/leads/";

let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

export const leadAction= (data)=> {
    return async function(dispatch){
        console.log(token);
     let response = await axios.post(`${BASE_URL}createlead`,data,header)
     console.log("res", response)
             dispatch({
                 type:"CREATE_LEAD",
                 payload:response
             })
         }
 }
 
 export const getallLeads=(header)=>{
     return async function(dispatch){
         let response = await axios.get(`${BASE_URL}allleads`,header)
         console.log("all leads response ", response);
         dispatch({
             type:"ALL_LEADS",
             payload:response
         })
     }
 }

 