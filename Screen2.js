import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://via.placeholder.com/100', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://via.placeholder.com/100', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://via.placeholder.com/100', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://via.placeholder.com/100', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://via.placeholder.com/100', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="arrow-back-outline" size={24} color="#FFF" />
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#A8A8A8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm..."
            placeholderTextColor="#A8A8A8"
          />
        </View>
        <Ionicons name="cart-outline" size={24} color="#FFF" />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} // Display two items per row
        columnWrapperStyle={styles.row} // Style for the row
      />

      {/* Footer Bar */}
      <View style={styles.footerBar}>
        <Ionicons name="home-outline" size={24} color="#FFF" />
        <Ionicons name="search-outline" size={24} color="#FFF" />
        <Ionicons name="add-circle-outline" size={24} color="#FFF" />
        <Ionicons name="heart-outline" size={24} color="#FFF" />
        <Ionicons name="person-outline" size={24} color="#FFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0080FF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF7E6', // Light yellow background
    borderRadius: 20, // Rounded edges
    paddingHorizontal: 10, // Horizontal padding for the search bar
    flex: 1, // Take up available space
    marginHorizontal: 10, // Margin between icons and search bar
  },
  searchInput: {
    flex: 1, // Allow search input to take up available space
    height: 40,
    borderWidth: 0, // No border
    paddingLeft: 10,
    color: '#333', // Text color
  },
  searchIcon: {
    marginRight: 5, // Space between icon and text
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 12,
    color: '#FFA500', // Color for the rating stars
  },
  price: {
    fontSize: 14,
    color: '#FF0000', // Color for the price
  },
  row: {
    justifyContent: 'space-between', // Align items in the row
  },
  footerBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0080FF',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 'auto', // Push footer to bottom
  },
});

export default App;
