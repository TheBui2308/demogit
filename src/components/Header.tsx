import banner from "../img/Head-section.jpg"
function Header(){
    return (
        <div>
            <div className="header">
               <div className="nav">
                <div className="nav-text"> <p>HotCoffee</p></div>
                    <div className="nav-menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Articles</a></li>
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