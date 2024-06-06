// components/UserCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

interface UserCardProps {
  avatar: string;
  name: string;
  price: string;
}

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const ItemCard: React.FC<UserCardProps> = ({ avatar, name, price }) => {
  return (
    <View style={styles.card}>
      <Image
        source={avatar}
        style={styles.avatar}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{`${price} $`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10454F',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
  },
  name: {
    color: '#FAFAFA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    color: '#FAFAFA',
    fontSize: 14,
  },
});

export { ItemCard };
