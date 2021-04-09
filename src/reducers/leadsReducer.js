// const initialState = {
//     state:""
// };

const LeadReducer = (state = [], action) => {
    // const { type, payload } = action;
    switch (action.type) {
        case "CREATE_LEAD":
            //   console.log("reducer state",state)
            //   console.log("reducer",action.payload)
            var state=action.payload.data
            console.log(state)
            return state;
        case "ALL_LEADS":
            if(action.payload.data){
                let state = action.payload.data;
                return state
            } else {
                return state
            }
            
        default:
            return state;
    }

}
export default LeadReducer;