import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fafafa;
  transition: scale, 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 3px 12px #e4e4e4;
    transform: scale(1.05);
  }
`;
