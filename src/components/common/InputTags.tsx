import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
// @ts-ignore
import Close from '../../assets/Icons/Close.svg'

const TagInput = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 18px;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 5px 8px 22px 3px rgba(179, 179, 179, 0.54);
`
const Input = styled.input`
  flex: 1;
  border: none;
  margin-left: 6px;
`
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  .tag {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    list-style: none;
    height: 40px;
  }
  .tag-wrapper {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.grey};
    height: 40px;
    border-radius: 6px;
    padding: 10px 24px;
    margin: 2px 12px 2px 0;
  }
`

const CloseIcon = styled.span`
  svg {
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.greyLight};
    position: absolute;
    right: 7px;
    top: -4px;
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
              <div className="tag-wrapper">
                <span className="tag-title"> {item}</span>
                <CloseIcon onClick={() => removeToggleData(index)}>
                  <Icon iconName={Close} />
                </CloseIcon>
              </div>
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
