import OverView from "../OverView/OverView";
import Banner from "../Banner/Banner";
import EmployeeHome from "../EmployeeHome/EmployeeHome";
import HRManagerHome from "../HRManagerHome/HRManagerHome";
import About from "../About/About";

const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <OverView></OverView>
        <About></About>
        <EmployeeHome></EmployeeHome>
        <HRManagerHome></HRManagerHome>
       </div>
    );
};

export default Home;