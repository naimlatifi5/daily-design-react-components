import React from 'react'

// components

import InputTags from '../components/common/InputTags'
import FormMain from '../components/common/form-comments/FormMain'

const Components = () => {
  return (
    <>
      <h3>Input tags component</h3>
      <br />
      <InputTags tags={['hej', 'nice']} icon="Close" />
      <br />
      <h2>Form comments</h2>
      <FormMain />
    </>
  )
}
export default Components
