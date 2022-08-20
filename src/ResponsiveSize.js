import React from "react";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize } from "react-native-responsive-dimensions";

const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;

const widthPercentage = (width) => {
    const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
    return responsiveScreenWidth(percentage);
} 

const heightPercentage = (height) => {
    const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
    return responsiveScreenHeight(percentage);
}

const fontPercentage = (size) => {
    const percentage = size * 0.135;
    return responsiveScreenFontSize(percentage);
}

export {widthPercentage, heightPercentage, fontPercentage};