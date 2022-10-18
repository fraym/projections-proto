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
import { CreateProjectionsRequest, CreateProjectionsResponse } from "./create_projections";
import { GetProjectionsRequest, GetProjectionsResponse } from "./get_projections";
import { RemoveProjectionsRequest, RemoveProjectionsResponse } from "./remove_projections";
import { UpdateProjectionsRequest, UpdateProjectionsResponse } from "./update_projections";

export const protobufPackage = "management";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  createProjections: {
    path: "/management.Service/CreateProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectionsRequest) => Buffer.from(CreateProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProjectionsRequest.decode(value),
    responseSerialize: (value: CreateProjectionsResponse) =>
      Buffer.from(CreateProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateProjectionsResponse.decode(value),
  },
  updateProjections: {
    path: "/management.Service/UpdateProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectionsRequest) => Buffer.from(UpdateProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateProjectionsRequest.decode(value),
    responseSerialize: (value: UpdateProjectionsResponse) =>
      Buffer.from(UpdateProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateProjectionsResponse.decode(value),
  },
  removeProjections: {
    path: "/management.Service/RemoveProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveProjectionsRequest) => Buffer.from(RemoveProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveProjectionsRequest.decode(value),
    responseSerialize: (value: RemoveProjectionsResponse) =>
      Buffer.from(RemoveProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RemoveProjectionsResponse.decode(value),
  },
  getProjections: {
    path: "/management.Service/GetProjections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectionsRequest) => Buffer.from(GetProjectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectionsRequest.decode(value),
    responseSerialize: (value: GetProjectionsResponse) => Buffer.from(GetProjectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetProjectionsResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  createProjections: handleUnaryCall<CreateProjectionsRequest, CreateProjectionsResponse>;
  updateProjections: handleUnaryCall<UpdateProjectionsRequest, UpdateProjectionsResponse>;
  removeProjections: handleUnaryCall<RemoveProjectionsRequest, RemoveProjectionsResponse>;
  getProjections: handleUnaryCall<GetProjectionsRequest, GetProjectionsResponse>;
}

export interface ServiceClient extends Client {
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

export const ServiceClient = makeGenericClientConstructor(ServiceService, "management.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient;
  service: typeof ServiceService;
};
