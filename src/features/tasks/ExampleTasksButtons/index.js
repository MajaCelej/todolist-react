import React from "react";
import { useDispatch } from "react-redux";
import { TasksButton } from "./styled.js";
import { fetchExampleTasks } from "../tasksSlice.js";

const ExampleTasksButton = () => {
	const dispatch = useDispatch();

	return (
		<>
			<TasksButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </TasksButton>
		</>
	);
};

export default ExampleTasksButton;