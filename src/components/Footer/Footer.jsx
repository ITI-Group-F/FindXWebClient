import React from "react"
import { Component } from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


class Footer extends Component {
    render() {
        return (
            <>
                <table style={{marginTop:"100px",  border: "1px solid white", borderCollapse: "collapse", width: "100%"  }}>
                    <tbody>                    
                    <tr style={{ backgroundColor: "#DCDCDC", marginLeft: "50px", marginRight: "50px" }}>
                        
                        
                       
                    </tr>
                    <tr style={{backgroundColor: "#002f34", color: "white", borderTop:"10px solid #002f34", borderBottom: "10px solid #002f34", fontSize: "medium"}}>
                        <td colSpan="2" style={{paddingLeft: "60px"}}>Follow Us</td>
                        <td colSpan="2"></td>
                        <td colSpan="2" style={{paddingRight:"60px"}}>iti intake 42 . © 2022 FindX</td>
                        <section>
                        <FacebookIcon /> 
                        <TwitterIcon /> 
                        <InstagramIcon /> 
                        <YouTubeIcon />
                        </section>
                    </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default Footer;