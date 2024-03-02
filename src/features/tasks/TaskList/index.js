import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Span, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
    const tasks = useSelector(selectTasks);
	const hideDone = useSelector(selectHideDone);

	const dispatch = useDispatch();

	return (
		<List>
			{tasks.map((task) => (
				<Item 
					key={task.id}
					hidden={task.done && hideDone}
				>
					<Span>
						<Button 
							toggleDone
							onClick={() => dispatch(toggleTaskDone(task.id))}
						>
							{task.done ? "✔" : ""}
						</Button>
						<Content done={task.done}>
							{task.content}
						</Content>
						<Button onClick={() => dispatch(removeTask(task.id))}>
							🗑
						</Button>
					</Span>
				</Item>
			))}
		</List>
	);
};

export default TaskList;
