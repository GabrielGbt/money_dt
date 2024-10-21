import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./searchform_styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/transactions_context";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;


export function SearchForm() {
    const { loadTransactions } = useContext(TransactionsContext);

    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransaction(data: SearchFormInputs) {
        console.log(data)
        await loadTransactions(data.query);
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
            <input 
                type="text" 
                placeholder="Busque uma transação"
                {...register('query')}
            />


            <button type="submit" disabled={isSubmitting} > <MagnifyingGlass size={20}/> Buscar</button>
        </SearchFormContainer>
    )
}