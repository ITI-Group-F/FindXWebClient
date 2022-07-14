import React from "react"
import { Component } from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FooterModule from "./Footer.module.css";

class Footer extends Component {
    render() {
        return ( 

        
<table style={{  border: "1px solid white", borderCollapse: "collapse", width: "100%", marginTop:"auto"  }}>
        

            
        <tbody>  

           
                              
        <tr style={{ backgroundColor: "#DCDCDC", marginLeft: "50px", marginRight: "50px" }}>
            
            
           
        </tr>
        <tr className="d-flex " style={{backgroundColor: "#002f34", color: "white", borderTop:"10px solid #002f34", borderBottom: "10px solid #002f34", fontSize: "medium"}}>
            <td className="col-4 " colSpan="2" style={{paddingLeft: "60px"}}>Follow Us</td>
            <td className="col-4 " colSpan="2" style={{paddingRight:"60px"}}>FindX © 2022 </td>
            <section className="col-4  ">
            <FacebookIcon className="mx-2" /> 
            <TwitterIcon className="mx-2" /> 
            <InstagramIcon className="mx-2" /> 
            <YouTubeIcon  className="mx-2"/>
            </section>
        </tr>
        </tbody>
    </table>

                
        
         )

                  
            
          
     
      
    }
}

export default Footer;