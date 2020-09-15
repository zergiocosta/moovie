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
  background-color: #111;
`

const StyledSquareItem = styled.View`
  width: 33%;
  padding-vertical: 24px;
  align-items: center;
`

const StyledSquareItemBordered = styled(StyledSquareItem)`
  width: 34%;
  border-left-color: #555;
  border-left-width: 1px;
  border-right-color: #555;
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

const StyledContentText = styled.Text`
  font-size: 18px;
  margin-bottom: 32px;
`

const StyledContentTagline = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
`

export {
  StyledGenresWrapper,
  StyledLabel,
  StyledSquaresWrapper,
  StyledSquareItem,
  StyledSquareItemBordered,
  StyledSquareText,
  StyledContentText,
  StyledContentTagline,
  StyledSingleInfoWrapper
}
