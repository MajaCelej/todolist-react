import styled from "styled-components";

export default styled.button`
	background: transparent;
	border: none;
	color: ${({ theme }) => theme.color.teal};
	transition: 1s;

	@media (max-width: 992px) {
		display: flex;
		flex-basis: 100%;
		justify-content: center;
		margin: 5px;
	}

	&:hover {
		color: ${({ theme }) => theme.color.bondiblue};
	}

	&:disabled {
		color: ${({ theme }) => theme.color.silver};
	}
`;
