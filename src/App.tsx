import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BansTable } from "@/components/bans-table";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BansTable></BansTable>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
