import axios from "axios";
const BASE_URL = "http://localhost:8080/v1/user/";


export const loginAction = (data) => {
    return async function (dispatch) {
        let response = await axios.post(`${BASE_URL}login`, data)
        console.log("res", response)
      
        dispatch({
            type: "LOGIN",
            payload: response
        })
    }
}





export default function registerAction(user) {
    return async function (dispatch) {
        let response = await axios.post(`${BASE_URL}register`, user)

        dispatch({
            type: "REGISTER",
            payload: response
        })
    }
        

}


export const changePassword = (body, header) => {
    let promise = axios.post(`${URL}updatePassword`, body, header)
    return {
        type:'CHANGEPASSWORD',
        payload:promise
    }
}


//export {loginAction}

//const loginAction =()=> ()=>

// export const loginAction = async (user) => {
//     try{
//     const {data} = await axios.post("http://localhost:8080/v1/user/login",user);
//     console.log("user data from login function", data);
//     return{
//         type:"LOGIN",
//         payload:null
//     }
//     } catch(err){
//         console.log("request error", err.message);
//     }
// }