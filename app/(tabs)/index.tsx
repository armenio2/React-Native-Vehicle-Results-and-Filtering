import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, TextInput, Switch, StyleSheet } from 'react-native';
import vehicleData from '../../vehicles.json';
import PlaceholderIcon from '../../assets/images/placeholder.svg';

type Vehicle = {
  id: number;
  Make: string;
  Model: string;
  "Engine Size": string;
  "Fuel Type": string;
  Year: number;
  Mileage: number;
  "Auction Date and Time": string;
  "Starting Bid": number;
  favourite: boolean;
  imageUrl?: string;
};  

const App: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehicleData);
  const [filterMake, setFilterMake] = useState<string>('');
  const [filterModel, setFilterModel] = useState<string>('');
  const [filterBidMin, setFilterBidMin] = useState<string>('');
  const [filterBidMax, setFilterBidMax] = useState<string>('');
  const [showFavourites, setShowFavourites] = useState<boolean>(false);

  const toggleFavourite = (id: number) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, favourite: !vehicle.favourite } : vehicle
      )
    );
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      (filterMake === '' || vehicle.Make.toLowerCase().includes(filterMake.toLowerCase())) &&
      (filterModel === '' || vehicle.Model.toLowerCase().includes(filterModel.toLowerCase())) &&
      (filterBidMin === '' || vehicle['Starting Bid'] >= parseFloat(filterBidMin)) &&
      (filterBidMax === '' || vehicle['Starting Bid'] <= parseFloat(filterBidMax)) &&
      (!showFavourites || vehicle.favourite)
    );
  });

  return (
    <View style={{ padding: 20, marginTop: 35 }}>
      <TextInput placeholder="Make" value={filterMake} onChangeText={setFilterMake} style={styles.input} />
      <TextInput placeholder="Model" value={filterModel} onChangeText={setFilterModel} style={styles.input} />
      <TextInput placeholder="Min Bid" keyboardType="numeric" value={filterBidMin} onChangeText={setFilterBidMin} style={styles.input} />
      <TextInput placeholder="Max Bid" keyboardType="numeric" value={filterBidMax} onChangeText={setFilterBidMax} style={styles.input} />
      <View style={styles.switchContainer}>
        <Text>Show Favourites</Text>
        <Switch value={showFavourites} onValueChange={setShowFavourites} />
      </View>
      <FlatList
        data={filteredVehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleFavourite(item.id)} style={styles.item}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            ) : (
              <PlaceholderIcon width={50} height={50} />
            )}
            <View>
              <Text>{item.Make} {item.Model} ({item.Year})</Text>
              <Text>Starting Bid: ${item['Starting Bid']}</Text>
              <Text>Fuel: {item['Fuel Type']}</Text>
              <Text>{item.favourite ? '❤️' : '🤍'}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { padding: 10, borderWidth: 1, marginBottom: 10 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1 },
  image: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  switchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }
});

export default App;
