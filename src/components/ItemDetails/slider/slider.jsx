import {useState,useContext} from "react"
import sliderStyles from "./slider.module.css";
import Carousel from 'react-bootstrap/Carousel';
import "../itemDetails.css"
import itemsContext from "../../../Contexts/itemsContext";
import {useParams} from 'react-router-dom'

const ItemSlider=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    const {getItemById}=useContext(itemsContext);
    const selectedID=useParams().id;

    const selectedItem=getItemById(selectedID);

    const SliderImages=selectedItem.images.map((value,index)=>{

      return ( <Carousel.Item key={index} style={{height:'100%'}} className={sliderStyles.item}>
      <div className={`${sliderStyles.wrapperContainer}`} >
        <div   className={`w-75 mx-auto d-flex align-items-center ${sliderStyles.imgContainer} `}>
          <img className={`${sliderStyles.slideImg}`}
              src={`data:image/jpeg;base64,${selectedItem.images[0]}`}
              alt={`slide number ${index}`}
            />
        </div>

      </div>
        
  </Carousel.Item>)
    })


    console.log(selectedItem.images)

return (
<div className={ `col-md-5 col-sm-12 ${sliderStyles.sliderContainer}`}>
<Carousel activeIndex={index} onSelect={handleSelect}>


      {SliderImages}

     

    </Carousel>
</div>
)

}


export default ItemSlider;
