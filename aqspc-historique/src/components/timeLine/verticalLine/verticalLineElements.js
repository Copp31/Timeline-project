import styled from "styled-components";
import { colors } from "../../../styling/colors";

export const LineContainer = styled.div`
    width: 100%;
`;

export const Line = styled.div`
    width: 1px;
    background-color: ${colors.accent.solid};
    position: absolute;
    left: 10%;
    top: 0;
    bottom: 0;
    height: 100%;
`;
