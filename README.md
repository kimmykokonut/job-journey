# [Job Journey](https://job-journey-neon.vercel.app/)
_by [Kim Robinson](https://github.com/kimmykokonut)_

---

![Homepage screenshot](./src/img/charts.png)
hosted on [Vercel](https://job-journey-neon.vercel.app/)

---

### <u>Jump to section</u>
* <a href="#about-the-project">About the Project</a>
  * <a href="#description">Description</a>
  * <a href="#built-with">Built With</a>
  * <a href="#known-bugs">Known Bugs</a>
* <a href="#getting-started">Getting Started</a>
  * <a href="#prerequisites">Prerequisites</a>
  * <a href="#setup">Setup</a>
* <a href="#stretch-goals">Stretch Goals</a>
* <a href="#contact-and-support">Contact and Support</a>
* <a href="#license">License</a>
---

![Mobile view](./src/img/mobile.png)

---

## About the Project

## Description
Built out of a desire to lighten the frustration with the saturated Junior Developer market and to continue learning new technology. Job journey is an application where a user can enter their job search details into a form and see the results in a pie chart, bar chart or line graph.

![Form fill](./src/img/form.png)

## Built With
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![D3](https://img.shields.io/badge/d3%20js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Known Bugs
* Currently adding new application data only updates the current browser state (refreshing the page resets it to the csv containing 103 entries) because there is no back end set up for this to save and maintain the data.  It's probably for the best so I don't have someone spamming my form.

## Getting Started

## Prerequisites

#### Code Editor
  To view or edit the code, you will need a code editor or text editor. The open-source code editor we used is VisualStudio Code.

  1) Code Editor Download: [VisualStudio Code](https://www.npmjs.com/)
  2) Click the download most applicable to your OS and system.
  3) Wait for download to complete, then install -- Windows will run the setup exe and macOS will drag and drop into applications.

## Setup

### Clone repository

1. Navigate to the [repository](https://github.com/kimmykokonut/job-journey).

2. Click the `Fork` button and you will be taken to a new page where you can give your repository a new name and description. Choose "create fork".

3. Click the `Code` button and copy the url for HTTPS.

4. On your local computer, create a working directory of your choice.

5. In this new directory, via the terminal, type `$ git clone https://github.com/kimmykokonut/job-journey`.

6. Run the command `cd job-journey` to enter into the project directory.

7. View or Edit: On your terminal, type `$ code .` to open the project in VS Code.

8. In VSCode- in project directory of the terminal: type `$ npm install` to compile the application's code and install all needed dependencies.

9. Run local server: 
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

10. You can now see my project on your local server as is. To add your own data, you can use the form input on the client side or import your own CSV using D3.

## CSV

- If you would like to use your own spreadsheet data, title your columns: `Date	Company	Postition	Source	Status`
- I used google sheets: to download the cells as a .csv,
  1. >File>Download>Comma separated values(.csv)
  2. Move .csv file into the public folder of this repository
  3. In page.tsx, line 19, update the file to match your file name and the d3 function will convert the .csv to an object for the charts to use.
  4. Note: Make sure your Status is in double quotes ("Hired") because the code is set to handle this as an array of strings, as a job application may have more than one status (["Interview", "Hired"]) as built in the form to add new applications.

## Stretch Goals
* Add edit form to update/add to application status
* Have option to display data as boring spreadsheet
* I built this with dark mode in mind, it would be nice to add a slider and tweak the light mode a bit.

## Contact and Support

If you have any feedback or concerns, 
[Report Bug](https://github.com/kimmykokonut/job-journey/issues)
[Request Feature](https://github.com/kimmykokonut/job-journey/issues)

## License
GNU General Public License, see license.md for details