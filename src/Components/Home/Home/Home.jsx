import OverView from "../OverView/OverView";
import Banner from "../Banner/Banner";
import EmployeeHome from "../EmployeeHome/EmployeeHome";
import HRManagerHome from "../HRManagerHome/HRManagerHome";
import About from "../About/About";
import Packages from "../Packages/Packages";

const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <OverView></OverView>
        <About></About>
        <Packages></Packages>
        <EmployeeHome></EmployeeHome>
        <HRManagerHome></HRManagerHome>
       </div>
    );
};

export default Home;