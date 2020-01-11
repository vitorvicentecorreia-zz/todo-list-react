import React, { useState } from 'react';

import { Container, ButtonNewTask, InputNewTask } from './styles';

export default function NewTask(props) {
    const [ inputText, setInputText ] = useState("")
    const newTask = () => {
      if(!inputText) return
      props.addTask(inputText)
      setInputText('')
    }

    return (
      <Container>
          <InputNewTask 
            value={inputText} 
            onChange={(event) => setInputText(event.target.value)} 
            placeholder="Digite uma tarefa ..."
            onKeyDown={(event) => event.key === 'Enter' && newTask() } />
          <ButtonNewTask 
            onClick={() => newTask()}
            onTouchStart={() => newTask()}>+</ButtonNewTask>
      </Container>
    );
}
