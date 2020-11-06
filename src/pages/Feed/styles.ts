import styled from 'styled-components/native'

const StyledTitle = styled.Text`
  padding-top: 24px;
  padding-bottom: 8px;
  padding-horizontal: 24px;
  background-color: #181818;
  color: #eee;
  font-size: 32px;
  font-weight: bold;
`

const StyledFlatList = styled.FlatList`
  padding-bottom: 32px;
  background-color: #181818;
`

const StyledLoadMore = styled.View`
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: 24px;
  margin-right: 24px;
`

export {
  StyledTitle,
  StyledFlatList,
  StyledLoadMore
}
