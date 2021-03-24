import React, { useEffect, useState } from 'react';
import BgImage from '../../images/bg3.jpg';
import ridesData from '../../FakeData/FakeData.json';
import './Home.css'
import Rides from '../Rides/Rides';

const Home = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        setRides(ridesData);
    }, [])
    return (
        <div>
            <div style={{ backgroundImage: `url(${BgImage})` }} className="bg-image">

            </div>
            <div className="rideCard"> 
                {
                    rides.map(ride => <Rides ride={ride}></Rides>)
                }
                </div>
        </div>
    );
};

export default Home;