
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'

export default function Profile(props){
    //instead of static data we can get if from the probs or api calling
    const [firstname, setFirstname] = useState("Abdullah");
    const [lastname, setLastname] = useState("ElZayat");
    const [phone, setPhone] = useState("01555326378");
    const [email, setEmail] = useState("a.gmaiil.com"); 
    const [password, setPassword] = useState("123456"); 
    const [Cpassword, setCPassword] = useState("123456"); 
             
    const updateProfile=()=>{     
        let firstnameUpdated= document.getElementById("firstname").value;
        let lastnameUpdated= document.getElementById("lastname").value;
        let phoneUpdated= document.getElementById("phone").value;
        let emailUpdated=document.getElementById("email").value;

        if([firstnameUpdated,lastnameUpdated,phoneUpdated,emailUpdated].includes('')){
            alert("Some data is missing !!");
        }else if (!ValidateEmail(emailUpdated)){
            alert("Invalid email !!");
        }else{
            setFirstname(firstnameUpdated);
            setLastname(lastnameUpdated);
            setPhone(phoneUpdated);
            setEmail(emailUpdated);
            //calling api to update the  data
        }
        
    }
    const updatePassword=()=>{            
        let passwordUpdate=document.getElementById("password").value;
        let CpasswordUpdate=document.getElementById("Cpassword").value;

        if([passwordUpdate,CpasswordUpdate].includes('')){
            alert("Some data is missing !!");
        }else if(passwordUpdate !== CpasswordUpdate){
           alert("Password don't match !");            
        }else{
            setPassword(passwordUpdate);
            setCPassword(CpasswordUpdate);
            //calling api to update the  data
        }
        
    }
    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }        
        return (false)
    }
   

     return(
   <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{firstname+' '+lastname}</span><span className="text-black-50">{email}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">FIrst name</label><input type="text" id="firstname" className="form-control" placeholder="first name" defaultValue={firstname}/></div>
                    <div className="col-md-6"><label className="labels">Last name</label><input type="text" id="lastname" className="form-control" placeholder="last name" defaultValue={lastname} /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" id="phone" className="form-control" placeholder="enter phone number" defaultValue={phone}/></div>
                    <div className="col-md-12"><label className="labels">Email</label><input type="email"  id="email" className="form-control" placeholder="email" defaultValue={email}/></div></div>         
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={updateProfile}>Update Profile</button></div>            
                    <div className="row mt-3">
                        <div className="col-md-6"><label className="labels">Password</label><input type="password" id="password" className="form-control" defaultValue={password} placeholder="Password" /></div>
                        <div className="col-md-6"><label className="labels">Confirm password</label><input type="password" id="Cpassword" className="form-control" defaultValue={Cpassword} placeholder="Confirm password"/></div>
                        </div>
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" onClick={updatePassword} type="button">Update password</button></div>            
                </div>                
            </div>
            </div>                 
    </div>)
}