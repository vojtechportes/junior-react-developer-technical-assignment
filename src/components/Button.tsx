import React from 'react'
import styled, { css } from 'styled-components'
import { BLUE_1, BLUE_2, GRAY_2, GRAY_3, WHITE } from 'constants/colors'

const StyledButton = styled.button<{ disabled: boolean }>`
  padding: 1rem 2rem;
  background: ${BLUE_2};
  border: 1px solid ${BLUE_1};
  border-radius: 3px;
  color: ${WHITE};
  font-size: 1rem;
  text-transform: uppercase;

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${GRAY_3};
      border: 1px solid ${GRAY_2};
    `}
`

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
  children: React.ReactNode | React.ReactNodeArray
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
}) => (
  <StyledButton onClick={onClick} disabled={!!disabled}>
    {children}
  </StyledButton>
)
