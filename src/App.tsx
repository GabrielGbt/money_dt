import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/transactions/transactions_index";
import { TransactionsProvider } from "./contexts/transactions_context";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <TransactionsProvider>  
        <Transactions/>
      </TransactionsProvider>
      
      <GlobalStyle/>
    </ThemeProvider>
  )
}

