import styled from "styled-components";

export const MainBackground = styled.div`
    min-width: 100vw;
    z-index: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-attachment: fixed;
    background-position: center ${(props) => `calc(50% + ${props.offsetY}px)`};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

export const MainContainer = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// export const ThumbnailsContainer = styled.div``;

// export const ThumbnailsContainer = styled.div`
//     flex-grow: 1; // Prend tout l'espace restant après VerticalLine
//     // Autres styles nécessaires pour votre mise en page
// `;
