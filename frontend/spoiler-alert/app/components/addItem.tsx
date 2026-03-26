import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { addItemStyles } from "../assets/styles/home.style";

const AddItem = () => {
    const styles = addItemStyles();

    const [isModalVisible, setVisible] = useState(false);
    const [newItem, setNewItem] = useState({
        itemName: "",
        category: "Fruits and Vegetables",
        date: ""
    });

    const foodCategories = ["Fruits and Vegetables", "Meat and Dairy", "Carbohydrates", "Others"];
    const [itemList, setItemList] = useState([]);

    const handleSubmit = () => {
        if (newItem.itemName.trim() === "") return;
        // Missing adding item to theitem list
        handleCancel();
    }

    const handleCancel = () => {
        setNewItem({
            itemName: "",
            category: "Fruits and Vegetables",
            date: ""
        });
        setVisible(false);
    }
        
    return (
        <View>
            <Button title="Add an Item" onPress={() => setVisible(true)}/>

            <Modal
                id="modal add item"
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.instructionText}>Enter the item name:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="E.g. Bread"
                            value={newItem.itemName}
                            onChangeText={(e) => setNewItem({...newItem, itemName: e})} 
                        />

                        <Text style={styles.instructionText}>Choose the food category:</Text>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue={newItem.category}
                                onValueChange={(e) => setNewItem({...newItem, category: e})}
                            >
                                {foodCategories.map((c) => (
                                    <Picker.Item key={c} label={c} value={c}/>
                                ))}
                            </Picker>
                        </View>    


                        <Text>
                            Date Picker to be Added!
                        </Text>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => handleCancel()}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>

                        </View>
                        

                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default AddItem