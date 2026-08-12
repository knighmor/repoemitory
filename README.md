# repoemitory - a repository for poems

### Project Overview
In an age where technology is advancing and taking over so many areas, especially with the advent of LLMs and Generative models, the more human side of creation can oft be forgotten. One particular sector is that of poetry. While there are many foundations and websites for individual poets and their creations, there is a lack of "hubs" for them to all be collected and easily accessed. This is where **repoemitory** comes in. It aims to be a poetry collection of sorts where users can not only browse through the collection stored and shown, but offer their own submissions as well.

### Practical Overview
This is a primarily JavaScript/CSS application with HTML elements, with both a functional front-end and back-end. The front-end is powered by Vite, and is built on the React.js framework. Additional modules have been installed, such as React Hook Form and YupSchema. (ReactRouter is imported in some files, but not fully implemented. It will be after the "first launch" of the project.) The back-end is powered by Express.js, and acts as a back-end API to store data for the front end. 

## Project Requirements/Goals
| **Requirement** | **Implementation** |
| --------------- | ------------------ |
| Retrieve data from a third-party API | • Implemented DictionaryAPI into the Poem Collection page, particularly to help define words. |
| Create a Node.js web server using Express.js | • Created a back-end server using Express, using it to house repoemAPI. <br> • Established a route between back-end and front-end to POST data. <br> |
| Analyze data that is stored in arrays and display information about it in your app. | • Used an object and arrays to store data about and including poems, able to be navigated through using buttons. |
| Validate user input and either prevent the invalid input or inform the user about it. | • Used Yup schema to help with form validation, preventing users from logging to console or "submitting" without certain requirements being met. Custom error messages were set up for certain cases. |
| Develop your project using a common JavaScript framework such as React. | • Built the entire front-end application using React.js, including several modules such as "React Hook Form" and "React Hook Form Persist". |
| Create an API that implements HTTP request for GET. Data stored on back-end in a JSON file. | • Built a back-end API, or repoemAPI, to help store and POST data to the front end. All data is stored on poems.json in the data folder. |
| Ensure a visually appealing and user-friendly application. | • A simple layout is used and created with Flexbox, keeping things as clear as possible for reading. |
| Ensure a responsive webpage design. | • Also used Flexbox and media queries to help establish two separate layouts for mobile and desktop, using 768px as the breakpoint from mobile to desktop. |

## Table of Contents for the Application itself
| **Page** | **Description** |
| ---------- | --------------- |
| Home | This page is the Landing Page. Calling to the repoem-API side of the application with a FetchAPI request encased in a useEffect, it pulls up the top three poems based on a pre-determined amount of "likes". Each are embed with a link to their source, with the most liked showing its associated embedded video as well.|
| Poem Collection | This page is where people can peruse through the entire collection being fetched from the repoemAPI database. Each page should display the full poem, their title, the author, an embed video (if there is one), and their source link. This is where DictionaryAPI is incorporated as well, as a user can click a word to get a definition associated with the word. This includes any potential synonyms associated with the word, along with a source link for both reference and in the event the definition perhaps isn't the most correct.|
| Submit | This page includes a submission form for poems, with form validation built in using Yup's schema verification. It also includes "auto-saving" to your local storage using "React Hook Form Persist", intentionally leaving out the email field for security reasons. This however should help any entries persist in the event an user has to walk away, or their browser closes on them for any number of reasons. Any successful submission goes to the console, is structured into the poems database format and can be checked using the console tab of Inspect Element.|

## Table of Contents for Actual Project File Structure
| **Folder/File** | **Description** |
| ---------- | --------------- |
| repoem-app | This folder is where the front-end is stored. During the How-to-Download, you will be doing a majority of your set-up in here. |
| repoem-API | This folder is where the back-end is stored. The only install that will be required during this will be Express.js. |
| wireframes | This folder holds the "first draft" for the layout for the web pages. Obviously, much has changed as I explored with this project more. I figured I would keep it however.|
| readme-imgs | This folder is used to hold all of the images taken for the walkthrough/visuals for this README. How nice!|
| README.md | You are here! This includes any information I wish to share about the project, along with instructions on how to get it running! |

