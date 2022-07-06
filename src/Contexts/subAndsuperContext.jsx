import API from "../Services/api";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

///////////////////////////////////////////////////////////  
const subAndSuperContext = createContext();

  export const SubAndSuperData = (props)=>{
    const {children} = props;
      let [subKey, setsubKey] = useState(null);
  let [superKey, setsuperKey] = useState(null);
  let [underSubData, setunderSubData] = useState([]);
  let [underSuperData, setunderSuperData] = useState([]);
  let [superLoading, setSuperLoading] = useState(true);
  let [subLoading, setSubLoading] = useState(true);
  const [didMountSub, setDidMountSub] = useState(false);
  const [didMountSuper, setDidMountSuper] = useState(false);
  let navigate = useNavigate();

  
  
  //////////////////////////////////////////////////

useEffect(() => { 
    
    setDidMountSub(true) }
  
  , [])
useEffect(() => { 
  
    setDidMountSuper(true) }
    
  , [])
  
  useEffect(() => {
      if (didMountSuper) GetSuperCategories();
      
      setDidMountSuper(true);
      
      }, [superKey])
      
      useEffect(() => {
          
        if (didMountSub)       GetSubCategories();
  //
  
    setDidMountSub(true);
  
}, [subKey])

const GetSuperCategories = () => {

  try {
    const data = async () => {
      const back = await API.get(`/Items/undersup/${superKey}`).then(
        (response) => response.data
      );
      //console.log(back);
      setunderSuperData(back);
      setSuperLoading(false)

    };
    data();
  } catch (error) {
    console.log(error + "from (/Items/undersuper) endpoint");
  }
};

const GetSubCategories = () => {
    try {
      //allItems.prev = underSubData;
      const data = async () => {
        const back = await API.get(`/Items/undersub/${subKey}`).then(
          (response) => response.data
        );
        //console.log(back);
        setunderSubData(back);
        setSubLoading(false);
      };
      data();
    } catch (error) {
      console.log(error + "from (/Items/undersub) endpoint");
    }


  };
  
  /* const stateObj = { foo: 'bar' };
  let hh = (e)=>{ History.pushState(stateObj,"",`subcategory/${e.target.value}`) } */
  let SetSubCat = (e) => {
    setsubKey(e.target.value);
    setsuperKey(null);
    //navigate(`subcategory/${e.target.value}`);
    //hh()
    console.log(subKey);
    
    
  }
  
  let SetSuperCat = (e) => {
    setsuperKey(e.target.value);
    setsubKey(null);
    //navigate(`supercategory/${e.target.value}`);
    console.log(superKey);
    //History.replaceState(`supercategory/${e.target.value}`)
  }
  let contextValue= useMemo(()=>({
    underSubData,
    underSuperData,
    SetSubCat,
    SetSuperCat,
    subKey,
    superKey,
    setsubKey,
    setsuperKey,
    superLoading,
    subLoading
    
  }),[underSubData,
    underSuperData,
    SetSubCat,
    SetSuperCat,
    subKey,
    superKey,
    setsubKey,
    setsuperKey,
    superLoading,
    subLoading
    ])

  return (
    <subAndSuperContext.Provider value={contextValue}>
        {children}
    </subAndSuperContext.Provider>
  )

    };
    export default  subAndSuperContext ;