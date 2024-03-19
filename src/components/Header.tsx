import { Link } from "react-router-dom"
import banner from "../assets/img/Head-section.jpg"
function Header(){
    return (
        <div>
            <div className="header">
               <div className="nav">
                <div className="nav-text"> <p>HotCoffee</p></div>
                    <div className="nav-menu">
                        <ul>
                            <li><Link to='/hom'>Home</Link></li>
                            <li><Link to='/products'>Articles</Link></li>
                        </ul>
                    </div>
               </div>
                
                <div className="banner">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Header