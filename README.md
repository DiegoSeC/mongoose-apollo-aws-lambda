# MAGAS

A very basic template for Mongoose, Apollo, GraphQL, AWS Lambda and Serverless

**Features:**

- Babel
- Serverless
- GraphQL
- Mongoose
- Apollo Server
- Yarn
- And others...

## Instructions

- Create a new ```.env``` file in the root folder and copy the content from `.env.example` and change the values
- Change the values of ```serverless.yml``` with your configuration
- Change the values of ```apollo.config.js``` with your Apollo app name
- Run ```yarn install```

## Commands

- **start** This command run ```serverless offline``` so you can run locally your server
- **deploy** This command will deploy your application to AWS Lambda
- **apollo:publish** this command will deploy your application to Apollo
