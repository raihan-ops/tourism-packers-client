import { useEffect, useState } from "react";

const useData = () => {
    const [itemData, setItemData] = useState([]);
    
   
    useEffect(()=>{
        fetch('https://whispering-savannah-32344.herokuapp.com/places')
        .then(res=>res.json())
        .then(data=>setItemData(data))
    },[])
    return [itemData,setItemData];
}

export default useData;