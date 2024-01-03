import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
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
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            sint consequuntur quos accusamus quisquam reprehenderit perferendis!
            Quaerat quasi sunt magnam nam, laborum, in numquam quod minus
            eveniet nulla a voluptatibus.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com')}>
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
        </View>
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
  socialLinks: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingVertical: 6,
  },
  card: {
    width: 690,
    height: 460,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bodyContainer: {
    padding: 10,
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    borderRadius: 12,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
});
