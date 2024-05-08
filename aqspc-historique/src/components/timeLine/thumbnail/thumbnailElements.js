import styled from "styled-components";
import { colors } from "../../../styling/colors";
import { fonts } from "../../../styling/generalStyling";

export const ThumbnailContainer = styled.div`
    background-color: ${colors.secondary.transparent};
    border: 1px solid ${(props) => props.valueType};
    min-width: 100px;
    min-height: 200px;
    border-radius: 20px;
    display: flex;
    padding: 30px;
    margin: 20px;
    margin-left: auto;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-family: ${fonts.infinity};
    font-weight: 400;
    color: ${colors.primary.solid};
    padding-bottom: 5px;
`;

export const Subtitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    font-family: ${fonts.infinity};
`;
export const Text = styled.p`
    font-family: ${fonts.infinity};
    font-weight: 100;
    padding-top: 20px;
`;
export const Year = styled.p`
    font-family: ${fonts.anaheim};
`;
export const Date = styled.p`
    font-family: ${fonts.anaheim};
`;
export const ValueType = styled.p`
    font-family: ${fonts.infinity};
    font-weight: 100;
`;
export const PersonProfile = styled.p`
    font-family: ${fonts.infinity};
    font-weight: 100;
`;

export const Button = styled.button`
    font-family: ${fonts.infinity};
    font-weight: 100;
    padding: 20px;
    width: 20px;
`;
