import { FlatList, StyleSheet } from 'react-native'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'





const ItemListCategories = ({ navigation,route}) => {
  const productsFilteredByCategory= useSelector(state=> state.shop.value.productsFilteredByCategory)

  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState()

  useEffect(()=>{
      const productsFiltered = productsFilteredByCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    
  },[keyword, productsFilteredByCategory])

  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductItem item={item} navigation={navigation} route={route} />}
      />
      
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
  width:"100%"
},
  volver:{
    padding:10,
    backgroundColor:colors.color1,
    width:"100%",
    flexDirection:"row",
    justifyContent:"center"
},
textVolver:{
  color: colors.letras

}
})