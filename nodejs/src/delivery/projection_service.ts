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
import { GetProjectionDataRequest, GetProjectionDataResponse } from "./get_projection_data";

export const protobufPackage = "delivery";

export type ProjectionsServiceService = typeof ProjectionsServiceService;
export const ProjectionsServiceService = {
  getData: {
    path: "/delivery.ProjectionsService/GetData",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectionDataRequest) => Buffer.from(GetProjectionDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectionDataRequest.decode(value),
    responseSerialize: (value: GetProjectionDataResponse) =>
      Buffer.from(GetProjectionDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetProjectionDataResponse.decode(value),
  },
} as const;

export interface ProjectionsServiceServer extends UntypedServiceImplementation {
  getData: handleUnaryCall<GetProjectionDataRequest, GetProjectionDataResponse>;
}

export interface ProjectionsServiceClient extends Client {
  getData(
    request: GetProjectionDataRequest,
    callback: (error: ServiceError | null, response: GetProjectionDataResponse) => void,
  ): ClientUnaryCall;
  getData(
    request: GetProjectionDataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetProjectionDataResponse) => void,
  ): ClientUnaryCall;
  getData(
    request: GetProjectionDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetProjectionDataResponse) => void,
  ): ClientUnaryCall;
}

export const ProjectionsServiceClient = makeGenericClientConstructor(
  ProjectionsServiceService,
  "delivery.ProjectionsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ProjectionsServiceClient;
  service: typeof ProjectionsServiceService;
};
