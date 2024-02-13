function triangleArea(){
    // get the triangle base value
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue)
    // console.log( typeof base,base)

    // get the triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
   const height = parseFloat(triangleHeightValue);
// console.log(height)

const area = 0.5 *base*height;
console.log('triangle value',area)
// get triangle area
const triangleSpanArea = document.getElementById('triangle-area')
 triangleSpanArea.innerText = area;
}

function rectangleArea(){
    // get the width of rectangle
    const rectangleWidth = document.getElementById('rectangle-field');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    // console.log('width',width)

    // get the length of rectangle
    const rectangleHeight = document.getElementById('rectangle-height');
    const rectangleHeightValue = rectangleHeight.value;
    const height = parseFloat(rectangleHeightValue);
    // console.log(height)

    // view in rectangle area
    const viewValueArea = document.getElementById('viewValueArea');
    viewValueArea.innerText = width * height;
}