import React, { useEffect, useState } from 'react'
import { Image, StyleSheet } from 'react-native'

import { ProductionCompanyModel } from '../../interfaces/ProductionCompanyModel'
import { ImageConfigurationModel } from '../../interfaces/ImageConfigurationModel'
import StorageHelper from '../../helpers/StorageHelper'

import {
  StyledCompanyWrapper,
  StyledLabel
} from './styles'

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
        <StyledCompanyWrapper>
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
        </StyledCompanyWrapper>
      }
    </>
  )
}

export default ProductionCompany

const styles = StyleSheet.create({
  companyImage: {
    width: '100%',
    resizeMode: 'contain',
    marginHorizontal: 12
  }
})
