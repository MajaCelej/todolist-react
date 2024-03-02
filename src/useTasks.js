import { useEffect } from "react";

export const useTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]
    );

};