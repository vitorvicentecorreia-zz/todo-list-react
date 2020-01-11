import React from 'react';

import { Container, ButtonNewTask, InputNewTask } from './styles';

export default function NewTask() {
  return (
    <Container>
        <InputNewTask placeholder="Digite uma tarefa ..." />
        <ButtonNewTask>+</ButtonNewTask>
    </Container>
  );
}
