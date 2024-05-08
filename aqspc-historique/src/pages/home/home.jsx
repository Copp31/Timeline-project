import  { useEffect, useState } from 'react';
import { MainContainer, MainBackground } from "./homeElements";

import backgroundImage from "../../assets/images/background.png";

import TimeLine from '../../components/timeLine/timeLine'

const Home = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(-window.pageYOffset / 2);  
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <MainContainer>
            <MainBackground backgroundImage={backgroundImage} offsetY={offsetY}>
                <TimeLine></TimeLine>
            </MainBackground>
        </MainContainer>
    );
};
export default Home;