## How to Download/Use
1. **Download Git and Node.js**

    A. Git Download
    
        1. Go to the official Git website for downloads: https://git-scm.com/install/.

        2. Click the version applicable to your Operating System. From there, you can click the link provided upmost for downloading.

        3. Open the Git installer and run through the setup pop-ups.
            - *Note: You can simply hit next through most of the process. It is recommended to select "Additional icons" when on the Select Components tab however, along with selecting "Override the default branch name for new repositores" on the name adjustments for repositories tab.*

        4. You can test if your download is successful by either opening up the Command Prompt for your OS. From there, you can type in ``git``. If it returns the list of commands and usage details for it, your download was successful!

    B. Node.js Download

        1. Go to the official Node.js website for downloads: https://nodejs.org/en.

        2. Open the Node.js installer and run through the setup pop-ups.
            - *Note: You can simply hit next through most of the process. Do not mess with any of the options unless you know what you are doing.*

        3. You can test if your download is successful by either opening up the Command Prompt for your OS, or any other Command Consoles you might have (i.e. Git). From there, you can type in ``node --version``. If it returns the current version, your download was successful!

2. **Open up Git and clone the repository.**
    Note: It is recommended to set up a 'Projects' folder beforehand, using the "mkdir" command on your root directory.<br>
    ``git clone https://github.com/knighmor/repoemitory.git`` 

3. **Right click on the Git title bar and select "New Window."**
    Note: Keep both Git windows open, you will need two terminals for the next steps.
    ![Image of two Git command windows.](./readme-imgs/gitcommandwindow.png "Git Command Windows")

4. **Using both windows, navigate to the following folders:**
    A. The first window should be navigated to repoem-app using the command snippet: <br>
    ``cd repoemitory/repoem-app``<br>
    B. The second window should be navigated to repoemAPI using the command snippet: <br>
    ``cd repoemitory/repoemAPI``<br>

5. **Download the following dependencies into their respective folders:**
    A. You will enter in the following into your "repoem-app" window: <br>
    ``npm install react react-dom``<br>
    ``npm install react-hook-form``<br>
    ``npm install react-hook-form-persist``<br>
    B. You will enter in the following into your "repoemAPI" window: <br>
    ``npm install express``<br>

6. **Enter the following into each window to start up the front-end (repoem-app) and back-end (repoemAPI) respectively.**<br>
    ``npm run dev``<br>
    Note: Each window should look like this if installation and run has been successful.<br>
    ![Image of two Git command windows with a successful front-end and back-end launch!](./readme-imgs/gitapplicationlaunch.png "Git Application Launch")

7. **Using your browser of choice, you may navigate to the back-end or front-end using the following:**<br>
    A. repoemitory, the website/front-end, can be accessed through:<br>
    ``http://localhost:5173``<br>
    B. repoemAPI's database can be accessed through:<br>
    ``http://localhost:8080/data/poems``<br>

8. **Happy perusal! I hope you enjoy your look into repoemitory!**

## Goals for the Future
| **Goal** | **Explanation** |
| -------- | --------------- |
| Sending Poem Data to the back-end | Top order is finishing up the work and making full circle the work done with the Submit page. The idea is to find a way to send and append data to poems.json using a POST request. |
| Implementing the use of "React Router" | As it stands, the application is built using a couple of pages. I'd like to use React Browser Router to help condense it into one HTML page and one root container. Not completely familiar with it yet, so it will take some time. |
| Figuring out a more accurate way to define words | A general definition is offered, but, it is hard to pinpoint the "correct" one with how the DictionaryAPI is set up. Hopefully there is an easy enough way to do it without an overtly convoluted method. |

## Credits for Resources Used
• Credit to DictionaryAPI-- it is easy to use and free! https://dictionaryapi.dev <br>
• Credit to rezafir-7 for their free to use Book Icon! https://pixabay.com/illustrations/book-icon-template-stack-of-books-7486253/
