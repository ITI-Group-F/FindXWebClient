import {useState} from "react"
import sliderStyles from "./slider.module.css";
import Carousel from 'react-bootstrap/Carousel';
import "../itemDetails.css"
import React from "react";


const ItemSlider=(props)=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };




    const selectedItem=props.item;

    const SliderImages=selectedItem?.images?.map((value,index)=>{

      return ( <Carousel.Item key={index} style={{height:'100%'}} className={sliderStyles.item}>
      <div className={`${sliderStyles.wrapperContainer}`} >
        <div   className={`w-75 mx-auto d-flex align-items-center ${sliderStyles.imgContainer} `}>
          <img className={`${sliderStyles.slideImg}`}
              src={`data:image/jpeg;base64,${value}`}
              alt={`slide number ${index}`}
            />
        </div>

      </div>
        
  </Carousel.Item>)
    })



return selectedItem? (
<div className={ `col-md-5 col-sm-12 ${sliderStyles.sliderContainer}`}>
<Carousel activeIndex={index} onSelect={handleSelect}>


      {SliderImages??null}

     

    </Carousel>
</div>
):(<div></div>)

}


export default React.memo(ItemSlider);
