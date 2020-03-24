import { SchemaComposer } from 'graphql-compose';
import { ClientQuery, ClientMutation } from './client';
import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...ClientQuery,
});

schemaComposer.Mutation.addFields({
  ...ClientMutation,
});

export default schemaComposer.buildSchema();
