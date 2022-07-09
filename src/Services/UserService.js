
export const getCurrentUserId = ()=>{
    const userid = sessionStorage.getItem("userid");
    if(userid){
        return userid;
    }
    else{
        return console.error("User not Logged in");;
    }
}
export const removeUserinfo = ()=>{
     sessionStorage.removeItem("userId");
     sessionStorage.removeItem("userName");
     sessionStorage.removeItem("email");
     sessionStorage.removeItem("roles");
     sessionStorage.removeItem("fullName");   
}