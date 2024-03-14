import content from "../img/card-latest.png"
import item1 from "../img/image 2.jpg"
import item2 from "../img/image 4.jpg"
import item3 from "../img/image 5.jpg"
import highlight from "../img/highlight-section.jpg"
import seemore from "../img/Group 1.jpg"
function Home(){
    return (
        <div>
            <div className="content">
                <div className="content-section">
                    <img src={content} alt="" />
                </div>
                <div className="card">
                    <div className="card-item">
                        <div className="card-item--image"><img src={item1} alt="" /></div>
                        <div className="item-title">
                        <h1>long established</h1>
                        <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h2>
                            <div className="item-title--child">
                            <p>May 20th 2020</p>
                            <span>Read more</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="card-item--image"><img src={item2} alt="" /></div>
                        <div className="item-title">
                        <h1>long established</h1>
                        <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h2>
                            <div className="item-title--child">
                            <p>May 20th 2020</p>
                            <span>Read more</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="card-item--image"><img src={item3} alt="" /></div>
                        <div className="item-title">
                        <h1>long established</h1>
                        <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h2>
                            <div className="item-title--child">
                            <p>May 20th 2020</p>
                            <span>Read more</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-highlight">
                    <img src={highlight} alt="" />
                </div>
                <div className="content-button">
                    <img src={seemore} alt="" />
                </div>
            </div>
            <div className="border"></div>
        </div>
    )
}
export default Home