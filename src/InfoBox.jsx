import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox( {info} ) {
    const INIT_URL = "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1542267207-f8127b454605?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 445 }}>
                    <CardMedia
                        sx={{ height: 340 }}
                        image= {info.humidity > 75 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature: {info.temp} &deg;C </p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Min Temp: {info.tempMin} &deg;C </p>
                        <p>Max Temp: {info.tempMax} &deg;C </p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like} &deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}