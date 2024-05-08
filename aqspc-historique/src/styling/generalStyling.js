import { colors } from "./colors";

export const fonts = {
    anaheim: "Anaheim",
    infinity: "Infinity",
};

export const getBorderStyle = (valueType) => {
    switch (valueType) {
        case "A":
            return `
                ${colors.accent.solid}; 
            `;
        case "B":
            return `
                ${colors.colorA.solid};
            `;
        case "C":
            return `
                ${colors.secondary.solid};
            `;
        case "D":
            return `
                ${colors.primary.solid}; 
            `;
    }
};
