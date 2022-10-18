/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { GetDataRequest, GetDataResponse } from "./get_data";

export const protobufPackage = "delivery";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  getData: {
    path: "/delivery.Service/GetData",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDataRequest) => Buffer.from(GetDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDataRequest.decode(value),
    responseSerialize: (value: GetDataResponse) => Buffer.from(GetDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetDataResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  getData: handleUnaryCall<GetDataRequest, GetDataResponse>;
}

export interface ServiceClient extends Client {
  getData(
    request: GetDataRequest,
    callback: (error: ServiceError | null, response: GetDataResponse) => void,
  ): ClientUnaryCall;
  getData(
    request: GetDataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetDataResponse) => void,
  ): ClientUnaryCall;
  getData(
    request: GetDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetDataResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceClient = makeGenericClientConstructor(ServiceService, "delivery.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient;
  service: typeof ServiceService;
};
