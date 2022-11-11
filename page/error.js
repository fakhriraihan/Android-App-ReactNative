import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Error = () => {
    return (
        <View style={{ alignItems:"center", justifyContent: "center", height: "100%" }}>
            <Image source={require("./images/error.png")} style={{ width: 200, height: 200 }} />
            <Text style={style.text1}>
                Error 404
            </Text>
            <Text style={style.text2}>
                Not Found
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    text1: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black",
    },
    text2: {
        fontSize: 50,
        fontWeight: "bold",
        color: "red",
    },
});

export default Error;