import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Humayra Akter',
      status: 'Making your gPay smooth',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fwoman-avatar&psig=AOvVaw22fTtbpfzof4BwRZlNIKGj&ust=1704387945939000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJDFzIXawYMDFQAAAAAdAAAAABAE',
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
      <Text>ContactList</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
