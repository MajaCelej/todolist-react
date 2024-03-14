import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputRef = useRef(null);

	const dispatch = useDispatch();

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (newTaskContent.trim() === "") {
			return;
		}

		dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

		setNewTaskContent("");
		inputRef.current.focus();
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			<Input value={newTaskContent} ref={inputRef} placeholder="Co jest do zrobienia?" type="text" autoComplete="off" onChange={(event) => setNewTaskContent(event.target.value)} />
			<Button>Dodaj zadanie</Button>
		</StyledForm>
	);
};

export default Form;
