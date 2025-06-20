 import "./navbar.css"
 import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
 function Nav(){
    return (
        <div className="navbar">
            <div className="logo">
               <img src="https://imgs.search.brave.com/mCrmcZ0HieF48aEsGGdF2daATJk96dN6njkw5S0tUYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy90/cmFuc3BhcmVudC1n/cmVlbi1uaWtlLWxv/Z28tNzAxNzUxNjk0/Nzc3MTU0cmhzdmpn/cmpjby5wbmc" alt="" />
              
            </div>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Button variant="contained">Login < LoginIcon/  > </Button>
        </div>
    );
}
export default Nav;