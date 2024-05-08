import { getBorderStyle } from "../../../styling/generalStyling";

import { ThumbnailContainer, 
            Title, 
            Subtitle, 
            Text, 
            Year, 
            Date, 
            PersonProfile, 
            Button } from "./thumbnailElements";


const Thumbnail = ({ titleH1, subtitle, text, year, date, valueType, personProfile, button }) => {
    return (
        <ThumbnailContainer valueType={getBorderStyle(valueType)}>
            {titleH1 && <Title>{titleH1}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {text && <Text>{text}</Text>}
            {year && <Year>{year}</Year>}
            {date && <Date>{date}</Date>}
            {personProfile && <PersonProfile>{personProfile}</PersonProfile>}
            {button && <Button>{button}</Button>}
        </ThumbnailContainer>
    );
};

export default Thumbnail;