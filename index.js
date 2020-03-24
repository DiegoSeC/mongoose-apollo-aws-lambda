import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-lambda';
import mongoose from 'mongoose';
import './src/utils/db';
import schema from './src/schema';

dotenv.config();

const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
  path: '/',
});

exports.graphqlHandler = server.createHandler({
  onHealthCheck: () =>
    // eslint-disable-next-line no-undef
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      } else {
        reject();
      }
    }),
});
