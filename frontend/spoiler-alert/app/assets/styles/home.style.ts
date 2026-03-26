import { StyleSheet } from "react-native";

export const addItemStyles = () => {
    const styles = StyleSheet.create({
        modalContainer:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
        modalContent: {
            width: 300,
            justifyContent: "center",
            backgroundColor: "wheat",
            borderRadius: 5,
            borderColor: "black",
            borderWidth: 2
        },
        instructionText:{
            marginTop: 15,
            marginHorizontal: 15,
            marginBottom: 5,
            fontSize: 16,
            fontWeight: "bold"
        },
        textInput:{
            marginHorizontal: 15,
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 5
        },
        picker:{
            marginHorizontal: 15,
            borderWidth: 0.5,
            borderRadius: 5
        },
        buttonContainer:{
            flexDirection: "row",
            justifyContent: "center",
            gap: 12,
            margin: 15
        },
        button:{
            borderRadius: 10,
            width: 70,
            borderColor: "black",
            alignItems: "center",
            borderWidth: 1
        },
        buttonText:{
            alignItems: "center",
            padding: 5,
            fontWeight: "bold"
        }

    });

    return styles;
}

export const homePageStyles = () => {
     const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        addButton: {
            width: 150,
            justifyContent: "center",
            alignItems: "center"
        }
     })

     return styles;
}