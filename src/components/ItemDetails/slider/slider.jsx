import {useState} from "react"
import sliderStyles from "./slider.module.css";
import Carousel from 'react-bootstrap/Carousel';
import "../itemDetails.css"

const ItemSlider=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


return (
<div className=" col-md-5 col-sm-12">
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height:'100%'}} className={sliderStyles.item}>
          <div className={`${sliderStyles.wrapperContainer}`} >
            <div   className={`w-75 mx-auto ${sliderStyles.imgContainer} `}>
              <img className={`${sliderStyles.slideImg}`}
                  src="https://m.media-amazon.com/images/I/41A+0FWSUML._AC_SY780_.jpg"
                  alt="Third slide"
                />
            </div>

          </div>
            
      </Carousel.Item>

      <Carousel.Item style={{height:'100%'}} className={sliderStyles.item}>
          <div className={`${sliderStyles.wrapperContainer}`} >
            <div   className={`w-75 mx-auto ${sliderStyles.imgContainer} `}>
              <img className={`${sliderStyles.slideImg}`}
                  src="https://m.media-amazon.com/images/I/41A+0FWSUML._AC_SY780_.jpg"
                  alt="Third slide"
                />
            </div>

          </div>
            
      </Carousel.Item>


      <Carousel.Item style={{height:'100%'}} className={sliderStyles.item}>
          <div className={`${sliderStyles.wrapperContainer}`} >
            <div   className={`w-75 mx-auto ${sliderStyles.imgContainer} `}>
              <img className={`${sliderStyles.slideImg}`}
                  src="https://m.media-amazon.com/images/I/41A+0FWSUML._AC_SY780_.jpg"
                  alt="Third slide"
                />
            </div>

          </div>
            
      </Carousel.Item>


    </Carousel>
</div>
)

}


export default ItemSlider;
