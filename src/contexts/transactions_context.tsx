import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string,
}

interface TransactionContextType {
    children: ReactNode;
}

interface TransactionProviderProps {
    transactions: Transaction[],
    loadTransactions: (query?: string) => void,
}

export const TransactionsContext = createContext({} as TransactionProviderProps);


export function TransactionsProvider({ children }: TransactionContextType) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions(query?: string) {
        const url = new URL('http://localhost:3000/transactions');

        
        const response = await fetch(url);
        
        const data = await response.json();
        console.log(data);

        
        setTransactions(data);
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            loadTransactions,
            }}>
                {children}
        </TransactionsContext.Provider>
    )
}