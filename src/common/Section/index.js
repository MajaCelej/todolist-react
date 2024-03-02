import React from "react";
import { Wrapper, SectionHeader, SectionBody} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <SectionHeader>
            <h2>{title}</h2>
            {extraHeaderContent}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </Wrapper>
);

export default Section;