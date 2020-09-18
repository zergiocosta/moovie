import styled from 'styled-components/native'

const StyledCardContainer = styled.View`
  background-color: #111;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 24px;
  margin-vertical: 12px;
  margin-horizontal: 24px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-right-color: #444;
  border-right-width: 4px;
`

const StyledCardMovieName = styled.Text`
  color: #eee;
  flex: 1;
  flex-wrap: wrap;
  flex-shrink: 1;
  font-size: 18px;
`

const StyledCardInfo = styled.View`
  padding: 24px;
  max-width: 95%;
`

export {
  StyledCardContainer,
  StyledCardMovieName,
  StyledCardInfo
}
