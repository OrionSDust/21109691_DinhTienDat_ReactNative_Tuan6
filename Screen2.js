import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LmkDbjmJRxWJ6TzuV2W7ji-tZ17lybDUKpxOjHdFaW-jFuThayIKw8xkaELSnV9GlEzdOi6AVzdgeCDxDxrjwV7ztF8gxdzTZAJYsf1R2lHWdUueHcdZh0jR2Y67Eg-p-Bd~Ocv9vvTnmuVc1taaShDxUV7xSU6bO5lD1RKM8Ejd7I54NrPUprrRgeW5vgHYjES0T6ayq9o4tbPj41Z22ysJGhx~CFQ30QIfIhxJOoz9VZE4TW7L4H2LdLT9-aedQCrme8t7AQY9Nsk1g6lJxpmeMOuApz9WncY1mvhDL1PMXadwsfDqxYZOWP4aAwUo1Ap46c7t6hY6Q3~WbiMDwQ__', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/c12d/6fdf/653e7955fdd212ca1c4f3e84a556faf8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lg057QUEIMBV6tjq9Ofv8lf2ovZ3KrDsw~dkO8PL0yUY97HLf4sPxNcxw0PdPKRzpCAxqZDWJJa7QjyNJHGqtNrbfKToq0A8ODxwP3eAO96HMyuSZAE3DzO5k3S7WKzO2-bxj9v-LtjYVwojeJ83xqGpurf-GmXrfxrUmRonC0fedhwytEj2dXuisjaottlFplHrDEFjMOXcA-oT-VDSLX2dBvNtZbgw877LItkJ6ghkvDIneax5gBy~OEbi0lcco3GgfppGeb0VSqHO4VvbHczR8JwpzndsKT3ZBgOMcQk4WDlgGpNMrQ33hq4Y4gtEXyl9xwz9Tj~cnGtE2R3Q2A__', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqg04q1PgIF45R2ABTLUA2okdVHhGRt5SLkpZFNqdDWd5AHjhVtCbneqsqIBX8nmgpbEX0EpCsxXSaYi7DVUIAQlRpXDWCKlIeZtPjsFxc8iBL4AUeCJjaG47rRfdfbOedpVwc2zrveXVDK3oi24x3y9pHf~CdZBqw3obfAlzrHqSVhNj0EXVX1Zjkzmy~KZw0zB7XWzZ0HOkWSoDdzGRrL6Gh2u3xKJ7XEvGF-q0Im02SULQO9w9zUWukuCuMXygZpWEJY28aWA6vmVlHifghNYFFEFutUlazVW2OQlzP6q3R-DfIMgNeoTmO9x9aioyEue8rEXwF~I6vcUYnzoKQ__', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/160f/3e8a/05ab63a7c5f544ef7b8f5c6c6e5d1265?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5g6fBnG5F8T0P8dQTZ-pOHWx81Q2MArCPj60VERKs~T65F4gcy0neTpzxwwVy5x8HPpIPsNF4lqRZkK44NNdGD8IpgqCPdHpJdjDKHYEDfrJPZz2pzMwf3huwswwIMh6OFERdsh8~rKn9eKG0VzvvbYu1PzqehIQ4xdRv2~Dm4j3QLOCv9umsTuLzUoL-SFbIB3qr-9JsvXJitaYM7uReZgWvcPboxVrqi59hIxYjV~bN3XWFQeqPCQYSJHwbSXo~BOTEjy-KS2hSD4LeaYkoqcbnxGHM8hwVaPHyocJh8e7DThUD109bS3~P1YWkJJgER6QPMlbr2balZ~qcKv6w__', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFRyUvQB5bdQmCDAIM5kMFptIFeq806hritQ2fiVSHTTlQrtJZilhpzOZ41t8vG4E~GA3pCCMFd8jvkKUCQe2ETC5QmqZPk3WzulDN14KXkEcAFkXYk~Q~Obkv6aAcVX1rahr5zucZoIvmMP09ZUUZkj0SpS5eLWaJd~QRjKknDtpmzUbpb6fu62EwNHsCfIVDwFtHjLr4mD8EftVYlePgS1wjQG4AwL2Q6Yk-BaTfj1~7PQnOtdfhT99MLynlfpF-djeE7OsmhTFf8tqfiShJ4eX~jGAKCROauckm7PJw5~1Mywb6IQD-k8XrKnfnKuvJkck1T5kRb0SwELAd2fzg__', // Replace with actual image
    price: '69.900 đ',
    rating: '★★★★☆ (15)',
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: 'https://s3-alpha-sig.figma.com/img/d41c/7988/b78d982cc3ffe7fef9c3256310825f19?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Se-xMiaTjqKcHx-lFOUI9F0jgISP8Ap9~2YnLKcQ9crZ8-M4~c8HZCEHNPEJfDfTBQ2OxA-D2vG1V2svq8TX5ZCFCY3BW9TFZQ0jFkjBvdUj4ZYzqxV4ORaOBRSQ3tt2n7ElQ2Kq4V5vkWU1o0gkOtMBUC4BpSFbk-55Fd9BGnOrjheCvrmt-trTLny-V3~gnPMb9A9pJKYtrGPG80B-53kEszL0ThddUqgpqO4lSFOLtv-ooNkUcUrtp7EME6ZRv2PUXrfxJOIR1R7iVMHzHYqjlQiGQ-zlUmUnr5e73dkQ3qHZGILzFhub9b2-T~1uixH~eb2T40uSA5kR7e1LZA__', // Replace with actual image
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
        numColumns={2} 
        columnWrapperStyle={styles.row} 
      />

      {/* Footer Bar */}
      <View style={styles.footerBar}>
        <Ionicons name="menu-outline" size={24} color="#FFF" />
        <Ionicons name="home-outline" size={24} color="#FFF" />
        <Ionicons name="arrow-back-outline" size={24} color="#FFF" />
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
    backgroundColor: '#FFF7E6', 
    borderRadius: 20, 
    paddingHorizontal: 10, 
    flex: 1, 
    marginHorizontal: 10, 
  },
  searchInput: {
    flex: 1, 
    height: 40,
    borderWidth: 0, 
    paddingLeft: 10,
    color: '#333', 
  },
  searchIcon: {
    marginRight: 5, 
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
    color: '#FFA500', 
  },
  price: {
    fontSize: 14,
    color: '#FF0000', 
  },
  row: {
    justifyContent: 'space-between', 
  },
  footerBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0080FF',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 'auto', 
  },
});

export default App;
