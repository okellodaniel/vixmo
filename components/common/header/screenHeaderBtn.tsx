import { TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

interface ScreenHeaderBtnProps {
    iconUrl: any;
    dimension: any;
};

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ iconUrl, dimension }) => {

    const handlePress = async () => { };

    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode="cover"
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;