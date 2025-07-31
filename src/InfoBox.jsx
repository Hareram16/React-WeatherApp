import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1512409152587-e4a3fea94727?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    const HOT_URL="https://plus.unsplash.com/premium_photo-1682548788257-5a768620a8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyJTIwaG90JTIwc3VufGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D";


    return(
        <div className="InfoBox">
  <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? RAIN_URL
          : info.temp>15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
            info.humidity>80
          ? (<ThunderstormIcon/>)
          : info.temp>15
          ? (<WbSunnyIcon/>)
          :( <AcUnitIcon/>

          )}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The Weather can be described as <i>{info.weather}</i> and feels Like = {info.feelslike}&deg;C</p>
         

            
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}