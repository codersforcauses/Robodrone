import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Montserrat, Work_Sans } from "next/font/google";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fontWorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontMontserrat.variable} ${fontWorkSans.variable}`}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
