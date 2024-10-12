import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icon library

const data = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fRYRFRHuUrsblzJk8KzPkub8idoHYhFc1bw0uZmAx-fOnHEokZzuVTTtAc3dy0lEhjQYAl1kBlxI-uPizF2n5oLRLmWFvcn5lHugZBMJvcFF04B4bphQcDdAJP9zVuH201BRCRC9MxTcgEz1ONio55UBnjuMTPet5XhXGM94fp9vlugLbnck9DaEnlZAogd91VhDDLMmZm5jvAyscu~VFsvHylxDaPJetFo1HFYCLD6zNM03y2Dn8SGSRzPWHoIod1EOI5FYt4o4TpqRFvsfIBPl~UqPs82xWdZ3V3MP75mN3GmZUN0eQwTwYngq91C3EVGwiF4HbEpv1egdQ4Chjw__',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    image: 'https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtORjGRWRARuO1rEORBea4taNoIaetSKNlC7cOej8KyG6rTrs-dasfu-dddv8leBKVL4Jc~cs2B4kG7ECES3QmmIHmFgB-QdeujwUW8Q4~ALn32V7Kui4GDmZHldhORsXmbats~rDgci0gMTMmzXwokBOPmHNt5vON-NWk5C9Zetdyup6rx8owFpms2VgiZpMmmh2bCr-IbwzrCQ5OMExC8OakfVY4-OuB5rNvRfXV3o~04Kkzr-c4il6JXahW1zgaNrv8ZWCX7cvrPeXs5ov56LfFnDx6dbTYDSo9LkAph4~XkW3XmyMIVdLJroBVHI5EX~pWqpj3jAAZsyjyWVUg__',
  },
  {
    id: '3',
    name: 'Xe cẩn cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: 'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=biuNiIsMzXoaxNTaz6rFwK4LJEFcx8GZCliRe8dGd3~XEUXDfYINLBIBAAtaoj0ncteQ2tQOUIaZNGYDF49eP9XfUACyUCjo33setFAg0uI2fKcIZWqysd53HiXEocrKo5EmtRbV1j51EwssEb3xIwnhG9-SR~lSRHrzW-9uN0S8aJkOOQKoFjSDZpKRrHokYdm0lwnS1wM41d8ohrrVOZDRI3xS8skiMK4Vpo3ceasBDE-F8GtzqVxSjOfYpufw3Q~SACR-vUA2loNBZIc5bIl0OG0RHlQEo2tOC54~sZcL1em8F9RS5GjhzVzn7XTM18hez3Sa4jggW81xPN-uTQ__',
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: 'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcVYxadTPL5sfNcTh7S1oDhL0DsVvjFy4D5XAe8BeQZ3TNtR~FY6sx8vRuzgL-FLnD0l7kvqgYglXhzzI7cXt-tnrEGY45e6C3ntfRz74ESM16OAX8gtmokz5lq41X1G2Nq8mLGqfUrfxQJ36tgA5PPh3TOAFyll7Y-1pkzaZ-SgqFb8tXP9ro-mtT-daCwkXDgeVcc9bvSA4FwUOlcRSNZYngLFPfw9HkVuSXeyfYQqxP5jjCjY-x5Vuocg6FA1P6QJ9X4vmGZeW4lFsNDqZsHE3OKjJ7Sz2RUCADGeGCrBK1P8KgFdbDwtMC5ICW4i5MLVAwxytc5Ztw6exKpveQ__',
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: 'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ijEYrk3y4ATBJl0sA1uOueOeIilA2hZiUmgG2z91VIRLPr~lvoO4YrZipHC59T~PcBdtwPzXL~LEpsoryW9FN2SzsqYO-~hkY8p3uPSFZqSd~N92ejudfoDLit0V5Gs8MvQg6XMxOqYLYItV543W-oPOfKJYTktkITuz9Qb1AbBEsMY7q3E7gQOSaZb59T6XmWWg6UnSukCUKUhnLjBSv~HFtmBetWr53-Jc03S-vInB6j8Vc6uHxY1A5v16ysyor0otyrSrdi90xWyMJZD7taN7-ZqC4gPqzPluOl2w8rJLR0YyNZ1BiySV-5FAUxZMS5xESoyLnZMlhJA~lliaeg__',
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://s3-alpha-sig.figma.com/img/c8c9/8ce6/979c72e4afba69217c666d47e7f3dafe?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBzY-Wht-FZHpItQzBGxtPucMYQJnieWBMgkEOADHOYqhlojwhQEtYInyTth~rhFgcKAGYecQ4HjAnH7OVS~N~qajq2-gt2SE51DC2YOiAuZ6ft6uYar2YXYIaMGew7~XvKveiHM~OaIrFbhmkppbY0x0~VuTA~FrPpO8uRWoLLjozcDK1qqzEokUq7~vWE1XntmeTZg1H-3LEMLbDtK6leHPEOy2IAhBFTDhWmIlgaeLJLADIsB0bhYmJiNY4DOH0uaBkEXWHrB3WOF9H091KPJqMW29JwVUCEfylih-03wAk4an9n-CPSHWkvgQ2Q5irYXO8RjzZcpL3hQ7apf3Q__',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <Button title="Chat" color="#FF0000" onPress={() => {}} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="arrow-back-outline" size={24} color="#FFF" />
        <Text style={styles.topBarTitle}>Chat</Text>
        <Ionicons name="cart-outline" size={24} color="#FFF" />
      </View>

      {/* List of Products */}
      <Text style={styles.header}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Blue color for the top bar
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', // White text for better contrast
  },
  header: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  shopName: {
    fontSize: 14,
    color: '#888',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#007AFF', // Blue color for the bottom bar
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
});

export default App;

