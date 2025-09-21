const { createSlice } = require("@reduxjs/toolkit");

const SampleSlice = createSlice({
    name : "SampleS1",
    initialState : {
        items : []
    },
    reducers : {
         add : ((state, action) => {
            state.items.push(action.payload);
         }),
    }
});

export default SampleSlice.reducer;
export const {add} = SampleSlice.actions;