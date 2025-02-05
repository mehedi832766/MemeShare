import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    postData: null
};



export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        allposts: (state, action) => {
            
            state.postData = (action.payload);
            console.log(state.postData);
            
        },
       
    }
});

export const {allposts} = postSlice.actions

export default postSlice.reducer;