import styled from 'styled-components/native'

const StyledGenresWrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 24px;
  margin-top: 24px;
`

const StyledSquaresWrapper = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #7e0f13;
`

const StyledSquareItem = styled.View`
  width: 33%;
  padding-vertical: 24px;
  align-items: center;
`

const StyledSquareItemBordered = styled(StyledSquareItem)`
  width: 34%;
  border-left-color: #901216;
  border-left-width: 1px;
  border-right-color: #901216;
  border-right-width: 1px;
`

const StyledSquareText = styled.Text`
  color: #eee;
  font-size: 16px;
`

const StyledSingleInfoWrapper = styled.View`
  padding-horizontal: 24px;
  padding-vertical: 24px;
`

export {
  StyledGenresWrapper,
  StyledSquaresWrapper,
  StyledSquareItem,
  StyledSquareItemBordered,
  StyledSquareText,
  StyledSingleInfoWrapper
}
