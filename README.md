# PLANETES

<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#license">License</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://planetes-app.web.app/)

Welcome to [Planetes](https://planetes-app.web.app/) (PLA-NE-TES)! This website is for those who love to travel and want to share their experiences and precious moments with the community, or those looking to explore other countries through the eyes of travel enthusiasts .

### Built With

* [Tailwindcss](https://tailwindcss.com/)
* [React.js](https://reactjs.org)
* [Three.js](https://threejs.org/)
* [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
* [Firebase](https://firebase.google.com)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bennaaym/planetes.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. create a `.env.local` file and use your firebase app SDK info
   ```JS
    # firebaseapp

    REACT_APP_FIREBASE_API_KEY= " get it from your firebase app SDK "
    REACT_APP_FIREBASE_AUTH_DOMAIN= " get it from your firebase app SDK "
    REACT_APP_FIREBASE_PROJECT_ID= " get it from your firebase app SDK "
    REACT_APP_FIREBASE_STORAGE_BUCKET=" get it from your firebase app SDK "
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=" get it from your firebase app SDK "
    REACT_APP_FIREBASE_ID=" get it from your firebase app SDK "
    
    #free API that provides information about different countries
    REACT_APP_GLOBE_API='https://restcountries.eu/rest/v2/'

   ```


<!-- LICENSE -->
## License
[![MIT License][license-shield]][license-url]<br>
Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Links

* Project website : [https://planetes-app.web.app/](https://planetes-app.web.app/)
* Project repo: [https://github.com/bennaaym/planetes.git](https://github.com/bennaaym/planetes.git)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/bennaaym/planetes/edit/main/LICENSE
[product-screenshot]: https://i.ibb.co/5jWPmmS/screely-1626861511135.png
