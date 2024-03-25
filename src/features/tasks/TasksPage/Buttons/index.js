import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../../tasksSlice";
import Button from "../Button";

const Buttons = () => {
	const areTasksEmpty = useSelector(selectAreTasksEmpty);
	const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
	const hideDone = useSelector(selectHideDone);

	const dispatch = useDispatch();

	return (
		<Wrapper>
			{!areTasksEmpty && (
				<>
					<Button onClick={() => dispatch(toggleHideDone())}>
						{hideDone ? "Pokaż" : "Ukryj"} ukończone zadania
					</Button>
					<Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
						Ukończ wszystkie
					</Button>
				</>
			)}
		</Wrapper>
	);
};

export default Buttons;
