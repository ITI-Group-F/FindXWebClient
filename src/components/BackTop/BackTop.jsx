import React,{useState,useEffect, useCallback} from 'react'
import BackTopStyle from './BackTop.module.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function BackTop() {

    const [backTopButton,setBackTopButton]=useState(false);
    useEffect(()=>{

        console.log('ss')
        window.addEventListener("scroll",()=>{

            if(window.scrollY>100){

                setBackTopButton(true);

            }else{

                setBackTopButton(false);
            }


        })

    },[])



    useEffect(()=>{
        console.log('on update')
    })


    const scrollUp=()=>{

        window.scrollTo({

            top:0,
            behavior:'smooth'
        })
    }
    
  return (
    <div >
        <div>

      {backTopButton&&(<button onClick={scrollUp} className={`${BackTopStyle.scrollBtn}`} ><KeyboardArrowUpIcon fontSize='large' className={`${BackTopStyle.upIcon}`}/></button>)}
        </div>
    </div>
  )
}
