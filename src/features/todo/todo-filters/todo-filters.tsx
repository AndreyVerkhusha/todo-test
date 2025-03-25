import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { useFilteredTodos } from '@/features/todo/hooks/use-filtered-todos';
import { changeTodoAlignment } from '@/features/todo/todo-slice';
import { Alignments } from '@/shared/types/Filters';
import { useAppDispatch, useAppSelector } from '@/store';

import { FilterOptions, FiltersWrapper, TodoLeft } from './todo-filters.styles';

const filterButtons = [
  <ToggleButton size="small" value="all" key="all">
    All
  </ToggleButton>,
  <ToggleButton size="small" value="active" key="active">
    Active
  </ToggleButton>,
  <ToggleButton size="small" value="completed" key="completed">
    Completed
  </ToggleButton>,
];

export const TodoFilters = () => {
  const { count } = useFilteredTodos();
  const { alignment } = useAppSelector(({ todoReducer }) => todoReducer);

  const dispatch = useAppDispatch();

  const handleChangeAlignment = (newAlignment: Alignments) => {
    dispatch(changeTodoAlignment(newAlignment));
  };

  return (
    <FiltersWrapper>
      <TodoLeft>{count} items</TodoLeft>
      <FilterOptions>
        <ToggleButtonGroup
          value={alignment}
          onChange={(_, newAlignment: Alignments) => handleChangeAlignment(newAlignment)}
          exclusive
        >
          {filterButtons}
        </ToggleButtonGroup>
      </FilterOptions>
    </FiltersWrapper>
  );
};
