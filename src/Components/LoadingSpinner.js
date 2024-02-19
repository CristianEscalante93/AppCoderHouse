import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { colors } from '../Global/colors'

const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.color1 }}>
      <ActivityIndicator size={80} color={colors.neon} />
    </View>
  )
}

export default LoadingSpinner