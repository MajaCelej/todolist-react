import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Main from "../../../common/Main";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
	const { id } = useParams();
	const task = useSelector((state) => getTaskById(state, id));

	return (
		<Main>
			<Header title="Szczegóły zadania" />
			<Section
				title={task ? task.content : "Nie znaleźliśmy takiego zadania"}
				body={
					!!task && (
						<>
							<strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
						</>
					)
				}
			/>
		</Main>
	);
}

export default TaskPage;
