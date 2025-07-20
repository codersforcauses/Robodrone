import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Montserrat, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import { useRouter } from "next/router";

import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";
import ProgressBar from "../components/ui/progress";
import { getPageName } from "../config/pages";

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
  const router = useRouter();

  const currentPageName = getPageName(router.pathname);

  return (
    <div
      className={`${fontMontserrat.variable} ${fontPlusJakartaSans.variable} ${fontWorkSans.variable}`}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Navbar />
        <div className="w-full">
          <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-4 p-24">
            {currentPageName && (
              <div className="mt-4 w-full justify-center">
                <ProgressBar pageName={currentPageName} />
              </div>
            )}
            <Component {...pageProps} />
          </main>
        </div>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}
