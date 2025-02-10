import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    postData: []
};



export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        allposts: (state, action) => {
            
            state.postData = (action.payload.documents);
            console.log(state.postData);
            
        },
       
    }
});

export const {allposts} = postSlice.actions

export default postSlice.reducer;