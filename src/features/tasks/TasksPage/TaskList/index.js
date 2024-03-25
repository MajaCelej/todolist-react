import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledNavLink, List, Item, Span, Content, Button } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters"

const TaskList = () => {
	const query = useQueryParameter(searchQueryParamName);  

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
							<StyledNavLink to={toTask({ id: task.id })}>
								{task.content}
							</StyledNavLink>
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
