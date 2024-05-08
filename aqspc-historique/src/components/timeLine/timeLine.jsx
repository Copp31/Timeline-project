import {TimeLineContainer, ThumbnailsParentContainer} from "./timeLineElements";

import Thumbnail from '../timeLine/thumbnail/thumbnail'
import VerticalLine from "../timeLine/verticalLine/verticalLine";

import myElements from '../../dataStructure/dataSimulation';
import TimelineElement from '../../dataStructure/dataConstructor'


const sortedElements = myElements.sort((a, b) => b.year - a.year);


const TimeLine = () => {
    return (
        <TimeLineContainer>
             <VerticalLine />
                <ThumbnailsParentContainer>
                    {sortedElements.map((element, index) => {
                        const timelineElement = new TimelineElement(element);
                        return (
                            <Thumbnail
                                key={index}
                                titleH1={timelineElement.TitleH1}
                                subtitle={timelineElement.Subtitle}
                                text={timelineElement.Text}
                                year={timelineElement.Year}
                                valueType={timelineElement.ValueType}
                                personProfile={timelineElement.PersonProfile}
                                button={timelineElement.Button}
                            />
                        );
                    })}
                </ThumbnailsParentContainer>
            
        </TimeLineContainer>
    )
};

export default TimeLine;
