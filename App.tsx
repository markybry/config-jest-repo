import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import environments from "./lib/config";

const App = () => {
    const apiHostSetting = environments.apiHost;
    return (
        <View>
            <Text>The API host is set to {apiHostSetting}</Text>
        </View>
    );
};

export default App;
