/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "delivery";

export interface GetProjectionDataRequest {
  projection: string;
  tenantId: string;
  dataId: string;
  limit: number;
  page: number;
  returnEmptyDataIfNotFound: boolean;
}

export interface ProjectionData {
  data: { [key: string]: string };
}

export interface ProjectionData_DataEntry {
  key: string;
  value: string;
}

export interface GetProjectionDataResponse {
  result: ProjectionData[];
  limit: number;
  page: number;
}

function createBaseGetProjectionDataRequest(): GetProjectionDataRequest {
  return { projection: "", tenantId: "", dataId: "", limit: 0, page: 0, returnEmptyDataIfNotFound: false };
}

export const GetProjectionDataRequest = {
  encode(message: GetProjectionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projection !== "") {
      writer.uint32(10).string(message.projection);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.dataId !== "") {
      writer.uint32(26).string(message.dataId);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int32(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(40).int32(message.page);
    }
    if (message.returnEmptyDataIfNotFound === true) {
      writer.uint32(48).bool(message.returnEmptyDataIfNotFound);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projection = reader.string();
          break;
        case 2:
          message.tenantId = reader.string();
          break;
        case 3:
          message.dataId = reader.string();
          break;
        case 4:
          message.limit = reader.int32();
          break;
        case 5:
          message.page = reader.int32();
          break;
        case 6:
          message.returnEmptyDataIfNotFound = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectionDataRequest {
    return {
      projection: isSet(object.projection) ? String(object.projection) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      dataId: isSet(object.dataId) ? String(object.dataId) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      returnEmptyDataIfNotFound: isSet(object.returnEmptyDataIfNotFound)
        ? Boolean(object.returnEmptyDataIfNotFound)
        : false,
    };
  },

  toJSON(message: GetProjectionDataRequest): unknown {
    const obj: any = {};
    message.projection !== undefined && (obj.projection = message.projection);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.dataId !== undefined && (obj.dataId = message.dataId);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.returnEmptyDataIfNotFound !== undefined &&
      (obj.returnEmptyDataIfNotFound = message.returnEmptyDataIfNotFound);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectionDataRequest>, I>>(object: I): GetProjectionDataRequest {
    const message = createBaseGetProjectionDataRequest();
    message.projection = object.projection ?? "";
    message.tenantId = object.tenantId ?? "";
    message.dataId = object.dataId ?? "";
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    message.returnEmptyDataIfNotFound = object.returnEmptyDataIfNotFound ?? false;
    return message;
  },
};

function createBaseProjectionData(): ProjectionData {
  return { data: {} };
}

export const ProjectionData = {
  encode(message: ProjectionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      ProjectionData_DataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProjectionData_DataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectionData {
    return {
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProjectionData): unknown {
    const obj: any = {};
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectionData>, I>>(object: I): ProjectionData {
    const message = createBaseProjectionData();
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseProjectionData_DataEntry(): ProjectionData_DataEntry {
  return { key: "", value: "" };
}

export const ProjectionData_DataEntry = {
  encode(message: ProjectionData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionData_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectionData_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProjectionData_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectionData_DataEntry>, I>>(object: I): ProjectionData_DataEntry {
    const message = createBaseProjectionData_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetProjectionDataResponse(): GetProjectionDataResponse {
  return { result: [], limit: 0, page: 0 };
}

export const GetProjectionDataResponse = {
  encode(message: GetProjectionDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      ProjectionData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(24).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(ProjectionData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.limit = reader.int32();
          break;
        case 3:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectionDataResponse {
    return {
      result: Array.isArray(object?.result) ? object.result.map((e: any) => ProjectionData.fromJSON(e)) : [],
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: GetProjectionDataResponse): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) => e ? ProjectionData.toJSON(e) : undefined);
    } else {
      obj.result = [];
    }
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectionDataResponse>, I>>(object: I): GetProjectionDataResponse {
    const message = createBaseGetProjectionDataResponse();
    message.result = object.result?.map((e) => ProjectionData.fromPartial(e)) || [];
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}