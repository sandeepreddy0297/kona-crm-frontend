// const initialState = {
//     state:""
// };

const LeadReducer = (state = [], action) => {
    // const { type, payload } = action;
    switch (action.type) {
        case "CREATE_LEAD":
            //   console.log("reducer state",state)
            //   console.log("reducer",action.payload)
            var state = action.payload.data
            console.log("crete lead state", state)
            return state;
        case "ALL_LEADS":
            if (action.payload.data) {
                let state = action.payload.data;
                return state
            } else {
                return state
            }
        case "LEAD":
            if (action.payload.data) {
                let state = action.payload.data;
                return state
            } else {
                return state
            }
        case "DELETE_LEAD":
            if (action.payload.data) {
                let state = action.payload.data;
                return true
            } else {
                return false
            }
        case "EDIT_LEAD":
            if (action.payload.data) {
                return true
            } else {
                return false
            }
        default:
            return state;
    }

}
export default LeadReducer;