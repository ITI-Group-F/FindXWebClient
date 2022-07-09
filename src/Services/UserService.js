
export let getCurrentUserId = ()=>{
    const userid = sessionStorage.getItem("userid");
    if(userid){
        return userid;
    }
    else{
        return console.error("User not Logged in");;
    }
}