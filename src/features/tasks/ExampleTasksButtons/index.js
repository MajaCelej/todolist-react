import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TasksButton } from "./styled.js";
import { fetchExampleTasks, selectLoading } from "../tasksSlice.js";

const ExampleTasksButton = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);

	return (
		<>
			<TasksButton disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
                {
					loading
						? "Ładowanie"
						: "Pobierz przykładowe zadania"
				}
            </TasksButton>
		</>
	);
};

export default ExampleTasksButton;