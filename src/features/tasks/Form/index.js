import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim())
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}> 
           <Input 
              value={newTaskContent}
              ref={inputRef}
              placeholder="Co jest do zrobienia?"
              type="text"
              autoComplete="off"
              onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>
              Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;