import Button from '@mui/material/Button';
import "./hero.css"
function Hero(){
    return (
     <div className="maincon">
        <div className="one"> 
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="btn">
                 <Button variant="contained">Contained</Button>
                 <Button variant="outlined">Outlined</Button> 
            </div>
            <p>also avalable on</p>
            <div>
                <img src="/public/shops.jpg" alt="amazon" />
            </div>
        </div>
        <div className="two">
            <img src="/public/shoe_image.png" alt="nikeshoe" />
        </div>
     </div>
    );
}
export default Hero;