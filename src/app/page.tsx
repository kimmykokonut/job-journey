'use client'

import { useEffect, useState } from "react";
import * as d3 from "d3";
import StatusPie from "@/components/StatusPie";
import TitleBar from "@/components/TitleBar";
import AddApplication from "@/components/add-application";
import quotes from "./quotes";
import { split } from "postcss/lib/list";
import LineGraph from "@/components/LineGraph";

interface Application {
  Date: string;
  Company: string;
  Position: string;
  Source: string;
  Status: string[];
}

export default function Home() {
  const [applicationData, setApplicationData] = useState<Application[]>([]);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    d3.csv('/application-data.csv')
      .then((data: d3.DSVRowArray<string>) => {
        const parsedData: Application[] = data.map((row) => {
          const statusArray = row.Status ? [row.Status] : [];
          const splitDate = row.Date.split('/');
          const standardizedDate = `${splitDate[2]}-${splitDate[0].padStart(2, '0')}-${splitDate[1].padStart(2, '0')}`;

          return {
            Date: standardizedDate,
            Company: row.Company,
            Position: row.Position,
            Source: row.Source,
            Status: statusArray,
          };
        });
        setApplicationData(parsedData);
      });
  }, []);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const totalApplications = applicationData.length;
  const firstDate = applicationData.length > 0 ? applicationData[0].Date : '';
  const date = new Date(firstDate);
  let formattedFirstDate = '';
  if (isNaN(date.getTime())) {
    console.error('Invalide date value');
  } else {
    const dateOptions = { dateStyle: 'long' as const };
    formattedFirstDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
  }

  function getRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  }

  const addApplication = (newApplication: Application) => {
    setApplicationData([...applicationData, newApplication]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 lg:pt-3 lg:px-20">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 id="header" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border-none lg:bg-gray-200 lg:p-4 lg:dark:bg-transparent">
          Job Journey
        </h1>
        <div id="footer" className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/kimmykokonut"
            target="_blank"
            rel="noopener noreferrer"
          >
            By kimmykokonut
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h6 className="text-sm italic m-3">{quote} -{author}</h6>
      </div>
      <div>
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="group rounded-lg border border-white m-3 px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            {showForm ? 'Exit form' : 'Enter new job application data'}
          </button>
        </div>
        {showForm && <AddApplication onAddApplication={addApplication}/>}
      </div>

      <p>{totalApplications} Applications since: {formattedFirstDate}</p>
    
        <div className="flexContainer mb-32 text-center lg:mb-0">
        <div className="dataCard resultsPie border rounded">
          <StatusPie applicationData={applicationData} />
        </div>
        <div className="dataCard titlesBar border rounded">
          <TitleBar applicationData={applicationData}/>
        </div>
        <div className="dataCard dateLine border rounded">
          <LineGraph applicationData={applicationData} />
        </div>
        
      </div>
      <p>See data as a boring chart link</p>

    </main>
  );
}
