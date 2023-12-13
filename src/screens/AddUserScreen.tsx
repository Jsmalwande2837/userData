// AddUserScreen.tsx
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Toast from 'react-native-simple-toast';


interface AddUserFormData {
    name: string;
    email: string;
    phone: string;
    website: string;
    address: string;
}


const AddUserScreen: React.FC = () => {

    const [formData, setFormData] = useState<AddUserFormData>({ name: '', email: '', phone: '', website: '', address: '' });


    const navigation = useNavigation();

    const addUser = () => {

        if (formData.name.length == 0) {
            Toast.showWithGravity("Please enter name", Toast.LONG, Toast.BOTTOM);
        } else if (formData.email.length == 0) {
            Toast.showWithGravity("Please enter email", Toast.LONG, Toast.BOTTOM);
        } else if (formData.phone.length < 10) {
            Toast.showWithGravity("Please enter phone", Toast.LONG, Toast.BOTTOM);
        } else if (formData.website.length == 0) {
            Toast.showWithGravity("Please enter website", Toast.LONG, Toast.BOTTOM);
        } else if (formData.address.length == 0) {
            Toast.showWithGravity("Please enter address", Toast.LONG, Toast.BOTTOM);
        } else {
            // Make API call to create a new user
            axios.post('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    console.log('User added:', response.data)
                    setFormData({ ...formData, name: '', phone: '', email: '', website: '', address: '' })
                    navigation.goBack();
                })
                .catch(error => console.error('Error adding user:', error));
        }

    };

    return (
        <ScrollView>

            <View style={styles.container}>
                <TextInput
                    placeholder={"Name"}
                    value={formData.name}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={(name) => setFormData({ ...formData, name })} />

                <TextInput
                    placeholder={"Email"}
                    value={formData.email}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={(email) => setFormData({ ...formData, email })} />


                <TextInput
                    placeholder={"Phone"}
                    value={formData.phone}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'number-pad'}
                    autoCapitalize='none'
                    onChangeText={(phone) => setFormData({ ...formData, phone })} />


                <TextInput
                    placeholder={"Website"}
                    value={formData.website}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={(website) => setFormData({ ...formData, website })} />

                <TextInput
                    placeholder={"Address"}
                    value={formData.address}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={(address) => setFormData({ ...formData, address })} />


                <TouchableRipple
                    rippleColor={"#EEF6F9"}
                    centered={true}
                    style={styles.buttonStyle}
                    onPress={() => addUser()}>
                    <Text style={styles.buttonColor}>{"Add User"}</Text>
                </TouchableRipple>

            </View>
        </ScrollView>
    );
};

export default AddUserScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    defaultTextInput: {
        color: "#000",
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: "#fff",
        paddingHorizontal: 0,
        borderBottomWidth: 1.5,
        borderColor: "#E4E4E7",
        width: '100%',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        height: 45

    },
    buttonColor: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '500',
    },
    buttonStyle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3F8CFF",
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        padding: 2
    },

});
