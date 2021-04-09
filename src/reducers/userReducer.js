const initialState = {
    islogin:false
};

const loginReducer = (state = initialState, action) => {
    // const { type, payload } = action;
    switch (action.type) {
        case "LOGIN":
              console.log("reducer state",state)
              console.log("reducer",action.payload)
            return {islogin:true};
         case "REGISTER":
             console.log("iam in register case",action.payload.data)
             return{isLogin:true}

        default:
            return state;
    }

}
export default loginReducer;


// switch(action.type){
//     case "regiastrer":
//         if(action.payload.data.token)
//          return true;
//          else return false;
//     }
//     return state;
// }