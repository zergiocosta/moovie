import 'react-native'
import React from 'react'
import TextSm from '../../src/components/TextSm/TextSm'

import renderer from 'react-test-renderer'

describe('TextSm component', () => {

  it('renders a Text element correctly', () => {
    const element: any = renderer.create(<TextSm text="Test text" />)

    const elementType = element.toJSON()?.type

    expect(elementType).toBe('Text')
  })

})

