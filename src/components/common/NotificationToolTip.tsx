import React from 'react'
import styled from 'styled-components'

const ToolTipContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.persianGreen};
  padding: 5px 10px;
  width: 43px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 24px;
  right: 24px;
  color: ${({ theme }) => theme.colors.white};
  min-height: 42px;
`

// Required props
interface INotificationToolTipRequiredProps {
  value: number
}
// Optional props
interface INotificationToolTipOptionalProps {
  color?: string
}
// default props
const defaultProps: INotificationToolTipOptionalProps = {
  color: 'black',
}

interface INotificationToolTipProps
  extends INotificationToolTipRequiredProps,
    INotificationToolTipOptionalProps {}

const NotificationToolTip = (props: INotificationToolTipProps) => {
  const { value, color } = props
  return <ToolTipContainer style={{ color }}>{value}</ToolTipContainer>
}

NotificationToolTip.defaultProps = defaultProps
export default NotificationToolTip
