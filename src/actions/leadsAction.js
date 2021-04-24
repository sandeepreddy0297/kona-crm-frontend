import axios from "axios";
const BASE_URL="http://localhost:8080/v1/leads/";



export const leadAction= (data)=> {
    return async function(dispatch){
        let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
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
        let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
         let response = await axios.get(`${BASE_URL}allleads`,header)
         console.log("all leads response ", response);
         dispatch({
             type:"ALL_LEADS",
             payload:response
         })
     }
 }

 export const getlead = (id) => {
    return async function(dispatch){
        
        let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        let response = await axios.get(`${BASE_URL}lead/${id}`, header);
        console.log("one lead information",response)
        dispatch({
            type:"LEAD",
            payload:response
        })
    }
}

export const editLead = (lead)=>{
    return async function(dispatch){
        let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        let response = await axios.put(`${BASE_URL}editlead`, lead, header);
            console.log( "edit lead response",response);
            dispatch({
                type:"EDIT_LEAD",
                payload:response
            })
    }
}

export const deleteLead = (id) =>{
    return async function(dispatch){
        let token = sessionStorage.getItem("token")
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        let response= await axios.delete(`${BASE_URL}removelead/${id}`,header)
        dispatch({
            type:"DELETE_LEAD",
            payload:response
        })
    }
}

