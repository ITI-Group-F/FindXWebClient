import API from "../Services/api";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

///////////////////////////////////////////////////////////  
const subAndSuperContext = createContext();

export const SubAndSuperData = (props) => {
  const { children } = props;
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

    setDidMountSub(true)
  }

    , [])
  useEffect(() => {

    setDidMountSuper(true)
  }

    , [])

  useEffect(() => {
    if (didMountSuper) {

      GetSuperCategories();
    }

    setDidMountSuper(true);

  }, [superKey])

  useEffect(() => {

    if (didMountSub) {

      GetSubCategories();
    }
    //

    setDidMountSub(true);

  }, [subKey])

  const GetSuperCategories = () => {
    setSuperLoading(true);

    try {
      const data = async () => {
        const back = await API.get(`/Items/undersup/${superKey}`).then(
          (response) => response.data
        );
        //console.log(back);
        setunderSuperData(back);
        setSuperLoading(false);
      };
      data();
    } catch (error) {
      console.log(error + "from (/Items/undersuper) endpoint");
    }
    navigate(`/subandsupercategories/${superKey}`);

  };

  const GetSubCategories = () => {
    setSubLoading(true)
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
    navigate(`/subandsupercategories/${subKey}`);

  };

  let SetSubCat = (e) => {
    if (typeof e === 'string') {
      setsubKey(e);
    } else {
      setsubKey(e.target.value);
    }
    setsuperKey(null);
  }

  let SetSuperCat = (e) => {
    if (typeof e === 'string') {
      setsuperKey(e);
    } else {
      setsuperKey(e.target.value);
    }
    setsubKey(null);
  }

  let contextValue = useMemo(() => ({
    underSubData,
    underSuperData,
    SetSubCat,
    SetSuperCat,
    subKey,
    superKey,
    setsubKey,
    setsuperKey,
    superLoading,
    subLoading,
    setSuperLoading,
    setSubLoading

  }), [underSubData,
    underSuperData,
    SetSubCat,
    SetSuperCat,
    subKey,
    superKey,
    setsubKey,
    setsuperKey,
    superLoading,
    subLoading,
    setSuperLoading,
    setSubLoading

  ])

  return (
    <subAndSuperContext.Provider value={contextValue}>
      {children}
    </subAndSuperContext.Provider>
  )

};
export default subAndSuperContext;