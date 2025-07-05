import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Montserrat, Work_Sans } from "next/font/google";

// import { cn } from "@/lib/utils";
import Navbar from "../components/ui/navbar";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fontWorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontMontserrat.variable} ${fontWorkSans.variable}`}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center gap-4 p-24">
            <Component {...pageProps} />
          </main>
        </div>
      </QueryClientProvider>
    </div>
  );
}
