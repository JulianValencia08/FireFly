import Footer from "../components/footer";
import NavBar from "../components/navBar";
import Typography from '@mui/material/Typography';
import "../styles/main.css"
function Main() {
    return (
        <div className="Body">
            <NavBar className="Header"/>
            
            <Typography >
                Pagina de bienvenida
            </Typography>

            <Footer className="Footer"/>
        </div>
    );
}

export default Main;
