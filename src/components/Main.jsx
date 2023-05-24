import { useState } from 'react'
import { useEffect } from 'react'
import {BsCloudLightningRainFill,BsFillSunFill,BsDroplet,BsArrowUp, BsArrowDown, BsSun, BsSunset, BsFillCalendarDateFill} from 'react-icons/bs'
import {CiTempHigh} from 'react-icons/ci'
import {GiWindTurbine} from 'react-icons/gi'
import {} from 'react-icons/ri'

const Main = () => {

  let today = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  
  

const[city,setCity]= useState(null);
const[country,setCountry]= useState("");
const[search,setSearch]= useState("Delhi");
const[wind,setWind]= useState("Delhi");
const[teampdatas,setteampdata]= useState(null);
 useEffect(
  ()=>{
    const fetchData= async ()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d380adc6dcbd28ad488f4cf7b1cd3a96`;
      const res = await fetch(url);
     var tempData =  await res.json();
     setCity(tempData.main);
     setWind(tempData.wind);
     setCountry(tempData.sys);
     setteampdata(tempData);
     console.log(tempData)
     console.log( {})
    }
    fetchData()
    

  },[search] )
 
 

   const handelClick =(e)=>{
    const inputData  =document.querySelector(".inputData").value;
         setSearch(inputData);
  }


  return (
    <section className='one'>
    <div className="mains">
      <div className="inputField">
        <p>Enter city name:-</p>
        <input type="search" className='inputData'/>
        <button onClick={handelClick} className='btn'>Search</button>
      </div>
      {
        city?
        <div className="tmepInfo">
          <div className='city-weather'>
        <span>{search},&nbsp;<span style={{fontSize:'22px'}}>{country.country}</span></span>
        {
        teampdatas.weather[0].description.toLowerCase().includes("rain")?
        <BsCloudLightningRainFill style={{color:'#B0DAFF', fontSize:'50px'}}/>:
        <BsFillSunFill style={{color:'yellow', fontSize:'50px'}} />
        }
        
        </div>
        <br/>
        <h4>Temprature :-&nbsp;&nbsp; {city.temp}  &#8451;</h4>
        <h5>Humidity :-&nbsp;&nbsp;<BsDroplet style={{color:'#B0DAFF', fontSize:'20px'}}/>{city.humidity} %</h5>
        <h5>Pressure :-&nbsp;&nbsp;{city.pressure} hPa </h5>
        <h5>RealFeel :-&nbsp;&nbsp;<CiTempHigh/>{city.feels_like} &#8451;</h5>
      </div>
      :
      <>
       <div style={{fontSize:"25px"}}>No such type of city found.</div>
       <div style={{fontSize:"20px",fontWeight:'400'}}>Give correct city name.</div>
      </>
     
      
      
      }
       
    </div>

    <div className="finishing">
      <p>
    <span><BsFillCalendarDateFill style={{color:'yellow'}}/>&nbsp;{today.toLocaleDateString('en-US', { weekday: 'long'})} </span> 
        <span>{
           today.getDate()+ ' '+(months[today.getMonth()]) + ' ' +today.getFullYear() } 
        </span> <span>| Local time - {hours<9?'0'+hours+':'+minutes:hours+":"+ minutes} </span>
        </p>
         <p className='wind'><GiWindTurbine style={{color:'yellow' ,fontSize:"30px"}}/>Wind --- Speed: {
            (wind!=null|| wind!=undefined)?wind.speed:"0 km/h"
          }km/h &nbsp;&&&nbsp; deg:{(wind!=null|| wind!=undefined)?wind.deg:"0"}
          </p> 
          <p><span><BsArrowUp/></span> maximum temp : { (city!=null|| city!=undefined)?city.temp_max:"0"} &#8451; </p>
          <p><span><BsArrowDown/></span>minimum temp : { (city!=null|| city!=undefined)?city.temp_min:"0"} &#8451; </p>
          <p><BsSun style={{color:'yellow'}}/>&nbsp;&nbsp;Sunrise&nbsp;{(country!=null|| country!=undefined)? new Date(country.sunrise * 1000).toLocaleTimeString():"0"}</p>
          <p><BsSunset style={{color:'#FF6501',fontSize:"30px"}}/>&nbsp;&nbsp;Sunset&nbsp;{(country!=null|| country!=undefined)? new Date(country.sunset * 1000).toLocaleTimeString():"0"}</p>
       
    </div>

    </section>
  )
}

export default Main