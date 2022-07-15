import React from 'react'

import DescriptionStyle from "./Description.module.css"
import "../itemDetails.css"

 function Description(props) {


const selectedItem=props.item
  

  return selectedItem?(<div  className={`col ${DescriptionStyle.descContainer}`}>

  {/* description Body */}
<div className={`${DescriptionStyle.desc_body} p-2 mt-3`}>
<div className={`${DescriptionStyle.desc_head}`}>
    <h3 style={{color:"#fff"}} className={`ms-2 `}>Description</h3><hr  />
</div>
  <p>
      {selectedItem.description}

  </p>
</div>

</div>):(<div></div>)

  
}
export default React.memo(Description);