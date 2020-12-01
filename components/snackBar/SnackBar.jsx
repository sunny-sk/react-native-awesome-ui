import React, { ReactNode, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";

const SnackBar = (WrappedComponent: React.FC<ReactNode>) => {
  function Hoc(props: any) {
    const bottom = useRef(new Animated.Value(1000)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    const [sType, setType] = useState("success");
    const [sMessage, setMessage] = useState("message");
    const [sTimeout, setTimeOut] = useState(2000);
    const show = () => {
      Animated.spring(bottom, {
        useNativeDriver: true,
        toValue: 30,
        bounciness: 4,
      }).start(() => {
        Animated.timing(bottom, {
          useNativeDriver: true,
          toValue: 1000,
          delay: sTimeout,
        }).start();
      });
    };

    const showMessage = (type: string, message: string, timeout: number) => {
      setType(type);
      setMessage(message);
      setTimeOut(timeout);
      show();
    };
    return (
      <>
        <WrappedComponent {...props} showMessage={showMessage} />
        <Animated.View
          style={{
            position: "absolute",
            bottom: 80,
            width: "90%",
            left: "5%",
            transform: [{ translateY: bottom }],
            backgroundColor:
              sType === "success" ? Colors.danger : Colors.danger,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "80%",
                paddingVertical: 10,
                paddingHorizontal: 12,
              }}
            >
              <Text style={{ color: "white" }}>{sMessage}</Text>
            </View>
            <View
              style={{
                width: "20%",
                paddingVertical: 10,
                paddingHorizontal: 12,
              }}
            >
              <TouchableOpacity
                style={{ height: "100%", width: "100%" }}
                onPress={() => {
                  console.log("App -> onPress");
                }}
              >
                <Text style={{ color: "white" }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </>
    );
  }
  return Hoc;
};

export default SnackBar;

const styles = StyleSheet.create({});
