import {BsArrowRightSquareFill, BsCloudSunFill} from "react-icons/bs"
const Header = ()=>{
    return(
        <>
        <div className="head-deco">
            <BsCloudSunFill style={{color:'orange',margin:'8px 0 8px 8px',fontSize:"50px"}}/>
        </div>
         <div className="header">
       <h3> <span style={{fontSize:'40px'}}>K</span>now your city weather&nbsp;&nbsp;<BsArrowRightSquareFill/></h3>
        </div>
        </>
       
    )
}

export default Header;