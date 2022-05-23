import * as React from "react";
import { Icon } from "office-ui-fabric-react";
import { IPaginationHook } from "../../../hooks/usePagination";
import { Button, Container } from "./style";
import { Omit } from "lodash";

type ExcludeKeysHook = "itemsPage" | "totalPages";

interface IPaginationProps {
  _props: Omit<IPaginationHook<any>, ExcludeKeysHook>;
}

export const Pagination = ({ _props }: IPaginationProps) => {
  return (
    <Container>
      <Button onClick={_props.goToFirstPage}>
        <Icon iconName="DoubleChevronLeft8" />
      </Button>

      <Button onClick={_props.goToPreviousPage}>
        <Icon iconName="ChevronLeftSmall" />
      </Button>

      {_props.hasPreviousPage && (
        <Button onClick={_props.goToPreviousPage}>
          {_props.currentPage - 1}
        </Button>
      )}

      <Button actived>{_props.currentPage}</Button>

      {_props.hasNextPage && (
        <Button onClick={_props.goToNextPage}>{_props.currentPage + 1}</Button>
      )}

      <Button onClick={_props.goToNextPage}>
        <Icon iconName="ChevronRightSmall" />
      </Button>

      <Button onClick={_props.goToLastPage}>
        <Icon iconName="DoubleChevronRight8" />
      </Button>
    </Container>
  );
};
