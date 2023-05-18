import { createSlice } from "@reduxjs/toolkit";


const initialState ={
userData:[],
addUserData:[]
}

const userSlice = createSlice({
    name:"userDetails",
    initialState,
    reducers:{
    setResponse(state, action){
        state.userData = action.payload
        },
    setAddDetailsResponse(state, action){
        state.addUserData = action.payload
        },
    },
})

export const {setResponse} = userSlice.actions;
export default userSlice.reducer;