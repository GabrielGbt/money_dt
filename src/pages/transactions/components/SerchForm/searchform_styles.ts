import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background-color: ${defaultTheme.gray900};
        color: ${defaultTheme.gray300};
        padding: 1rem;

        &::placeholder {
            color: ${defaultTheme.gray500};
        }

    }
    
    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background-color: transparent;
        border: 1px solid ${defaultTheme.green300};
        color: ${defaultTheme.green300};
        font-weight: bold;
        border-radius: 6px;

        &:hover {
            background: ${defaultTheme.green500};
            border: 1px solid ${defaultTheme.green500};
            color: ${defaultTheme.white};

            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }

        &:disabled {
            cursor: not-allowed;
        }
    }
    `