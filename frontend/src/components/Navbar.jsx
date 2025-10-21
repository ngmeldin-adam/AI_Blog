import {assets} from "../assets/assets"
import { useAppContext } from "../context/appContext";
const Navbar = () =>{
    const {navigate , token} = useAppContext();

    return(
        <div className="flex justify-between items-center py-5 mx-8 sm:mx-20
        xl:mx-32">
            {/* <img onClick={()=>navigate("/")} src={assets.logo} alt="logo" className="w-32 sm:w-44 cursor-pointer" /> */}
            <h1 className="w-32 sm:w-44 cursor-pointer sm:text-[px] text-[35px] font-bold   text-primary" onClick={()=> navigate("/")}>AI BLog </h1>
            <button onClick={()=>navigate("/admin ")}  className="flex items-center gap-2 rounded-full text-sm
            cursor-pointer bg-primary text-white px-7 py-2.5">{token ? "Dashboard" : "Login"}
                <img src={assets.arrow} alt="" />
            </button>


        </div>
    )
}
export default Navbar;