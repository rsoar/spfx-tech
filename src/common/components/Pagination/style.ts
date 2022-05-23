import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    margin-right: 8px;
  }

  &:last-child {
    margin-right: none;
  }
`;

interface IButtonProps {
  actived?: boolean;
}

export const Button = styled.button<IButtonProps>`
  background-color: #fafafa;
  color: #333;
  border: none;
  padding: 8px;

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.actived &&
    css`
      background-color: #333;
      color: #fafafa;
    `}
`;
