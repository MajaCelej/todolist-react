import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
	text-decoration: none;
	color: ${({ theme }) => theme.color.teal};

	&:hover {
		color: ${({ theme }) => theme.color.bondiblue};
	}
`

export const List = styled.ul`
	list-style: none;
	padding: 0px;
`;

export const Item = styled.ul`
	padding: 0px;

	${({ hidden }) =>
		hidden &&
		css`
			display: none;
		`}
`;

export const Content = styled.span`
	display: flex;
	align-content: center;
	flex-wrap: wrap;
	margin-right: 20px;
	margin-left: 20px;

	${({ done }) =>
		done &&
		css`
			text-decoration: line-through;
		`}
`;

export const Span = styled.span`
	display: grid;
	grid-template-columns: auto 1fr auto;
	margin: 30px 0px;
	height: 40px;
	border-bottom: 1px solid ${({ theme }) => theme.color.silver};
`;

export const Button = styled.button`
	border: none;
	width: 30px;
	height: 30px;
	color: ${({ theme }) => theme.color.white};
	transition: 1s;

	${({ toggleDone }) =>
		toggleDone &&
		css`
			background-color: ${({ theme }) => theme.color.green};

			&:hover {
				background-color: ${({ theme }) => theme.color.lightgreen};
			}
		`}

	${({ remove }) =>
		remove &&
		css`
			background-color: ${({ theme }) => theme.color.red};

			&:hover {
				background-color: ${({ theme }) => theme.color.scarlet};
			}
		`}
`;
