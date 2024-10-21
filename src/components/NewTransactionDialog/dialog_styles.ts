import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const Overlay = styled(Dialog.Overlay)`

    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);

`;

export const ContentDialog = styled(Dialog.Content)`

    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${defaultTheme.gray800};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 6px;
            border: 0;
            background: ${defaultTheme.gray900};
            color: ${defaultTheme.gray300};
            padding: 1rem;

            &::placeholder {
                color: ${defaultTheme.gray500};
            }
        }

        button[type="submit"] {
            height: 58px;
            border: 0;
            background: ${defaultTheme.green500};
            color: ${defaultTheme.white};
            font-weight: bold;
            padding: 0 1.5rem;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:disabled {
                opacity: 0.5%;
                cursor: not-allowed;
            }

            &:hover:not(:disabled) {
                background: ${defaultTheme.green700};
                transition: background-color 0.2s;
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background-color: transparent;
    color: ${defaultTheme.white};
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome';
};

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background: ${defaultTheme.gray700};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${defaultTheme.gray300};

    svg {
        color: ${props => props.variant == 'income' ? defaultTheme.green300 : defaultTheme.red300};
    }

    &[data-state='unchecked']:hover {
        transition: background-color 0.2;
        background: ${defaultTheme.gray600};
    }

    &[data-state='checked'] {
        color: ${defaultTheme.white};
        background: ${props => props.variant == 'income' ? defaultTheme.green500 : defaultTheme.red500};

        svg {
            color: ${defaultTheme.white};
        }
    }

`
