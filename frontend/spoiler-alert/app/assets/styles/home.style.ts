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
        modalButton: {
            borderWidth: 1,
            padding: 5, 
            borderRadius: 15
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
            fontWeight: "bold",
        }

    });

    return styles;
}

export const displayDateStyles = () => {
    const styles = StyleSheet.create({
        dateContainer:{
            alignItems: "center",
        },
        dateText:{
            fontSize: 12,
        },
        date:{
            fontSize: 20,
        }
    });
    return styles;
}

export const homePageStyles = () => {
     const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 5
        },
        welcomeMsg:{
            width: '80%',
            height: '5%',
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
        },
        welcomeMsgText:{
            fontSize: 20,
            fontWeight: "heavy"
        },
        dateContainer:{
            height: '5%',
            margin: 5,
        },
        itemWrapper: {
            width: '100%',
            height: '75%',
            margin: 10,
            justifyContent: "space-between",
        },
        itemContainer: {
            height: '30%',
            width: '95%',
            padding: 5,
            margin: 10,
        },
        itemHeader:{
            marginLeft: 3,
            fontSize: 18,
            fontWeight: 'bold'
        },
        itemContentContainer: {
          borderWidth: 1,
          width: '98%',
          height: '85%',
          alignSelf: 'center'
        },
        expiryItemWrapper: {
            borderColor: "red",
        },
        nearExpiryItemWrapper: {
            borderColor: "yellow"
        },
        safeItemWrapper: {
            borderColor: "green"
        },
        addButton: {
            width: 150,
            maxHeight: '15%',
            justifyContent: "center",
            alignItems: "center",
        }
     })

     return styles;
}