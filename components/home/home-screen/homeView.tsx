import { View, Text } from "react-native";
import styles from "./homeView.style";

const HomeTypes = ["Condos", "Apartments", "Home"]

const homeView = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headerMessage}>
                    Find Your Home
                </Text>
                <Text style={styles.welcomeMessage}>
                    More than 100 listings for you
                </Text>
            </View>
        </View>
    );
}

export default homeView;