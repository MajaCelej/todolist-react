import React from 'react';
import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header'; 
import Main from '../../common/Main';
import ExampleTasksButton from './ExampleTasksButtons';

function Tasks() {
  return (
    <Main>
      <Header 
      title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton/>}
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Main>
  );
}

export default Tasks;