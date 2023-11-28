# Basics of GraphQL
## What is GraphQL?

GraphQL is an open-source query language for API, and a server-side runtime for executing those queries by specifying the shape of the response data. It was developed by Facebook in 2012 and released as an open-source project in 2015. In 2018 the GraphQL Schema Definition Language (SDL) became part of the specification. GraphQL provides a more efficient, powerful, and flexible alternative to the traditional REST API architecture for fetching and manipulating data from a server.

## Key features
- Graph**QL** is a **Q**uery **L**anguage,
- Alternative to REST API,
- Still uses HTTP requests under the hood, 
- We specify what resource and what properies we want to get back, 
- Fetch nested related data within a single query

## Differences between REST API and GraphQL
|        REST API         |      GraphQL      |
|:-----------------------:|:-----------------:|
| Uses multiple endpoints | Uses one endpoint |

## Problems that graphql solves
- Over fetching - getting back more data than we need (unnecessary load and sending excess information),
- Under fetching - getting back less data than we need (this requires making e.g. several requests).


## Prerequisites
Before you begin, make sure you have basic knowledge about the following topics:
- NodeJS
- TypeScript

## Apollo Server
Apollo Server is an open-source GraphQL server implementation that allows you to build and run GraphQL APIs. You can run Apollo Server in various programming languages, including JavaScript (Node.js), Python, and more.

## Create a new project
First of all, we need to create a folder for our server.
```shell
mkdir GraphQLArticle
cd GraphQLArticle
```
Then we need to init new project with npm and set type property to allow us to using ES6 modules.
```shell
npm init --yes && npm pkg set type="module"
```

## Install dependencies
Applications that run Apollo Server require two dependencies:
- `graphql` - the library that implements the core GraphQL parsing and execution algorithms,
- `@apollo/server` - the main library for Apollo Server itself.

To install this dependencies we need to execute this command:
```shell
npm install @apollo/server graphql
```

As we can see in `package.json` file, dependencies have been installed and `type` property is set to `module`.
```json
{
  "type": "module",
  "dependencies": {
    "@apollo/server": "^4.9.5",
    "graphql": "^16.8.1"
  }
}
```

Now we need to define if we want to use JavaSript or TypeScript. We will use **TypeScript**.

First let's create a `src` directory with an empty `index.ts` file to contain all of the code for our example application:
```shell
mkdir src
touch src/index.ts
```

Run the following command to install the `typescript` and `@types/node` packages into your project's dev dependencies:
```shell
npm install --save-dev typescript @types/node
```

Next, create a `tsconfig.json` file in your project:
```shell
touch tsconfig.json
```

The `tsconfig.json` file enables you to configure how TypeScript will compile your code. Add the following configuration to your `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2022"],
    "target": "es2022",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  }
}
```

Finally, replace the default scripts entry in your `package.json` file with the following:
```json
{
  "scripts": {
    "compile": "tsc",
    "start": "npm run compile && node ./dist/index.js"
  }
}
```

The above start script tells TypeScript to compile your code into JavaScript before using node to run that compiled code.

Final `package.json` file should look like this:
```json
{
  "name": "graphqlarticle",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "compile": "tsc",
    "start": "npm run compile && node ./dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "@apollo/server": "^4.9.5",
    "graphql": "^16.8.1"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "typescript": "^5.3.2"
  }
}

```

You can now run `npm start`, which should successfully compile and run your empty `index.ts` file.

## Setting up Apollo Server

First, we need to make some imports to be able to create Apollo Server and define the port.
```typescript
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const PORT = 4000;
```

After that, we have to set up our server.
```typescript
const server = new ApolloServer({
    //typeDefs
    //resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: PORT
    }
});

console.log(`Server is listening on port ${PORT}`);
```

First we're creating server itself and then we're starting it on our local machine on the particular port (in our case 4000).

And that's a basic setup of the server, later we'll create `typeDefs` and `resolvers` functions to be able to make a requests to our server.

All the start code base is available on branch `initial` under this link: 