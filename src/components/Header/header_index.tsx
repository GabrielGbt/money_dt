import { HeaderContainer, HeaderContent, NewTransactionButton } from "./header_styles";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from '../../assets/logo.svg';
import { NewTransactionDialog } from "../NewTransactionDialog/dialog_index";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionDialog />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}