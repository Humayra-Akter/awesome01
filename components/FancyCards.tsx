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
  card: {},
  cardElevated: {},
  cardImage: {
    height: 280,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
});
