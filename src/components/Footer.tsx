import footer1 from "../img/instagram-fill 1.jpg";
import footer2 from "../img/linkedin-box-fill 1.jpg";
import footer3 from "../img/Vector.jpg";
function Footer(){
    return (
        <div className="footer">
            <div className="footer-text">
                <p><strong>hotcoffee</strong> 2020 copyright all rights reserved</p>
            </div>
            <div className="footer-icon">
                <img src={footer1} alt="" />
                <img src={footer3} alt="" />
                <img src={footer2} alt="" />
            </div>
        </div>
    )
}
export default Footer