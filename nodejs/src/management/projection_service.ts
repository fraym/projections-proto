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
import { CreateProjectionsRequest, CreateProjectionsResponse } from "./create_projections";
import { GetProjectionsRequest, GetProjectionsResponse } from "./get_projections";
import { RemoveProjectionsRequest, RemoveProjectionsResponse } from "./remove_projections";
import { UpdateProjectionsRequest, UpdateProjectionsResponse } from "./update_projections";

export const protobufPackage = "management";

export type ProjectionsServiceService = typeof ProjectionsServiceService;
export const ProjectionsServiceService = {
  createProjections: {
    path: "/management.ProjectionsService/CreateProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectionsRequest) => Buffer.from(CreateProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProjectionsRequest.decode(value),
    responseSerialize: (value: CreateProjectionsResponse) =>
      Buffer.from(CreateProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateProjectionsResponse.decode(value),
  },
  updateProjections: {
    path: "/management.ProjectionsService/UpdateProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectionsRequest) => Buffer.from(UpdateProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateProjectionsRequest.decode(value),
    responseSerialize: (value: UpdateProjectionsResponse) =>
      Buffer.from(UpdateProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateProjectionsResponse.decode(value),
  },
  removeProjections: {
    path: "/management.ProjectionsService/RemoveProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveProjectionsRequest) => Buffer.from(RemoveProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveProjectionsRequest.decode(value),
    responseSerialize: (value: RemoveProjectionsResponse) =>
      Buffer.from(RemoveProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RemoveProjectionsResponse.decode(value),
  },
  getProjections: {
    path: "/management.ProjectionsService/GetProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectionsRequest) => Buffer.from(GetProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectionsRequest.decode(value),
    responseSerialize: (value: GetProjectionsResponse) => Buffer.from(GetProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetProjectionsResponse.decode(value),
  },
} as const;

export interface ProjectionsServiceServer extends UntypedServiceImplementation {
  createProjections: handleUnaryCall<CreateProjectionsRequest, CreateProjectionsResponse>;
  updateProjections: handleUnaryCall<UpdateProjectionsRequest, UpdateProjectionsResponse>;
  removeProjections: handleUnaryCall<RemoveProjectionsRequest, RemoveProjectionsResponse>;
  getProjections: handleUnaryCall<GetProjectionsRequest, GetProjectionsResponse>;
}

export interface ProjectionsServiceClient extends Client {
  createProjections(
    request: CreateProjectionsRequest,
    callback: (error: ServiceError | null, response: CreateProjectionsResponse) => void,
  ): ClientUnaryCall;
  createProjections(
    request: CreateProjectionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateProjectionsResponse) => void,
  ): ClientUnaryCall;
  createProjections(
    request: CreateProjectionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateProjectionsResponse) => void,
  ): ClientUnaryCall;
  updateProjections(
    request: UpdateProjectionsRequest,
    callback: (error: ServiceError | null, response: UpdateProjectionsResponse) => void,
  ): ClientUnaryCall;
  updateProjections(
    request: UpdateProjectionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateProjectionsResponse) => void,
  ): ClientUnaryCall;
  updateProjections(
    request: UpdateProjectionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateProjectionsResponse) => void,
  ): ClientUnaryCall;
  removeProjections(
    request: RemoveProjectionsRequest,
    callback: (error: ServiceError | null, response: RemoveProjectionsResponse) => void,
  ): ClientUnaryCall;
  removeProjections(
    request: RemoveProjectionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RemoveProjectionsResponse) => void,
  ): ClientUnaryCall;
  removeProjections(
    request: RemoveProjectionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RemoveProjectionsResponse) => void,
  ): ClientUnaryCall;
  getProjections(
    request: GetProjectionsRequest,
    callback: (error: ServiceError | null, response: GetProjectionsResponse) => void,
  ): ClientUnaryCall;
  getProjections(
    request: GetProjectionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetProjectionsResponse) => void,
  ): ClientUnaryCall;
  getProjections(
    request: GetProjectionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetProjectionsResponse) => void,
  ): ClientUnaryCall;
}

export const ProjectionsServiceClient = makeGenericClientConstructor(
  ProjectionsServiceService,
  "management.ProjectionsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectionsServiceClient;
  service: typeof ProjectionsServiceService;
};
