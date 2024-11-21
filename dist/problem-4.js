"use strict";
{
    function calculateShapeArea(inputShape) {
        if (inputShape.shape === "circle") {
            const result = (Math.PI * inputShape.radius * inputShape.radius).toFixed(2);
            return parseFloat(result);
        }
        else if (inputShape.shape === "rectangle") {
            const result = (inputShape.height * inputShape.width).toFixed(2);
            return parseFloat(result);
        }
        else {
            return 0;
        }
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
