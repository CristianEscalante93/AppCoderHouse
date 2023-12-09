import { View, FlatList, Text, Button, StyleSheet , ScrollView } from "react-native"
import CardProduct from "./CardProduct"


const ListProduct = ({ products, onModal }) => {
    return <ScrollView><View style={styles.listContainer}>
      
        <FlatList
        style={styles.cardProduct}
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CardProduct item={item} onModal={onModal} />}
        />
      
    </View></ScrollView>
    
}
const styles = StyleSheet.create({
    listContainer: {
    backgroundColor:"violet",
    width:"100%",
    flexDirection:"row",
    flexWrap:"wrap"

    }
    
})

export default ListProduct