import { Link } from "react-router-dom";

export default function TodoNavigation(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    )    
}