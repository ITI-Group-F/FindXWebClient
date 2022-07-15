
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'
import useClaims from '../../hooks/useClaims'
import {updateUserData,updateUserPassword} from '../../Services/UserService'

export default function Profile(){
    const claims = useClaims();
    //instead of static data we can get if from the probs or api calling
    const [firstname, setFirstname] = useState(claims.firstname);
    const [lastname, setLastname] = useState(claims.lastname);
    const [phone, setPhone] = useState(claims.phone);
    const [email, setEmail] = useState(claims.email); 
    const [password, setPassword] = useState("123"); 
    const [Cpassword, setCPassword] = useState("123");
    let UpdateDataOk =false;
    let UpdatePassOk =false;               
    const updateProfile=()=>{   
        if(UpdateDataOk){
            let firstnameUpdated= document.getElementById("firstname").value;
            let lastnameUpdated= document.getElementById("lastname").value;
            let phoneUpdated= document.getElementById("phone").value;
            let emailUpdated=document.getElementById("email").value;
    
            if([firstnameUpdated,lastnameUpdated,phoneUpdated,emailUpdated].includes('')){
                alert("Some data is missing !!");
            }else if (!ValidateEmail(emailUpdated)){
                alert("Invalid email !!");
            }else{
                let data ={
                    FirstName:firstnameUpdated,
                    LastName:lastnameUpdated,
                    Phone:phoneUpdated,
                    Email:emailUpdated,
                    Password:"",
                    CPassword:"",
                    Id:claims.userId
                }
                updateUserData(data).then(_res=>{
                    if(_res.status === 200){
                        changeseSsionStorageData(data);
                        alert("User data updated");
                    }else{
                        alert(_res);
                    }
                }).catch(_err=>{
                    alert(_err.response.data);                    
                });
    
                setFirstname(firstnameUpdated);
                setLastname(lastnameUpdated);
                setPhone(phoneUpdated);
                setEmail(emailUpdated);
                //calling api to update the  data
            }
        }else{
            activateDataFields();
        }          
        
        
    }

    
    const updatePassword=()=>{    
              if(UpdatePassOk){

                  let passwordUpdate=document.getElementById("password").value;
                  let CpasswordUpdate=document.getElementById("Cpassword").value;
          
                  if([passwordUpdate,CpasswordUpdate].includes('')){
                      alert("Some data is missing !!");
                  }else if(passwordUpdate !== CpasswordUpdate){
                     alert("Password don't match !");            
                  }else if(!ValidatePassword(passwordUpdate)){
                      alert("invalid password (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character is required)");
                  }else{
          
                      let data ={
                          FirstName:sessionStorage.getItem("firstName"),
                          LastName:sessionStorage.getItem("lastName"),
                          Phone:sessionStorage.getItem("phone"),
                          Email:sessionStorage.getItem("email"),
                          Password:passwordUpdate,
                          CPassword:CpasswordUpdate,
                          Id:claims.userId
                      }
                      updateUserPassword(data).then(_res=>{
                          if(_res.status === 200){
                              alert("User password updated");
                          }else{
                              alert(_res);
                          }
                      }).catch(_err=>{
                          alert(_err);
                          console.log(_err);
                      });
          
                      setPassword(passwordUpdate);
                      setCPassword(CpasswordUpdate);
                      //calling api to update the  data
                  }
              }  else{
                activatePassFields();
              }
        
    }

    function ValidatePassword(password) 
    {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password))
        {
            return (true)
        }        
        return (false)
    }
    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }        
        return (false)
    }
    const changeseSsionStorageData =(NewData)=>{               
        sessionStorage.setItem("email", NewData.Email);        
        sessionStorage.setItem("fullName", NewData.FirstName+' '+NewData.LastName);
        sessionStorage.setItem("firstName", NewData.FirstName);
        sessionStorage.setItem("lastName", NewData.LastName);
        if(claims.phone){
          sessionStorage.setItem("phone", NewData.Phone);
        }
    }
    const activateDataFields=()=>{
        UpdateDataOk=true;
        document.getElementById("firstname").disabled =false;
        document.getElementById("lastname").disabled =false;
        document.getElementById("phone").disabled =false;
        document.getElementById("email").disabled =false;
        document.getElementById("updateDataButton").innerText= "Save changes";
        // document.getElementById("cancelUpdateDataButton").disabled= false;
    }
    const activatePassFields=()=>{
        UpdatePassOk=true;
        document.getElementById("password").disabled =false;
        document.getElementById("Cpassword").disabled =false;       
        document.getElementById("updatePassButton").innerText= "Save changes";
        // document.getElementById("cancelUpdatePassButton").disabled= false;
    }
    const cancelDataUpdate=()=>{
        UpdateDataOk=false;
        document.getElementById("firstname").disabled =true;
        document.getElementById("lastname").disabled =true;
        document.getElementById("phone").disabled =true;
        document.getElementById("email").disabled =true;
        document.getElementById("updateDataButton").innerText= "Update profile";
        // document.getElementById("cancelUpdateDataButton").disabled= true;
    }
    const cancelPassUpdate=()=>{
        UpdatePassOk=false;
        document.getElementById("password").disabled =true;
        document.getElementById("Cpassword").disabled =true;
        document.getElementById("updatePassButton").innerText= "Update Password";
        // document.getElementById("cancelUpdatePassButton").disabled= true;
    }

     return(
   <div className="container profile-contanier rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="divLeftContainer d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="img/av.png" alt=""/>
                <span className="font-weight-bold">{firstname+' '+lastname}</span>
                <span className="text-black-50">{email}</span>
                <hr className="hrProfile"/>
            </div>
        </div>
        <div className="right-div col-md-9 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right" style={{marginLeft:"-70px"}}>Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">First name</label><input type="text" id="firstname" disabled className="form-control" placeholder="first name" defaultValue={firstname}/></div>
                    <div className="col-md-6"><label className="labels">Last name</label><input type="text" id="lastname" disabled className="form-control" placeholder="last name" defaultValue={lastname} /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <label className="labels">Mobile Number</label>
                        <input type="text" id="phone" disabled className="form-control" placeholder="enter phone number" defaultValue={phone}/>
                    </div>
                    <div className="col-md-12">
                        <label className="labels">Email</label>
                        <input type="email"  id="email" disabled className="form-control" placeholder="email" defaultValue={email}/>
                    </div>
                </div>         
                    <div className="text-center" style={{marginTop:"5px"}}>
                        <button className="btn btn-primary profile-button" id="updateDataButton" type="button" onClick={updateProfile}>
                            Update Profile
                        </button>
                        <button className="btn m-1 btn-danger profile-button" id="cancelUpdateDataButton"  onClick={cancelDataUpdate} type="button" >
                            Cancel
                        </button>
                    </div>            
                          <hr className="hrDivider"/>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <label className="labels">Password</label>
                            <input type="password"  disabled id="password" className="form-control" defaultValue={password} placeholder="Password" />
                        </div>
                        <div className="col-md-6">
                            <label className="labels">Confirm password</label>
                            <input  disabled type="password" id="Cpassword" className="form-control" defaultValue={Cpassword} placeholder="Confirm password"/>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary profile-button" id="updatePassButton" onClick={updatePassword} type="button">
                            Update Password
                        </button>
                        <button className="btn m-1 btn-danger profile-button" id="cancelUpdatePassButton"   onClick={cancelPassUpdate} type="button" >
                            Cancel
                        </button>
                    </div>            
                </div>                
            </div>
            </div>                 
    </div>)
}