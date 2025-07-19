import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Montserrat, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";

import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fontPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const fontWorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${fontMontserrat.variable} ${fontPlusJakartaSans.variable} ${fontWorkSans.variable}`}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="w-full">
          <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-4 p-24">
            <Component {...pageProps} />
          </main>
        </div>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}
