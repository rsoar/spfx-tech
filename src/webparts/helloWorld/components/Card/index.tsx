import * as React from "react";
import { ITask } from "../../../../interface/ITasks";
import { Container } from "./style";

interface ICardProps extends ITask {}

export const Card = (props: ICardProps) => {
  return (
    <Container>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <span>{props.effort}</span>
      <span>{props.status}</span>
      <span>{props.ownerId}</span>
    </Container>
  );
};
