import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Humayra Akter',
      status: 'Making your gPay smooth',
      imageUrl:
        'hhttps://media.istockphoto.com/id/1363398400/photo/woman-traveler-in-europa-alhambra-in-spain.jpg?s=612x612&w=0&k=20&c=Z14eQ_IJywp7COkEQvAhxhiOagmqupQaO_RuRg5kEzM=',
    },
    {
      uid: 2,
      name: 'Sabrina Akhter',
      status: 'Making your bkash smooth',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fwoman-avatar&psig=AOvVaw22fTtbpfzof4BwRZlNIKGj&ust=1704387945939000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJDFzIXawYMDFQAAAAAdAAAAABAR',
    },
    {
      uid: 3,
      name: 'Jannat Rahman',
      status: 'Saving your gPay',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F382100%2Ffemale-avatar-girl-face-woman-user-7&psig=AOvVaw22fTtbpfzof4BwRZlNIKGj&ust=1704387945939000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJDFzIXawYMDFQAAAAAdAAAAABAx',
    },
    {
      uid: 4,
      name: 'Ruby Jahan',
      status: 'Giving your gPay finance help',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fwoman-avatar&psig=AOvVaw22fTtbpfzof4BwRZlNIKGj&ust=1704387945939000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJDFzIXawYMDFQAAAAAdAAAAABBQ',
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
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#000',
  },
  userStatus: {
    fontSize: 12,
  },
});
