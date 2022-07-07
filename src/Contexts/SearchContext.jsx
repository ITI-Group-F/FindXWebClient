import API from "../Services/api";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Loading from "../components/Loading";

const searchContext = createContext();

export const SearchProvider = (props) => {
  const { children } = props;
  let [searchWord, setSearchWord] = useState(null);
  let [searchLoading, setSearchLoading] = useState(true);
  let [searchResult, setSearchResult] = useState([]);
  const [didMountSuper, setDidMountSuper] = useState(false);
  let [clearApi, setClearApi] = useState(false);

  /* useEffect(() => { 
  
    console.log("1  mount " + didMountSuper);
    setDidMountSuper(true) 
    
    console.log("2  mount " + didMountSuper);

}, []) */

  useEffect(() => {
    //console.log("3  mount " + didMountSuper);
    //if (didMountSuper){

    GetSearchData();
  }, [searchWord]);

  let GetSearchData = () => {
    setSearchLoading(true);
    try {
      const data = async () => {
        const back = await API.get(`/Search/full/${searchWord}`).then(
          (response) => response.data
        );
        // console.log(back);
        // console.log(searchResult);
        setSearchResult(back);
        setSearchLoading(false);
      };
      data();
    } catch (error) {
      console.log(error + " from search/full/query endpoint");
    }
  };

  let contextValue = useMemo(
    () => ({
      setSearchWord,
      searchLoading,
      setSearchLoading,
      searchResult,
      setSearchResult,
      searchWord,
    }),
    [setSearchWord, searchLoading, setSearchLoading, searchResult, searchWord]
  );

  return (
    <searchContext.Provider value={contextValue}>
      {children}
    </searchContext.Provider>
  );
};

export default searchContext;
