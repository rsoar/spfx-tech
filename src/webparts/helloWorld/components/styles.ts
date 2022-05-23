import styled from "styled-components";

export const WebpartContainer = styled.div`
  background-color: #e4e4e4;
  position: relative;
  padding: 15px 0;
`;

export const Container = styled.div`
  width: 92%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 410px));
  gap: 30px;
  justify-content: center;
`;
