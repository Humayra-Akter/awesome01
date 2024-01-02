import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod/images/santorini-1552680810.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Santorini</Text>
          <Text style={styles.cardLabel}>Istanbul</Text>
          <Text style={styles.cardDescription}>
            This ancient and enchanting Greek island is eternally photogenic.
            Make the most of it with a private photo shoot and walking tour
            through its picturesque villages.
          </Text>
          <Text style={styles.cardFooter}>1209km away</Text>
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
  card: {
    width: 690,
    height: 460,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    borderRadius: 12,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  cardImage: {
    height: 280,
    marginBottom: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 6,
  },
  cardFooter: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
