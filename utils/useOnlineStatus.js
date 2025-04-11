import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [checkStatus,SetCheckStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            SetCheckStatus(false);
        })
        window.addEventListener("online",()=>{
            SetCheckStatus(true);
        })
    },[])

    
    return checkStatus;
}
export default useOnlineStatus;