import React from 'react'
import CommentForm from './Form'
import styled from 'styled-components'

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0px 9px 5px 0px rgba(209, 209, 209, 0.54);
`

const FormMain = () => {
  return (
    <FormContainer>
      <h1>Add comment</h1>
      <CommentForm />
    </FormContainer>
  )
}

export default FormMain
