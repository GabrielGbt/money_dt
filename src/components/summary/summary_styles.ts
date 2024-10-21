import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    margin-top: -5rem;
`

interface SummaryCardProps {
    variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${defaultTheme.gray700};
    border-radius: 6px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${defaultTheme.gray300};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant == 'green' && css`
        background-color: ${defaultTheme.green700};
    `}
`