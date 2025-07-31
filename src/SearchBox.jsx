import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo})
{   
    
    let [city,setCity]=useState("");
    let [error,setError]=useState(false)
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="fa4e44c316e28ec70d4a0bf75cabaaa0";
     
     let getWeatherInfo=async()=>{
        try{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       console.log(jsonResponse);
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
         tempMax:jsonResponse.main.temp_max,
          humidity:jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
           weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
    }
    catch(err)
    {
       throw err;
    }
     }
    let handleChange=(evt)=>
    {
        setCity(evt.target.value);
    }

    let handleSubmit=async (evt)=>
    { try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    }
    catch(err)
    {
         setError(true);
    }
    }
    return(
        <>
        <div className='searchbox'>
           <form onSubmit={handleSubmit}>
                
                <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" required  value={city}/>


                <br /><br />

                   <Button variant="contained" type='submit'>
                        Search
                    </Button>
                  {error&&<p style={{color:"red"}}>No such Place exists!</p>}
           </form>
        </div>
        </>
    )
}