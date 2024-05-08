class TimelineElement {
    constructor(data) {
        this.TitleH1 = data.titleH1 || null;
        this.Subtitle = data.subtitle || null;
        this.Text = data.text || null;
        this.Year = data.year || null;
        this.Date = data.date || null;
        this.ValueType = data.valueType || null;
        this.PersonProfile = data.personProfile || null;
        this.Button = data.button || null;
        // this.BackgroundColor = data.backgroundColor || null;
        // this.Image = data.image || null;
        // this.Video = data.video || null;
        // this.AnimationType = data.animationType || null;
    }
}

// Exemple d'utilisation
// const myElement = new TimelineElement({
//     titleH1: "Bonjour",
//     text: "Lorem Ipsum",
//     year: 2024,
//     backgroundColor: "red",
// });

// console.log(myElement);

export default TimelineElement;
