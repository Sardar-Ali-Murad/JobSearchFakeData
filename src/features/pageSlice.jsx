// This is the Store to add the common data for the app and the store Entry Point is in the store/Store.jsx and the whole store in wrapped in the parent of the whole app which is main.jsx

import {createSlice} from "@reduxjs/toolkit"

let initialState={
    paginationPage:1,
    selectPage:10,
    inputPage:1,
    search:"",
    totalPages:10,
    data:[],
    nameSort:false,
    taskSort:false,
    dateSort:false
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
       handlePaginationPage:(state,action)=>{
         state.paginationPage=action.payload.page
       },
       handleSelectPage:(state,action)=>{
         state.selectPage=action.payload.page
         state.paginationPage=1
       },
       handleInputPage:(state,action)=>{
         state.inputPage=action.payload.page
       },
       handleSearch:(state,action)=>{
         state.search=action.payload.search
       },
       handleTotalPages:(state,action)=>{
          state.totalPages=action.payload.pages
       },
       setData:(state,action)=>{
        state.data=action.payload.data
       },
       handleInputForm:(state)=>{
        if(Number(state.inputPage)<=state.totalPages){
          state.paginationPage=Number(state.inputPage)
        }
       },
      handleNameSort: (state) => {
      if (state.nameSort) {
        state.data = state.data.sort((a, b) => a.name > b.name);
      } else {
        state.data = state.data.sort((a, b) => a.name < b.name);
      }
      state.nameSort = !state.nameSort;
    },
      handleTaskSort: (state) => {
      if (state.taskSort) {
        state.data = state.data.sort((a, b) => a.Task > b.Task);
      } else {
        state.data = state.data.sort((a, b) => a.Task < b.Task);
      }
      state.taskSort = !state.taskSort;
    },
      handleDateSort: (state) => {
      if (state.dateSort) {
        state.data = state.data.sort((a, b) => (new Date(a.Date)) - (new Date(b.Date)));
      } else {
        state.data = state.data.sort((a, b) => (new Date(b.Date)) - (new Date(a.Date)));
      }
      state.dateSort = !state.dateSort;
    },
    }
})

export const {handlePaginationPage,handleInputPage,handleSelectPage,handleSearch,handleTotalPages,setData,handleInputForm,handleNameSort,handleTaskSort,handleDateSort} = userSlice.actions

export default userSlice.reducer