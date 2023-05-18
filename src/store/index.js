import { configureStore } from '@reduxjs/toolkit'

// import messageReducer from '../features/message/messageSlice';
import userReducer from "../components/crudOperationScreen/CrudOperationSlice"

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    // message: messageReducer,
    usersData: userReducer
  }
})

export default store