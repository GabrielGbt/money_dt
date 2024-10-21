import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./summary_styles";
import { defaultTheme } from "../../styles/themes/default";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactions_context";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type == 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
            return acc;
        }, { income: 0, outcome: 0, total: 0 }
    );

    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={defaultTheme.green300}/>
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color={defaultTheme.red300}/>
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={defaultTheme.white}/>
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}