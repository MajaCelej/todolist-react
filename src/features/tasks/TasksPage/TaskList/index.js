import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { List, Item, Span, Content, Button } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
	const location = useLocation();
	const query = (new URLSearchParams(location.search)).get(searchQueryParamName);  

    const tasks = useSelector(state => selectTasksByQuery(state, query));
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
							<Link to={`/zadania/${task.id}`}>
								{task.content}
							</Link>
						</Content>
						<Button
							remove
							onClick={() => dispatch(removeTask(task.id))}>
							🗑
						</Button>
					</Span>
				</Item>
			))}
		</List>
	);
};

export default TaskList;
