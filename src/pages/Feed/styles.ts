import styled from 'styled-components/native'

const StyledTitle = styled.Text`
  padding-top: 24px;
  padding-bottom: 8px;
  padding-horizontal: 24px;
  background-color: #181818;
  color: #eee;
  font-size: 38px;
  font-weight: bold;
`

const StyledSubtitle = styled.Text`
  font-size: 16px;
  padding-bottom: 12px;
  padding-horizontal: 26px;
  background-color: #181818;
  color: #aaa;
`

const StyledFlatList = styled.FlatList`
  padding-bottom: 32px;
  background-color: #181818;
`

export {
  StyledTitle,
  StyledSubtitle,
  StyledFlatList
}
