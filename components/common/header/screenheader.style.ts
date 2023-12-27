import { COLORS, SIZES } from "../../../constants/theme";
import { ImageStyle, ViewStyle } from "react-native";

interface ScreenHeaderProps {
    btnContainer: ViewStyle;
    btnImg: (dimension: any) => ImageStyle;
}

const styles: ScreenHeaderProps = {
    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },

    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
    }),
}

export default styles;