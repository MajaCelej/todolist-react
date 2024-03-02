import { useState, useEffect } from "react";

export const useTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
  
    const [tasks, setTasks] = useState(
      savedTasks ? JSON.parse(savedTasks) :
      [
       { id: 1, content: "przejść na Reacta", done: false },
       { id: 2, content: "zjeść obiad", done: true },
      ]
    );
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]
    );

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
      };
    
      const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
          if(task.id === id) {
            return{...task, done: !task.done}
          }
    
          return task;
        }))
      };
    
      const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
         ...task,
         done: true,
        })))
      };
    
      const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
         ...tasks,
         {
          content: newTaskContent,
          done: false,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
         }
        ])
      };

      return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
      };
};