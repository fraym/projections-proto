/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { DeleteProjectionDataRequest, DeleteProjectionDataResponse } from "./delete_projection_data";
import {
  GetProjectionDataListRequest,
  GetProjectionDataListResponse,
  GetProjectionDataRequest,
  GetProjectionDataResponse,
} from "./get_projection_data";
import { UpsertProjectionDataRequest, UpsertProjectionDataResponse } from "./upsert_projection_data";

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
  getDataList: {
    path: "/delivery.ProjectionsService/GetDataList",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectionDataListRequest) =>
      Buffer.from(GetProjectionDataListRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectionDataListRequest.decode(value),
    responseSerialize: (value: GetProjectionDataListResponse) =>
      Buffer.from(GetProjectionDataListResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetProjectionDataListResponse.decode(value),
  },
  upsertData: {
    path: "/delivery.ProjectionsService/UpsertData",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpsertProjectionDataRequest) =>
      Buffer.from(UpsertProjectionDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpsertProjectionDataRequest.decode(value),
    responseSerialize: (value: UpsertProjectionDataResponse) =>
      Buffer.from(UpsertProjectionDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpsertProjectionDataResponse.decode(value),
  },
  deleteData: {
    path: "/delivery.ProjectionsService/DeleteData",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectionDataRequest) =>
      Buffer.from(DeleteProjectionDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteProjectionDataRequest.decode(value),
    responseSerialize: (value: DeleteProjectionDataResponse) =>
      Buffer.from(DeleteProjectionDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteProjectionDataResponse.decode(value),
  },
} as const;

export interface ProjectionsServiceServer extends UntypedServiceImplementation {
  getData: handleUnaryCall<GetProjectionDataRequest, GetProjectionDataResponse>;
  getDataList: handleUnaryCall<GetProjectionDataListRequest, GetProjectionDataListResponse>;
  upsertData: handleUnaryCall<UpsertProjectionDataRequest, UpsertProjectionDataResponse>;
  deleteData: handleUnaryCall<DeleteProjectionDataRequest, DeleteProjectionDataResponse>;
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
  getDataList(
    request: GetProjectionDataListRequest,
    callback: (error: ServiceError | null, response: GetProjectionDataListResponse) => void,
  ): ClientUnaryCall;
  getDataList(
    request: GetProjectionDataListRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetProjectionDataListResponse) => void,
  ): ClientUnaryCall;
  getDataList(
    request: GetProjectionDataListRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetProjectionDataListResponse) => void,
  ): ClientUnaryCall;
  upsertData(
    request: UpsertProjectionDataRequest,
    callback: (error: ServiceError | null, response: UpsertProjectionDataResponse) => void,
  ): ClientUnaryCall;
  upsertData(
    request: UpsertProjectionDataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpsertProjectionDataResponse) => void,
  ): ClientUnaryCall;
  upsertData(
    request: UpsertProjectionDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpsertProjectionDataResponse) => void,
  ): ClientUnaryCall;
  deleteData(
    request: DeleteProjectionDataRequest,
    callback: (error: ServiceError | null, response: DeleteProjectionDataResponse) => void,
  ): ClientUnaryCall;
  deleteData(
    request: DeleteProjectionDataRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteProjectionDataResponse) => void,
  ): ClientUnaryCall;
  deleteData(
    request: DeleteProjectionDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteProjectionDataResponse) => void,
  ): ClientUnaryCall;
}

export const ProjectionsServiceClient = makeGenericClientConstructor(
  ProjectionsServiceService,
  "delivery.ProjectionsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectionsServiceClient;
  service: typeof ProjectionsServiceService;
};
