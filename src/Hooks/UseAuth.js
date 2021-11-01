import { useContext } from "react";
import { AuthContext } from "../Component/AuthContex/AuthProvider";

const useAuth=()=>{
    return useContext(AuthContext);
}
export default useAuth;
