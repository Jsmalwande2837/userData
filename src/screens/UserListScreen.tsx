// UserListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';


const UserListScreen: React.FC = () => {
    const [users, setUsers] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        // Fetch user list from the API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data)
                } else {
                    setUsers([]);
                }
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (

        <FlatList
            data={users}
            keyExtractor={(user) => user.id.toString()}
            renderItem={({ item }) => (
                <Card
                    elevation={5}
                    mode={'elevated'}
                    style={{ padding: 10, margin: 10 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('User Detail', { user: item })}>
                        <View>
                            <Image source={{ uri: "https://reqres.in/img/faces/2-image.jpg" }}
                                style={{ width: '100%', height: 150, }} />
                            <Text style={styles.textStyle}>Username: {item.name}</Text>
                            <Text style={styles.textStyle}>Email: {item.email}</Text>
                            <Text style={styles.textStyle}>Password: {item.email}</Text>
                            <Text style={styles.textStyle}>Mobile: {item.email}</Text>
                        </View>

                    </TouchableOpacity>
                </Card>
            )}
        />
    );
};

export default UserListScreen;


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        padding: 2,
        color: "#000"
    },

});
