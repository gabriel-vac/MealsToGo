/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://s2.glbimg.com/JVIeUiu8gsUvFcOe-fKmlY5gFA4=/620x345/e.glbimg.com/og/ed/f/original/2019/11/27/tacos.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
});
