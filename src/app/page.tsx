'use client'

import { useEffect, useState } from "react";
import * as d3 from "d3";
import StatusPie from "@/components/StatusPie";

interface Application {
  Date: string;
  Company: string;
  Position: string;
  Source: string;
  Status: string;
}

export default function Home() {
  const [applicationData, setApplicationData] = useState<Application[]>([]);

  useEffect(() => {
    d3.csv('/application-data.csv')
      .then((data: d3.DSVRowArray<string>) => {
        const parsedData: Application[] = data.map((row) => ({
          Date: row.Date,
          Company: row.Company,
          Position: row.Position,
          Source: row.Source,
          Status: row.Status,
        }));
        setApplicationData(parsedData);
      });
  }, []);

  const totalApplications = applicationData.length;
  const firstDate = applicationData[0].Date;
  console.log(applicationData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 id="header" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Job Journey
        </h1>
        <div id="footer" className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
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
        <h2>Motivational slogan here</h2>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* add link to form, create form */}
          <h4>Add data button</h4>
        </a>
        <hr />
        <p>{totalApplications} Applications since: {firstDate}</p>
        <div className="dataCard resultsPie">
          <StatusPie applicationData={applicationData} />
        </div>
        <hr />
        <div className="dataCard titlesBar">
          <p>Bar graph of job titles here</p>
        </div>
        <hr />
        <div className="dataCard dateLine">
          <p>Line graph of weekly count over time</p>
        </div>
        <hr />
        <p>See data as a boring chart link</p>
      </div>
    </main>
  );
}
