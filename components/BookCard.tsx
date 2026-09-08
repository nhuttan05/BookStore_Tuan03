import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function BookCard() {
  return (
    <View style={styles.container}>
        <View style={styles.imageLeft}>
            <Image 
                source={require('../assets/book1.png')} 
                style={styles.bookImage} 
            />
        </View>
        <View>
            <div style={styles.infoRight}>
                <Text>Tên sách</Text> <br />
                <Text >Tác giả</Text>
            </div>
            <View style={styles.price}>
                <Text>Giá</Text>
            </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10
    },
    imageLeft: {
        width: 80,
        height: 110,
        borderRadius: 2,
        marginRight: 10
    },
    bookImage: {
        width: 80,
        height: 110,
        borderRadius: 4,
    },
    infoRight: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'column'
    },
    price: {
        paddingTop: 35,
        justifyContent: 'space-between'
    }
})