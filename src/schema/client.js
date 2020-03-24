import { ClientTC } from '../models/client';

const ClientQuery = {
  clientById: ClientTC.getResolver('findById'),
  clientByIds: ClientTC.getResolver('findByIds'),
  clientOne: ClientTC.getResolver('findOne'),
  clientMany: ClientTC.getResolver('findMany'),
  clientCount: ClientTC.getResolver('count'),
  clientConnection: ClientTC.getResolver('connection'),
  clientPagination: ClientTC.getResolver('pagination'),
};

const ClientMutation = {
  clientCreateOne: ClientTC.getResolver('createOne'),
  clientCreateMany: ClientTC.getResolver('createMany'),
  clientUpdateById: ClientTC.getResolver('updateById'),
  clientUpdateOne: ClientTC.getResolver('updateOne'),
  clientUpdateMany: ClientTC.getResolver('updateMany'),
  clientRemoveById: ClientTC.getResolver('removeById'),
  clientRemoveOne: ClientTC.getResolver('removeOne'),
  clientRemoveMany: ClientTC.getResolver('removeMany'),
};

export { ClientQuery, ClientMutation };
