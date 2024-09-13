# Charts-dashboard-2
> This project is the frontend of the chart-dashboard, it's built using Nextjs and chart.js along with Axios. It's also been linted using ESLint and has Tailwind CSS installed in case I want to add styling.

## Table of Contents
- [Project Introduction](#project-introduction)
- [Key Functionalities](#key-functionalities)
- [Setup Instructions](#setup-instructions)
- [Libraries and Tools](#libraries-and-tools)
- [Approach and Thought Process](#approach-and-thought-process)
- [Development Server](#development-server)

## Project-Introduction
- charts-dashboard-2 was designed to show different chart data using chart.js and Nextjs. The charts that are displayed are a bar, pie, line and a radar chart.

## Key Functionalities
- The key functionalities are:
   - Different charts that are rendered by chart.js
   - JSON Data that shown through charts
   - Description/information of chart data
   - Shows whether a endpoint is GET/POST/PUT/PATCH/DELETE/UPDATE request
   - Shows HTTP status along with what is allow including the content type

## Setup Instructions
1. To get started install the node modules, use `npm install` inside of the directory where charts-dashboard-2 is located
2. Run `npm install chart.js react-chartjs-2 axios`, check to see if it was installed by runnning `npm list` to see all the dependecies(may be alot)
3. Run `npm run dev` to see the project live, when you click on the local host link you will see different charts displaying different data then each other

## Libraries and Tools
- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Axios](https://ziadoua.github.io/m3-Markdown-Badges/badges/Axios/axios1.svg)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Approach and Thought Process
- My approach for this project was to use the libraries that was mentioned on the assigment page, which was Nextjs and Chart.js. I start research to find any documentation or a guide that could help point me in the right direction. My thought process was to start by creating the data for the charts in the data directory then create a components directory so I can better organize the charts if I wanted to add something else later. After I started working on one chart or two at time so if an error or bug occured, I better pinpoint the error or bug. After I completed all the components, I start to research and use my prior knowledge to help me get everything showing on the page.js. I could not find any information on how to create a candlestick chart so I improvised and used a radar chart instead.

## Development Server
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.