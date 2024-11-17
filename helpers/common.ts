import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceheight } = Dimensions.get("window");

 export const wp = (percentage: number) => {
    return (Number(percentage) * Number(deviceWidth)) / 100;
}

export const hp = (percentage: number) => {
    return (Number(percentage) * Number(deviceheight)) / 100;
}

