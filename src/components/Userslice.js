import { createSlice } from '@reduxjs/toolkit'
const defaultUser = JSON.parse(localStorage.getItem('user'))





if(defaultUser){
    var { email,password} = defaultUser
}else{

}


const userSlice = createSlice({
    name:'user',
    initialState:{
        
        email, 
        password
        
    },
    reducers:{
        login:(state,action)=>{
            state.email = action.payload.email
            state.password = action.payload.password
        }, 
        logout:(state) => {state ={} }
    },
});


export const {login, logout} = userSlice.actions;
export default userSlice.reducer;