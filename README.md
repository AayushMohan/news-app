# News App Readme

This is The News App built using Next JS 13, TypeScript, TailwindCSS, StepZen API, and a little bit of GraphQL. The app displays news articles from various sources and allows users to filter articles by category.

## Preview

![News App Preview](https://cdn.sanity.io/images/p31j23cd/production/8ba754197bf8973a5bebd4220605e4f5b6053830-3104x1788.png)

This is a preview of the News App. As you can see, it has a clean and modern design with a navigation bar at the top and a list of articles below. The articles are displayed in cards, which show the headline, source, and image of the article. The user can filter articles by category using the navigation bar.

## Getting Started

To run this app locally, you will need Node.js and npm installed on your machine. You can then clone this repository and run the following commands:

```
npm install
npm run dev
```

This will start a development server on `http://localhost:3000`. You can access the app by opening this URL in your browser.

## Technologies Used

### Next JS 13

Next.js is a popular React framework that provides built-in server-side rendering and easy setup for client-side routing. The latest version, Next.js 13, introduces new features such as automatic image optimization, incremental static regeneration, and built-in internationalization.

### TypeScript

TypeScript is a superset of JavaScript that adds static typing and other features to help catch errors early in the development process. It also provides better tooling and documentation for large-scale projects.

### TailwindCSS

TailwindCSS is a utility-first CSS framework that provides a set of pre-defined CSS classes to quickly style elements in a consistent and responsive way. It also allows for easy customization and theming.

### StepZen API

StepZen is a platform that allows developers to create GraphQL APIs without having to write any server-side code. The app uses a StepZen API to fetch news articles from various sources.

### GraphQL

GraphQL is a query language for APIs that provides a more efficient and flexible way to retrieve data from a server. It allows clients to specify exactly what data they need, reducing over-fetching and under-fetching of data.

## Folder Structure

- `pages`: Contains the Next.js pages for the app, including the home page and category pages.
- `components`: Contains reusable React components used throughout the app, such as the article card and navigation bar.
- `styles`: Contains the TailwindCSS configuration and global styles for the app.
- `graphql`: Contains the GraphQL queries used to fetch data from the StepZen API.

## Deployment

The app can be deployed to various hosting platforms such as Vercel or Heroku. The deployment process will vary depending on the platform, but typically involves setting up a build script and configuring environment variables.

## Contributing

Contributions to this project are welcome. To contribute, fork this repository and submit a pull request with your changes. Please make sure to follow the existing coding style and include tests for any new features or bug fixes.
