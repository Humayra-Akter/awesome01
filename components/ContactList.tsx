import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Humayra Akter',
      status: 'Making your gPay smooth',
      imageUrl:
        'https://media.istockphoto.com/id/1363398400/photo/woman-traveler-in-europa-alhambra-in-spain.jpg?s=612x612&w=0&k=20&c=Z14eQ_IJywp7COkEQvAhxhiOagmqupQaO_RuRg5kEzM=',
    },
    {
      uid: 2,
      name: 'Sabrina Akhter',
      status: 'Making your bkash smooth',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhxZGx1REBqy7AwYUwm9cYs5f4tvVLEThVtbgJw1gzA&s',
    },
    {
      uid: 3,
      name: 'Jannat Rahman',
      status: 'Saving your gPay',
      imageUrl:
        'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      uid: 4,
      name: 'Ruby Jahan',
      status: 'Giving your gPay finance help',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed4EKurtdbYf08ouNa9fU4JZZPRZa8fxcnQLHJdfJgl3SWhJ09znw0JWT7ajXQmT_bcM&usqp=CAU',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name} </Text>
              <Text style={styles.userStatus}>{status} </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    padding: 8,
    backgroundColor: '#8D3DAF',
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  userStatus: {
    fontSize: 14,
    color: '#fff',
  },
});
