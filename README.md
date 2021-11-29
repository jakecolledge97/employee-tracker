<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jakecolledge97/employee-tracker">
    <img src="https://cdn-icons-png.flaticon.com/512/2405/2405283.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Employee Tracker</h3>

  <p align="center">
    A Company Department, Roles, and Employees Tracker
    <br />
    <a href="https://github.com/jakecolledge97/employee-tracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://drive.google.com/file/d/1mjq0zlUURa-Jm-u6EhB4Lw209xK0mpTc/view">View Demo</a>
    ·
    <a href="https://github.com/jakecolledge97/employee-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/jakecolledge97/employee-tracker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Employee Tracker

This project is a command line editor that works with a live database on your local machine using MYSQL. It creates a company database, which contains an Employee list, a Employee Roles list, and a Department list, that all work together to create an easy to read database. This was an assignment given to me by Adelaide Uni's Coding Bootcamp, it taught me how to use MYSQL and how to work with databases through a command line input.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Inquirer - npm](https://www.npmjs.com/package/inquirer)
* [Express - npm](https://www.npmjs.com/package/express)
* [MySQL](https://www.mysql.com/downloads/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To Run this project locally, you will need to create a MySQL account and install it to your machine.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jakecolledge97/employee-tracker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create Database in machine 
   ```sh
   mysql -u <your machine name> -p 
   <you will be prompted you password>

   source ./db/schema.sql;

   source ./db/seeds.sql;
   ```
4. You will need to update the .env file by removing .EXAMPLE from the file name and adding your login credentials
   ```sh
    DB_NAME=company_db
    DB_USER=<YOUR MySQL USERNAME>
    DB_PASSWORD=<YOUR MySQL PASSWORD>
   ``` 
5. Run the server
   ```sh
   node server.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - jakecolledgework@gmail.com

Project Link: [https://github.com/jakecolledge97/employee-tracker](https://github.com/jakecolledge97/employee-tracker)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jakecolledge97/employee-tracker.svg?style=for-the-badge
[contributors-url]: https://github.com/jakecolledge97/employee-tracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jakecolledge97/employee-tracker.svg?style=for-the-badge
[forks-url]: https://github.com/jakecolledge97/employee-tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/jakecolledge97/employee-tracker.svg?style=for-the-badge
[stars-url]: https://github.com/jakecolledge97/employee-tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/jakecolledge97/employee-tracker.svg?style=for-the-badge
[issues-url]: https://github.com/jakecolledge97/employee-tracker/issues
[license-shield]: https://img.shields.io/github/license/jakecolledge97/employee-tracker.svg?style=for-the-badge
[license-url]: https://github.com/jakecolledge97/employee-tracker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jake-colledge-462986223
[product-screenshot]: images/screenshot.png
