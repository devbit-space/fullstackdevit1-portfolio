import mongoose, { Document, Schema, Model } from 'mongoose';

interface IIpAddress extends Document {
  ip: string;
  createdAt: Date;
}

const IpAddressSchema: Schema<IIpAddress> = new mongoose.Schema({
  ip: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const IpAddress: Model<IIpAddress> = mongoose.models.IpAddress || mongoose.model<IIpAddress>('IpAddress', IpAddressSchema);

export default IpAddress;
