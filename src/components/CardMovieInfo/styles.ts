import styled from 'styled-components/native'

const StyledContainer = styled.View`
  margin-top: 8px
  color: #eee;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`

const StyledContent = styled.Text`
  margin-top: -16px;
  margin-left: 24px;
  color: #eee;
  flex: 1;
  flexWrap: wrap;
`

export {
  StyledContainer,
  StyledContent
}
