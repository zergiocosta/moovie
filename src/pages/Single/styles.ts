import styled from 'styled-components/native'

const StyledGenresWrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 24px;
  margin-top: 24px;
`

const StyledLabel = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;
`

const StyledSquaresWrapper = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #333;
`

const StyledSquareItem = styled.View`
  width: 33,33%;
  padding-top: 24px;
  padding-bottom: 24px;
`

const StyledSquareItemBordered = styled.View`
  width: 33,33%;
  padding-top: 24px;
  padding-bottom: 24px;
  border-left-color: #555;
  border-left-width: 1px;
  border-right-color: #555;
  border-right-width: 1px;
`

const StyledSingleInfoWrapper = styled.View`
  padding-horizontal: 24px;
  padding-vertical: 24px;
`

const StyledContentText = styled.Text`
  font-size: 18px;
  margin-bottom: 32px;
`

export { 
  StyledGenresWrapper,
  StyledLabel,
  StyledSquaresWrapper,
  StyledSquareItem,
  StyledSquareItemBordered,
  StyledContentText,
  StyledSingleInfoWrapper
}