import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { addItemStyles } from "../assets/styles/home.style";

const AddItem = () => {
    const styles = addItemStyles();

    const [isModalVisible, setVisible] = useState(false);
    const [newItem, setNewItem] = useState({
        itemName: "",
        category: "Fruits and Vegetables",
        date: ""
    });

    const [newDate, setDate] = useState(null);
    const [showPicker, setPicker] = useState(false);
    
    const foodCategories = ["Fruits and Vegetables", "Meat and Dairy", "Carbohydrates", "Others"];
    const [itemList, setItemList] = useState([]);

    const handleDateChange = () => {
        
    }

    const handleSubmit = () => {
        if (newItem.itemName.trim() === "") return;
        // Missing adding item to the item list
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
            <TouchableOpacity style={styles.modalButton} onPress={() => setVisible(true)}>
                <Text style={styles.buttonText}>+ Add an item</Text>
            </TouchableOpacity>

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

                        <View>
                            <TouchableOpacity onPress={() => setPicker(true)}>
                                Select the Expiry Date
                            </TouchableOpacity>
                            {
                                showPicker && (
                                    <DateTimePicker 
                                        mode={'date'}
                                        value={newDate || new Date()}
                                        onChange={handleDateChange}
                                    />
                                )
                            }
                        </View>

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