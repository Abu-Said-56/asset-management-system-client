import { Link, NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/Ry30mzg/invest-investment-financial-income-profit-costs-concept-53876-128112.jpg"
                    className="w-full h-[550px]" />
                {/* <li className="text-lg "><NavLink to="/joinemployee">Join Employee</NavLink></li> */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <Link to="/joinemployee"><button className="absolute top-[40%] left-[45%] btn btn-secondary ">Join Employee</button></Link>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                {/* <li className="text-lg "><NavLink to="/joinHRManager">Join HR Manager</NavLink></li> */}
                <img
                    src="https://i.ibb.co.com/qFV06Tq/two-colleagues-working-late-office-blue-light-night-view-482257-32812.jpg"
                    className="w-full h-[550px]" />

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <Link to="/joinHRManager"><button className="absolute top-[35%] left-[50%] btn btn-secondary ">Join HR Manager</button></Link>
            </div>
            {/* <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/18JPXnq/business-person-looking-finance-graphs-23-2150461326.jpg"
                    className="w-full h-[550px]" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> */}
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/nmfxZQL/young-businessman-using-trade-market-profit-data-screen-create-financial-investment-looking-stock-ch.jpg"
                    className="w-full h-[550px]" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;