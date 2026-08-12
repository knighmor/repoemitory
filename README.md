# repoemitory

### Project Overview
In an age where technology is advancing and taking over so many areas, especially with the advent of LLMs and Generative models, the more human side of creation can oft be forgotten. One particular sector is that of poetry. While there are many foundations and websites for individual poets and their creations, there is a lack of "hubs" for them to all be collected and easily accessed. This is where **repoemitory** comes in. It aims to be a poetry collection of sorts where users can not only browse through the collection stored and shown, but offer their own submissions as well.

### Practical Overview
This is a primarily JavaScript/CSS application with HTML elements, with both a functional front-end and back-end. The front-end is powered by Vite, and is built on the React.js framework. Additional modules have been installed, such as React Hook Form and YupSchema. (ReactRouter is imported in some files, but not fully implemented. It will be after the "first launch" of the project.) The back-end is powered by Express.js, and acts as a back-end API to store data for the front end. 

## Table of Contents for the Application itself
| **Page** | **Description** |
| ---------- | --------------- |
| Home | This page is the Landing Page. Calling to the repoem-API side of the application with a FetchAPI request encased in a useEffect, it pulls up the top three poems based on a pre-determined amount of "likes". Each are embed with a link to their source, with the most liked showing its associated embedded video as well.|
| Poem Collection | This page is where people can peruse through the entire collection being fetched from the repoemAPI database. Each page should display the full poem, their title, the author, an embed video (if there is one), and their source link. This is where DictionaryAPI is incorporated as well, as a user can click a word to get a definition associated with the word. This includes any potential synonyms associated with the word, along with a source link for both reference and in the event the definition perhaps isn't the most correct.|
| Submit | This page includes a submission form for poems, with form validation built in using Yup's schema verification. It also includes "auto-saving" to your local storage using "React Hook Form Persist", intentionally leaving out the email field for security reasons. This however should help any entries persist in the event an user has to walk away, or their browser closes on them for any number of reasons.|

## Table of Contents for Actual Project File Structure
| **Folder** | **Description** |
| ---------- | --------------- |
| repoem-app | This folder is where the front-end is stored. During the How-to-Download, you will be doing a majority of your set-up in here. |
| repoem-API | This folder is where the back-end is stored. The only install that will be required during this will be Express.js. |

