/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  ClientOptions,
  ClientUnaryCall,
  handleBidiStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { DataToTransform, DataTransformationRequest } from "./data_transformation";
import {
  FinishMigrationRequest,
  FinishMigrationResponse,
  GetMigrationStatusRequest,
  GetMigrationStatusResponse,
  RegisterMigrationRequest,
  RegisterMigrationResponse,
  RollbackMigrationRequest,
  RollbackMigrationResponse,
  StartMigrationRequest,
  StartMigrationResponse,
} from "./migration";

export const protobufPackage = "management";

export type ProjectionsServiceService = typeof ProjectionsServiceService;
export const ProjectionsServiceService = {
  registerMigration: {
    path: "/management.ProjectionsService/RegisterMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterMigrationRequest) => Buffer.from(RegisterMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterMigrationRequest.decode(value),
    responseSerialize: (value: RegisterMigrationResponse) =>
      Buffer.from(RegisterMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RegisterMigrationResponse.decode(value),
  },
  startMigration: {
    path: "/management.ProjectionsService/StartMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartMigrationRequest) => Buffer.from(StartMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartMigrationRequest.decode(value),
    responseSerialize: (value: StartMigrationResponse) => Buffer.from(StartMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StartMigrationResponse.decode(value),
  },
  finishMigration: {
    path: "/management.ProjectionsService/FinishMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FinishMigrationRequest) => Buffer.from(FinishMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FinishMigrationRequest.decode(value),
    responseSerialize: (value: FinishMigrationResponse) => Buffer.from(FinishMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FinishMigrationResponse.decode(value),
  },
  rollbackMigration: {
    path: "/management.ProjectionsService/RollbackMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RollbackMigrationRequest) => Buffer.from(RollbackMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RollbackMigrationRequest.decode(value),
    responseSerialize: (value: RollbackMigrationResponse) =>
      Buffer.from(RollbackMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RollbackMigrationResponse.decode(value),
  },
  getMigrationStatus: {
    path: "/management.ProjectionsService/GetMigrationStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetMigrationStatusRequest) =>
      Buffer.from(GetMigrationStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetMigrationStatusRequest.decode(value),
    responseSerialize: (value: GetMigrationStatusResponse) =>
      Buffer.from(GetMigrationStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetMigrationStatusResponse.decode(value),
  },
  dataTransformation: {
    path: "/management.ProjectionsService/DataTransformation",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: DataTransformationRequest) =>
      Buffer.from(DataTransformationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DataTransformationRequest.decode(value),
    responseSerialize: (value: DataToTransform) => Buffer.from(DataToTransform.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DataToTransform.decode(value),
  },
} as const;

export interface ProjectionsServiceServer extends UntypedServiceImplementation {
  registerMigration: handleUnaryCall<RegisterMigrationRequest, RegisterMigrationResponse>;
  startMigration: handleUnaryCall<StartMigrationRequest, StartMigrationResponse>;
  finishMigration: handleUnaryCall<FinishMigrationRequest, FinishMigrationResponse>;
  rollbackMigration: handleUnaryCall<RollbackMigrationRequest, RollbackMigrationResponse>;
  getMigrationStatus: handleUnaryCall<GetMigrationStatusRequest, GetMigrationStatusResponse>;
  dataTransformation: handleBidiStreamingCall<DataTransformationRequest, DataToTransform>;
}

export interface ProjectionsServiceClient extends Client {
  registerMigration(
    request: RegisterMigrationRequest,
    callback: (error: ServiceError | null, response: RegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  registerMigration(
    request: RegisterMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  registerMigration(
    request: RegisterMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  startMigration(
    request: StartMigrationRequest,
    callback: (error: ServiceError | null, response: StartMigrationResponse) => void,
  ): ClientUnaryCall;
  startMigration(
    request: StartMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StartMigrationResponse) => void,
  ): ClientUnaryCall;
  startMigration(
    request: StartMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StartMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: FinishMigrationRequest,
    callback: (error: ServiceError | null, response: FinishMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: FinishMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FinishMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: FinishMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FinishMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: RollbackMigrationRequest,
    callback: (error: ServiceError | null, response: RollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: RollbackMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: RollbackMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: GetMigrationStatusRequest,
    callback: (error: ServiceError | null, response: GetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: GetMigrationStatusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: GetMigrationStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  dataTransformation(): ClientDuplexStream<DataTransformationRequest, DataToTransform>;
  dataTransformation(options: Partial<CallOptions>): ClientDuplexStream<DataTransformationRequest, DataToTransform>;
  dataTransformation(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<DataTransformationRequest, DataToTransform>;
}

export const ProjectionsServiceClient = makeGenericClientConstructor(
  ProjectionsServiceService,
  "management.ProjectionsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectionsServiceClient;
  service: typeof ProjectionsServiceService;
};
