import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUserData,getUserData } from "./CrudOperationApi"
import { setResponse } from "./CrudOperationSlice"

export const useUserDetailsControl = () => {
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
      name:"",
      email:""
    })

    const handleInput = (e) =>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    // get api response
    const userDataList = useSelector(state => state.usersData.userData)
    console.log("first",userDataList)

    // // open add taluka modal
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = (e) => {
    //   setOpen(true);
    // };
    // const handleClose = () => setOpen(false);

    // STORE
    // usersData ---> from store
   //  useDispatch ---> dispatch the code
  //  useSelector ---> get the code from store
    
  useEffect(() => {
    getUserDetails()
  }, []); 

  const getUserDetails = () => {
    (async () => {
        const [data, err] = await getUserData();
        if (err) console.log(err);
        if(data) dispatch(setResponse(data))
        console.log("data----controller",data)
      })();
  }

  const createNewUser = async(e) =>{
    e.preventDefault()
    const [data,err] = await registerUserData(userData)
    if(data) alert("user createed successfully.")
    console.log("post data",data);
    if (err) console.log(err);
  }

    return {
        handleInput,
        createNewUser,
        getUserDetails,
        userDataList,
        userData,
        setUserData,
        // open,
        // setOpen,
        // handleOpen,
        // handleClose
    }
}