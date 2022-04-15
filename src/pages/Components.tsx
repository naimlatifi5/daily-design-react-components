import React from 'react'

// components

import InputTags from '../components/common/InputTags'

const Components = () => {
  return (
    <>
      <h3>Input tags component</h3>
      <br />
      <InputTags tags={['hej', 'nice']} icon="Close" />
    </>
  )
}
export default Components
