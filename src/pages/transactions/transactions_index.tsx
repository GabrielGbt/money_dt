import { useContext } from "react";
import { Header } from "../../components/Header/header_index";
import { Summary } from "../../components/summary/summary_index";
import { SearchForm } from "./components/SerchForm/searchform_index";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./transactions_styles";
import { TransactionsContext } from "../../contexts/transactions_context";
import { dateFormatter, priceFormatter } from "../../utils/formatter";



export function Transactions() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm/>
            <TransactionsTable>
                <tbody>{
                        transactions.map((value) => {
                            return (
                                <tr  key={value.id}>

                                    <td width="50%">{value.description}</td>
                                    <td>
                                        <PriceHighlight variant={value.type}>
                                            {value.type == 'outcome' && '- '}
                                            {priceFormatter.format(value.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{value.category}</td>
                                    <td>{dateFormatter.format(new Date(value.createdAt))}</td>
                            </tr>
                            )
                        })
                }</tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}