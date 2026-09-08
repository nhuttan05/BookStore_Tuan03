import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Header() {
  return (
    <View style={styles.container}>
        <View>
            <Text>
            <FontAwesome name="book" size={24} color="black" />
                BookStore</Text>
        </View>
        <div style={{display: 'flex', gap: '10px'}}>
            <View>
                <Text>
                <Feather name="search" size={24} color="black" />
                    Find</Text>
            </View>
            <View>
                <Text>
                <AntDesign name="shopping-cart" size={24} color="black" />
                    Card
                </Text>
            </View>
        </div>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-between',
        padding:16,
        height: 56
    }
})