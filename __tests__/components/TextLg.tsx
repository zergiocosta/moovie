import 'react-native'
import React from 'react'
import TextLg from '../../src/components/TextLg/TextLg'

import renderer from 'react-test-renderer'

describe('TextLg component', () => {

  it('renders a Text element correctly', () => {
    const element: any = renderer.create(<TextLg text="Test text" />)

    const elementType = element.toJSON()?.type

    expect(elementType).toBe('Text')
  })

})

