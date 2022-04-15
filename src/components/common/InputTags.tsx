import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
// @ts-ignore
import Close from '../../assets/Icons/Close.svg'

const TagInput = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 13px 15px 10px 15px;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  border: none;
`
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  .tag {
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    padding: 24px;
    position: relative;
    list-style: none;
    border-radius: 6px;
    margin: 10px 6px 10px 0;
    background: ${({ theme }) => theme.colors.grey};
  }
`

const CloseIcon = styled.span`
  svg {
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.white};
    position: absolute;
    right: -1px;
    top: 0px;
  }
`

interface Tags {
  tags: string[] // type of array with strings
  icon: string
}

const InputTags: React.FC<Tags> = ({ tags, icon }) => {
  const [allTags, setTags] = useState<string[] | null>(tags)

  const removeToggleData = (idx) => {
    let removeItems = allTags.filter((_, index) => index !== idx)
    setTags(removeItems)
  }
  const addTag = (event) => {
    let target = event.target.value
    if (target !== '') {
      setTags([...allTags, target])
      event.target.value = ''
    }
    console.log('Change triggered', event)
  }
  return (
    <TagInput>
      <Ul>
        {allTags.map((item, index) => {
          return (
            <li key={index} className="tag">
              <span className="tag-title"> {item}</span>
              <CloseIcon onClick={() => removeToggleData(index)}>
                <Icon iconName={Close} />
              </CloseIcon>
            </li>
          )
        })}
      </Ul>
      <Input
        onKeyUp={(event) => (event.key === 'Enter' ? addTag(event) : null)}
        type="text"
        placeholder="+Add tag"
      />
    </TagInput>
  )
}

export default InputTags
