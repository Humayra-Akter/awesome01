import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking;
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={(styles.card, styles.cardElevated)}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in js 21-ES21</Text>
        </View>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/1hFGxkJcTHU/maxresdefault.jpg',
          }}
          style={styles.cardImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  card: {
    width: 690,
    height: 460,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  headingContainer: {},
  headerText: {},
  cardImage: {height: 200},
  cardElevated: {
    backgroundColor: '#CAD5E2',
    borderRadius: 12,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});
