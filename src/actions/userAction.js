import axios from "axios";
const BASE_URL = "http://localhost:8080/v1/user/";


export const loginAction = (data) => {
    return async function (dispatch) {
        let response = await axios.post(`${BASE_URL}login`, data)
        console.log("res", response)
       if(response.data.token){
           sessionStorage.setItem("token", response.data.token)
       }
        //console.log("token", token)
        dispatch({
            type: "LOGIN",
            payload: response
        })
    }
}





export default function registerAction(data) {
    return function (dispatch) {
        axios.post(`${BASE_URL}register`, data).then(
            response => {
                const token = response.data.token;
                sessionStorage.setItem("token", token)
                console.log("token", token)
                dispatch({
                    type: "REGISTER",
                    payload: data.data
                })
            }
        )

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