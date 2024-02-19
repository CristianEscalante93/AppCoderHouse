import { FlatList, StyleSheet } from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../App/service/shopServices'
import LoadingSpinner from './LoadingSpinner'
import React, { useEffect , useState } from 'react'



const Categories = ({navigation,route}) => {

  const [loading , setLoading] = useState(true)

  const {data:categories , isLoading} = useGetCategoriesQuery()

  useEffect(()=>{
    if(categories) setLoading(false)
  },[categories,isLoading])
  console.log(categories)
  if(loading) return  <LoadingSpinner/>


  return (
    <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem  category={item} navigation={navigation} route={route} />}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        width:"100%",
        
    }
})