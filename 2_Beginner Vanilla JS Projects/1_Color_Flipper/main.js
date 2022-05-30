const colorObjs = [
    {
        id: 0,
        colorName: "Red",
        hexValue: "#FF0000"
    },
    {
        id: 1,
        colorName: "Blue",
        hexValue: "#0000FF"
    },
    {
        id: 2,
        colorName: "Purple",
        hexValue: "#800080"
    },
    {
        id: 3,
        colorName: "Yellow",
        hexValue: "#FFFF00"
    },
    {
        id: 4,
        colorName: "Lime",
        hexValue: "#00FF00"
    },
    {
        id: 5,
        colorName: "Pink",
        hexValue: "#FFC0CB"
    },
    {
        id: 6,
        colorName: "Orange",
        hexValue: "#FFA500"
    },
    {
        id: 7,
        colorName: "Olive",
        hexValue: "#808000"
    },
    {
        id: 8,
        colorName: "Grey",
        hexValue: "#808080"
    },
    {
        id: 9,
        colorName: "Indigo",
        hexValue: "#4B0082"
    },
    
];

let genNum = (x=10) => Math.floor((Math.random() * x));
// console.log(randNum());

const changeBackground = (colorId= genNum()) => {

    console.log(colorId);

    colorObjs.forEach(function(color){
        if (color.id === colorId){
            colorName = color.colorName;
            colorHex = color.hexValue;
        }
    });

    console.log(colorName);
    console.log(colorHex);

    document.body.style.background = colorHex;
    crtClr = document.querySelector('#flipper-current');
    crtClr.textContent = colorName;

};

changeBackground();