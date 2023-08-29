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
import { ProjectionsDataToTransform, ProjectionsDataTransformationRequest } from "./data_transformation";
import {
  ProjectionsFinishMigrationRequest,
  ProjectionsFinishMigrationResponse,
  ProjectionsGetMigrationStatusRequest,
  ProjectionsGetMigrationStatusResponse,
  ProjectionsRegisterMigrationRequest,
  ProjectionsRegisterMigrationResponse,
  ProjectionsRollbackMigrationRequest,
  ProjectionsRollbackMigrationResponse,
  ProjectionsStartMigrationRequest,
  ProjectionsStartMigrationResponse,
} from "./migration";

export const protobufPackage = "management";

export type ProjectionsServiceService = typeof ProjectionsServiceService;
export const ProjectionsServiceService = {
  registerMigration: {
    path: "/management.ProjectionsService/RegisterMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectionsRegisterMigrationRequest) =>
      Buffer.from(ProjectionsRegisterMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectionsRegisterMigrationRequest.decode(value),
    responseSerialize: (value: ProjectionsRegisterMigrationResponse) =>
      Buffer.from(ProjectionsRegisterMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectionsRegisterMigrationResponse.decode(value),
  },
  startMigration: {
    path: "/management.ProjectionsService/StartMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectionsStartMigrationRequest) =>
      Buffer.from(ProjectionsStartMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectionsStartMigrationRequest.decode(value),
    responseSerialize: (value: ProjectionsStartMigrationResponse) =>
      Buffer.from(ProjectionsStartMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectionsStartMigrationResponse.decode(value),
  },
  finishMigration: {
    path: "/management.ProjectionsService/FinishMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectionsFinishMigrationRequest) =>
      Buffer.from(ProjectionsFinishMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectionsFinishMigrationRequest.decode(value),
    responseSerialize: (value: ProjectionsFinishMigrationResponse) =>
      Buffer.from(ProjectionsFinishMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectionsFinishMigrationResponse.decode(value),
  },
  rollbackMigration: {
    path: "/management.ProjectionsService/RollbackMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectionsRollbackMigrationRequest) =>
      Buffer.from(ProjectionsRollbackMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectionsRollbackMigrationRequest.decode(value),
    responseSerialize: (value: ProjectionsRollbackMigrationResponse) =>
      Buffer.from(ProjectionsRollbackMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectionsRollbackMigrationResponse.decode(value),
  },
  getMigrationStatus: {
    path: "/management.ProjectionsService/GetMigrationStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ProjectionsGetMigrationStatusRequest) =>
      Buffer.from(ProjectionsGetMigrationStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectionsGetMigrationStatusRequest.decode(value),
    responseSerialize: (value: ProjectionsGetMigrationStatusResponse) =>
      Buffer.from(ProjectionsGetMigrationStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectionsGetMigrationStatusResponse.decode(value),
  },
  dataTransformation: {
    path: "/management.ProjectionsService/DataTransformation",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: ProjectionsDataTransformationRequest) =>
      Buffer.from(ProjectionsDataTransformationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectionsDataTransformationRequest.decode(value),
    responseSerialize: (value: ProjectionsDataToTransform) =>
      Buffer.from(ProjectionsDataToTransform.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectionsDataToTransform.decode(value),
  },
} as const;

export interface ProjectionsServiceServer extends UntypedServiceImplementation {
  registerMigration: handleUnaryCall<ProjectionsRegisterMigrationRequest, ProjectionsRegisterMigrationResponse>;
  startMigration: handleUnaryCall<ProjectionsStartMigrationRequest, ProjectionsStartMigrationResponse>;
  finishMigration: handleUnaryCall<ProjectionsFinishMigrationRequest, ProjectionsFinishMigrationResponse>;
  rollbackMigration: handleUnaryCall<ProjectionsRollbackMigrationRequest, ProjectionsRollbackMigrationResponse>;
  getMigrationStatus: handleUnaryCall<ProjectionsGetMigrationStatusRequest, ProjectionsGetMigrationStatusResponse>;
  dataTransformation: handleBidiStreamingCall<ProjectionsDataTransformationRequest, ProjectionsDataToTransform>;
}

export interface ProjectionsServiceClient extends Client {
  registerMigration(
    request: ProjectionsRegisterMigrationRequest,
    callback: (error: ServiceError | null, response: ProjectionsRegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  registerMigration(
    request: ProjectionsRegisterMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectionsRegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  registerMigration(
    request: ProjectionsRegisterMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectionsRegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  startMigration(
    request: ProjectionsStartMigrationRequest,
    callback: (error: ServiceError | null, response: ProjectionsStartMigrationResponse) => void,
  ): ClientUnaryCall;
  startMigration(
    request: ProjectionsStartMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectionsStartMigrationResponse) => void,
  ): ClientUnaryCall;
  startMigration(
    request: ProjectionsStartMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectionsStartMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: ProjectionsFinishMigrationRequest,
    callback: (error: ServiceError | null, response: ProjectionsFinishMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: ProjectionsFinishMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectionsFinishMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: ProjectionsFinishMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectionsFinishMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: ProjectionsRollbackMigrationRequest,
    callback: (error: ServiceError | null, response: ProjectionsRollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: ProjectionsRollbackMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectionsRollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: ProjectionsRollbackMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectionsRollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: ProjectionsGetMigrationStatusRequest,
    callback: (error: ServiceError | null, response: ProjectionsGetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: ProjectionsGetMigrationStatusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectionsGetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: ProjectionsGetMigrationStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectionsGetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  dataTransformation(): ClientDuplexStream<ProjectionsDataTransformationRequest, ProjectionsDataToTransform>;
  dataTransformation(
    options: Partial<CallOptions>,
  ): ClientDuplexStream<ProjectionsDataTransformationRequest, ProjectionsDataToTransform>;
  dataTransformation(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<ProjectionsDataTransformationRequest, ProjectionsDataToTransform>;
}

export const ProjectionsServiceClient = makeGenericClientConstructor(
  ProjectionsServiceService,
  "management.ProjectionsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectionsServiceClient;
  service: typeof ProjectionsServiceService;
};
