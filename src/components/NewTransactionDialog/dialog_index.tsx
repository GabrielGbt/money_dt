import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, ContentDialog, Overlay, TransactionType, TransactionTypeButton } from "./dialog_styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";

import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.string(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;


export function NewTransactionDialog() {
    const { control, register, handleSubmit, formState: {isSubmitting} } = useForm<newTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income',
        }
    });

    function handleCreateNewTransaction(data: newTransactionFormInputs) {
        console.log(data);
        console.log('teste');
    }

    return (
         <Dialog.Portal>
            <Overlay />

            <ContentDialog>
                <Dialog.Description/>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text" 
                        placeholder="Descrição" 
                        {...register('description')}
                    />

                    <input 
                        type="text"
                        placeholder="Preço"
                        {...register('price')}
                    />

                    <input 
                        type="text" 
                        placeholder="Categoria"
                        {...register('category')}
                    />

                    <Controller 
                        control={control}
                        name="type"
                        render={({field}) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant="outcome" value="outcome" >
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            );
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
                
            </ContentDialog>
        </Dialog.Portal> 
    )
}