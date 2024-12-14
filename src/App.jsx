import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sample from "./components/Sample";


const App = () => {


    useEffect(() => {

    }, []);


    return (
        <div className="APP min-h-[100vh] bg-white relative">
            <div className="flex w-full justify-center">
                <Navbar />
            </div>
            <div className="flex w-full justify-center">
                {/* <Contents /> */}
                <Sample />
            </div>
        </div>
    );
};

export default App;
