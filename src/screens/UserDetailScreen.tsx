// UserDetailScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Card, TouchableRipple } from 'react-native-paper';

const UserDetailScreen: React.FC = ({ route }) => {

    const { user } = route.params;
    const [editedName, setEditedName] = useState(user.name);
    const [editedEmail, setEditedEmail] = useState(user.email);

    const [editedPhone, setEditedPhone] = useState(user.phone);
    const [editedWebsite, setEditedWebsite] = useState(user.website);

    const address = user.address;
    const street = address.street;
    const suite = address.suite;
    const zipcode = address.zipcode;

    const [editedAddress, setEditedAddress] = useState(street + " " + suite + " " + zipcode);
    const navigation = useNavigation();

    const updateUser = () => {
        // Make API call to update user details
        axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, { name: editedName, email: editedEmail })
            .then(response => {
                console.log('User updated:', response.data);
                navigation.goBack();
            })
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <ScrollView>


            <View style={styles.container}>
                <Card
                    elevation={5}
                    mode={'elevated'}
                    style={{ padding: 10 }}>
                    <Text style={styles.textStyle}>Name: {user.name}</Text>
                    <Text style={styles.textStyle}>Email: {user.email}</Text>
                    <Text style={styles.textStyle}>phone: {user.phone}</Text>
                    <Text style={styles.textStyle}>website: {user.website}</Text>
                    <Text style={styles.textStyle}>address: {street + " " + suite + " " + zipcode}</Text>
                </Card>

                <TextInput
                    placeholder={"Name"}
                    value={editedName}
                    placeholderTextColor={"#000"}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={setEditedName} />

                <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"#000"}
                    value={editedEmail}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={setEditedEmail} />

                <TextInput
                    placeholder={"Phone"}
                    value={editedPhone}
                    placeholderTextColor={"#000"}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={setEditedPhone} />


                <TextInput
                    placeholder={"Website"}
                    value={editedWebsite}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    placeholderTextColor={"#000"}
                    keyboardType={'default'}
                    autoCapitalize='none'
                    onChangeText={setEditedWebsite} />

                <TextInput
                    placeholder={"Address"}
                    value={editedAddress}
                    style={styles.defaultTextInput}
                    secureTextEntry={false}
                    keyboardType={'default'}
                    placeholderTextColor={"#000"}
                    autoCapitalize='none'
                    onChangeText={setEditedAddress} />


                <TouchableRipple
                    rippleColor={"#EEF6F9"}
                    centered={true}
                    style={styles.buttonStyle}
                    onPress={() => updateUser()}>
                    <Text style={styles.buttonColor}>{"Update User"}</Text>
                </TouchableRipple>


            </View>
        </ScrollView>
    );
};

export default UserDetailScreen;

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
        height: 55

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
        padding: 2,
        color: "#000"
    },

});
