import React from 'react'
import { View } from 'react-native'

import { ProductionCompanyModel } from '../../interfaces/ProductionCompanyModel'
import ImageWithEffect from '../ImageWithEffect/ImageWithEffect'
import StorageHelper from '../../helpers/StorageHelper'

import { StyledLabel } from './styles'
import { useState } from 'react'
import { ImageConfigurationModel } from '../../interfaces/ImageConfigurationModel'
import { useEffect } from 'react'
import { ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

interface Props {
  company: ProductionCompanyModel
}

const ProductionCompany: React.FC<Props> = (props: Props) => {
  const { company } = props

  const IMAGE_RATIO: number = 1
  const IMAGE_WIDTH: number = 100

  const [baseUrl, setBaseUrl] = useState('')
  const [imageSize, setImageSize] = useState('')

  useEffect(() => {
    StorageHelper.getObject('imageConfig').then(
      (response: ImageConfigurationModel) => {
        if (response.images?.base_url) {
          setBaseUrl(response.images?.base_url)
          setImageSize(response.images?.logo_sizes[2])
        }
      }
    )
  })

  return (
    <>
      {!!company.logo_path &&
        <View style={styles.companyWrapper}>
          <Image
            style={[styles.companyImage, {
              aspectRatio: IMAGE_RATIO,
              width: IMAGE_WIDTH
            }]}
            source={{
              uri: `${baseUrl}/${imageSize}/${company.logo_path}`,
            }}
          />
          <StyledLabel>{company.name}</StyledLabel>
        </View>
      }
    </>
  )
}

export default ProductionCompany

const styles = StyleSheet.create({
  companyWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 75
  },
  companyImage: {
    width: '100%',
    resizeMode: 'contain',
    marginHorizontal: 12
  }
})
