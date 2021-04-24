// const initialState = {
//     islogin:false
// };

const loginReducer = (state = null, action) => {
    // const { type, payload } = action;
    switch (action.type) {
        case 'REGISTER':
            if (action.payload.data.token) {
                sessionStorage.setItem('token', action.payload.data.token);
                return true;
            }
            else {
                return false;
            }

        case 'LOGIN':
            if (action.payload.data.token) {
                sessionStorage.setItem("token", action.payload.data.token);
                return true;
            } else {
                return false;
            }

        case 'CHANGEPASSWORD':
            if (action.payload.data) {
                sessionStorage.removeItem('token');
                return false;
            } else {
                return true;
            }
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