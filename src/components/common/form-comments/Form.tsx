import React from 'react'
import { Input, Form, TextArea } from 'semantic-ui-react'
const CommentForm = () => {
  return (
    <Form>
      <label htmlFor="Name">Name:</label>
      <Input type="text" placeholder="Name" id="Name" />
      <label htmlFor="Email">Email:</label>
      <Input type="email" placeholder="Email" id="Email" />
      <label htmlFor="Comment">Comment:</label>
      <TextArea placeholder="Tell us more" />
    </Form>
  )
}

export default CommentForm
