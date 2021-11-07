import React, { useState } from 'react'
import { Label } from 'components/atoms'
import without from 'utils/without'
import { ArrowUp } from 'assets'
import {
  LabelPickerContainer,
  LabelList,
  LabelListItem,
  LabelPickerButton,
} from './LabelPicker.styles'

const LabelPicker = ({ options, setValue, value }) => {
  const [optionsForChoose, setOptionsForChoose] = useState(options)
  const [showOptionsForChoose, setShowOptionsForChoose] = useState(false)

  function togglSetOptions() {
    setShowOptionsForChoose(!showOptionsForChoose)
  }

  function addOption(option) {
    return EO => {
      EO.stopPropagation()
      setValue([...value, option])

      if (optionsForChoose.length) {
        setOptionsForChoose(arr => without(arr, option))
      }
    }
  }

  function deleteOption(option) {
    return EO => {
      EO.stopPropagation()
      setValue(without(value, option))

      if (optionsForChoose.length) {
        setOptionsForChoose(arr => [...arr, option])
      }
    }
  }

  return (
    <LabelPickerContainer>
      <div>
        {value.map(label => (
          <Label key={label} haveDelete onDelete={deleteOption(label)}>
            {label}
          </Label>
        ))}
      </div>
      {showOptionsForChoose && (
        <div>
          <LabelList>
            {optionsForChoose.map((option, index) => (
              <LabelListItem onClick={addOption(option)} key={`${option + index}`}>
                {option}
              </LabelListItem>
            ))}
          </LabelList>
        </div>
      )}
      <LabelPickerButton active={showOptionsForChoose} onClick={togglSetOptions}>
        <ArrowUp />
      </LabelPickerButton>
    </LabelPickerContainer>
  )
}

LabelPicker.defaultProps = {
  options: [],
  value: [],
}

export default LabelPicker
