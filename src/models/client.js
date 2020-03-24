import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const ClientSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    businessName: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNumber: {
      type: Number,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
    },
    photo: {
      type: String,
      trim: true,
      unique: true,
    },
    location: {
      type: Schema.Types.Map,
      of: String,
    },
  },
  {
    collection: 'clients',
  }
);

ClientSchema.plugin(timestamps);
ClientSchema.index({ createdAt: 1, updatedAt: 1 });

export const Client = mongoose.model('Client', ClientSchema);
export const ClientTC = composeWithMongoose(Client);
