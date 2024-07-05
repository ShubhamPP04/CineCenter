# CineCenter

CineCenter is a web application that allows users to explore and discover movies. Users can view trending movies, top-rated movies, upcoming movies, and more. The application is built using React and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- View trending, top-rated, and upcoming movies.
- Search for movies.
- View movie details, including genres, release date, rating, and more.
- Responsive design.

## Installation

1. Clone the repository.

2. Install dependencies:

    npm install
    
3. Start the development server:

    npm start

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Use the navigation bar to explore different sections of the application.
- Use the search bar to find specific movies.

## Project Structure

src/
├── components/
│   ├── Carousel.js
│   ├── CarouselItem.js
│   ├── Footer.js
│   ├── MovieCard.js
│   ├── Navbar.js
│   ├── Pagination.js
│   ├── PersonCard.js
│   └── SelectComponent.js
├── datas/
│   └── index.js
├── layouts/
│   ├── MaxWidthLayout.js
│   ├── NavbarFooterIncluded.js
│   ├── TopSection.js
│   ├── OtherSection.js
│   └── MovieContainer.js
├── pages/
│   ├── home/
│   │   └── index.js
│   ├── trending/
│   │   └── index.js
│   ├── discover/
│   │   └── index.js
│   ├── people/
│   │   └── index.js
│   ├── upcoming/
│   │   └── index.js
│   ├── popular/
│   │   └── index.js
│   ├── top-rated/
│   │   └── index.js
│   ├── show-movie/
│   │   └── index.js
│   ├── single-movie/
│   │   └── index.js
│   ├── genres/
│   │   └── index.js
│   ├── show-genre/
│   │   └── index.js
│   ├── single-genre/
│   │   └── index.js
│   └── search/
│       └── index.js
├── scss/
│   ├── fonts.scss
│   ├── pagination.scss
│   └── index.scss
└── utils/
    ├── extractImg.js
    └── truncateString.js

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
