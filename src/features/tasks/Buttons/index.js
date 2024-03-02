import React from "react";
import { Wrapper, StyledButton } from "./styled";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {
    if (tasks.lenght === 0) {
        return null
    }
    
    return (
        <Wrapper>
            <StyledButton
               onClick={toggleHideDone}
            >
               {hideDone ? "Pokaż" : "Ukryj"} ukończone zadania
            </StyledButton>
            <StyledButton
               onClick={setAllDone}
               disabled={tasks.every(({ done }) => done)}
            >
               Ukończ wszystkie
            </StyledButton>
        </Wrapper>
    )
};

export default Buttons;