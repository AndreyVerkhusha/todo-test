import React from 'react';

import { Todo } from '@/features/todo/todo';
import { TodoInputManager } from '@/features/todo/todo-input-manager';
import { SectionTitle } from '@/shared/ui/section-title';

import { MainLayout } from './app.styles';

export const App = () => {
  return (
    <MainLayout>
      <SectionTitle title="Todos List" />
      <Todo />
      <TodoInputManager />
    </MainLayout>
  );
};
