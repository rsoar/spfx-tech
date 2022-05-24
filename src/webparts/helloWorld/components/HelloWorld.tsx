import * as React from "react";
import { useState, useEffect } from "react";
import { Pagination } from "../../../common/components/Pagination";
import { GlobalStyles } from "../../../common/styles/globalStyle";
import { usePagination } from "../../../hooks/usePagination";
import { ITask } from "../../../interface/ITasks";
import { TaskRepository } from "../../../repository/TaskRepository";
import { ListService } from "../../../services/ListService";
import { List } from "../../../utils/Lists";
import { Card } from "./Card";
import { Container, WebpartContainer } from "./styles";

const service: ListService<ITask> = new ListService(
  List.TaskList,
  new TaskRepository()
);

export const HelloWorld = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const page = usePagination(tasks, 12);

  const loadData = async () => {
    setTasks(await service.getItems());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <WebpartContainer>
      <Container>
        {page &&
          page.itemsPage.map((m) => (
            <Card
              id={m.id}
              title={m.title}
              description={m.description}
              ownerId={m.ownerId}
              effort={m.effort}
              status={m.status}
            />
          ))}
      </Container>

      <Pagination _props={page} />
      <GlobalStyles />
    </WebpartContainer>
  );
};
