const { configureStore } = require("@reduxjs/toolkit");
import SampleSlice from "./SampleSlice";

const store = configureStore({
    reducer : {
        AppSlice : SampleSlice,
    }
});

export default store;