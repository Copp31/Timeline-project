export const Object = {
    TitleH1: titleh1,
    Subtitle: subtile,
    Text: text,
    Year: year,
    Date: date,
    ValueType: ValueType.title,
    PersonProfil: personProfil,
    Button: button,

    BackgroundColor: backgroundColor,
    Image: image,
    Video: video,
    AnimationType: animationType,
};

export const PersonProfil = {
    FullName: fullname,
    Picture: picture,
    Value: ValueType.title,
};

export const ValueType = {
    Title: [],
    Color: colors,
    // show valueType.title quand passe par dessus element valueType
};

export const Button = {
    Title: title,
    Alt: alt,
    LinkType: [interne, externe],
    LinkUrl: linkUrl,
};

// fonction fabrication element individuel
// fonction montage de la page
// loading animation
// faire background-asset
// faire bulle asset : 5 couleurs
// Faire bouton navigation année par année
// la ligne du temps se dessine au fur et a mesure que l'utilisateur scroll.
// Les elements ronds visés deviennent rouge quand son année est selecetionnée. Le point devient plus gros aussi
