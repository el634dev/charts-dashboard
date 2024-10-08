import Head from "next/head";
import Dashboard from './components/Dashboard/dashboard'
import LineChart from "./components/Line/Line";
import BarChart from "./components/Bar/Bar";
import PieChart from "./components/Pie/Pie";
import CandleChart from "./components/Candlestick/Candlestick";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chart Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-100">
        <Dashboard />
        {/* Charts */}
        <LineChart />
        <BarChart />
        <PieChart />
        <CandleChart />
      </main>
    </>
  );
}