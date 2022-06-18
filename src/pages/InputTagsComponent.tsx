import React from 'react'
import InputTags from '../components/common/InputTags'
const InputTagsComponent = () => {
  return (
    <>
      <h3>Input tags component</h3>
      <br />
      <InputTags tags={['hej', 'nice']} icon="Close" />
    </>
  )
}
export default InputTagsComponent
