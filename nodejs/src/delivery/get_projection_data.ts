/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AuthData, DataFilter } from "./shared";

export const protobufPackage = "delivery";

export interface GetProjectionDataRequest {
  projection: string;
  auth: AuthData | undefined;
  dataId: string;
  filter: DataFilter | undefined;
  returnEmptyDataIfNotFound: boolean;
  wait: DataWait | undefined;
}

export interface GetProjectionDataListRequest {
  projection: string;
  auth: AuthData | undefined;
  limit: number;
  page: number;
  filter: DataFilter | undefined;
  order: DataOrder[];
}

export interface DataWait {
  conditionFilter: DataFilter | undefined;
  timeout: number;
}

export interface DataOrder {
  field: string;
  descending: boolean;
}

export interface ProjectionData {
  data: { [key: string]: string };
}

export interface ProjectionData_DataEntry {
  key: string;
  value: string;
}

export interface GetProjectionDataResponse {
  result: ProjectionData | undefined;
}

export interface GetProjectionDataListResponse {
  result: ProjectionData[];
  limit: number;
  page: number;
  total: number;
}

function createBaseGetProjectionDataRequest(): GetProjectionDataRequest {
  return {
    projection: "",
    auth: undefined,
    dataId: "",
    filter: undefined,
    returnEmptyDataIfNotFound: false,
    wait: undefined,
  };
}

export const GetProjectionDataRequest = {
  encode(message: GetProjectionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projection !== "") {
      writer.uint32(10).string(message.projection);
    }
    if (message.auth !== undefined) {
      AuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.dataId !== "") {
      writer.uint32(26).string(message.dataId);
    }
    if (message.filter !== undefined) {
      DataFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    if (message.returnEmptyDataIfNotFound === true) {
      writer.uint32(40).bool(message.returnEmptyDataIfNotFound);
    }
    if (message.wait !== undefined) {
      DataWait.encode(message.wait, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projection = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth = AuthData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = DataFilter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.returnEmptyDataIfNotFound = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.wait = DataWait.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectionDataRequest {
    return {
      projection: isSet(object.projection) ? String(object.projection) : "",
      auth: isSet(object.auth) ? AuthData.fromJSON(object.auth) : undefined,
      dataId: isSet(object.dataId) ? String(object.dataId) : "",
      filter: isSet(object.filter) ? DataFilter.fromJSON(object.filter) : undefined,
      returnEmptyDataIfNotFound: isSet(object.returnEmptyDataIfNotFound)
        ? Boolean(object.returnEmptyDataIfNotFound)
        : false,
      wait: isSet(object.wait) ? DataWait.fromJSON(object.wait) : undefined,
    };
  },

  toJSON(message: GetProjectionDataRequest): unknown {
    const obj: any = {};
    if (message.projection !== "") {
      obj.projection = message.projection;
    }
    if (message.auth !== undefined) {
      obj.auth = AuthData.toJSON(message.auth);
    }
    if (message.dataId !== "") {
      obj.dataId = message.dataId;
    }
    if (message.filter !== undefined) {
      obj.filter = DataFilter.toJSON(message.filter);
    }
    if (message.returnEmptyDataIfNotFound === true) {
      obj.returnEmptyDataIfNotFound = message.returnEmptyDataIfNotFound;
    }
    if (message.wait !== undefined) {
      obj.wait = DataWait.toJSON(message.wait);
    }
    return obj;
  },

  create(base?: DeepPartial<GetProjectionDataRequest>): GetProjectionDataRequest {
    return GetProjectionDataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetProjectionDataRequest>): GetProjectionDataRequest {
    const message = createBaseGetProjectionDataRequest();
    message.projection = object.projection ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null) ? AuthData.fromPartial(object.auth) : undefined;
    message.dataId = object.dataId ?? "";
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? DataFilter.fromPartial(object.filter)
      : undefined;
    message.returnEmptyDataIfNotFound = object.returnEmptyDataIfNotFound ?? false;
    message.wait = (object.wait !== undefined && object.wait !== null) ? DataWait.fromPartial(object.wait) : undefined;
    return message;
  },
};

function createBaseGetProjectionDataListRequest(): GetProjectionDataListRequest {
  return { projection: "", auth: undefined, limit: 0, page: 0, filter: undefined, order: [] };
}

export const GetProjectionDataListRequest = {
  encode(message: GetProjectionDataListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projection !== "") {
      writer.uint32(10).string(message.projection);
    }
    if (message.auth !== undefined) {
      AuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(32).int64(message.page);
    }
    if (message.filter !== undefined) {
      DataFilter.encode(message.filter, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.order) {
      DataOrder.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionDataListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionDataListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projection = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth = AuthData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.page = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filter = DataFilter.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.order.push(DataOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectionDataListRequest {
    return {
      projection: isSet(object.projection) ? String(object.projection) : "",
      auth: isSet(object.auth) ? AuthData.fromJSON(object.auth) : undefined,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      filter: isSet(object.filter) ? DataFilter.fromJSON(object.filter) : undefined,
      order: Array.isArray(object?.order) ? object.order.map((e: any) => DataOrder.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetProjectionDataListRequest): unknown {
    const obj: any = {};
    if (message.projection !== "") {
      obj.projection = message.projection;
    }
    if (message.auth !== undefined) {
      obj.auth = AuthData.toJSON(message.auth);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.filter !== undefined) {
      obj.filter = DataFilter.toJSON(message.filter);
    }
    if (message.order?.length) {
      obj.order = message.order.map((e) => DataOrder.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetProjectionDataListRequest>): GetProjectionDataListRequest {
    return GetProjectionDataListRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetProjectionDataListRequest>): GetProjectionDataListRequest {
    const message = createBaseGetProjectionDataListRequest();
    message.projection = object.projection ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null) ? AuthData.fromPartial(object.auth) : undefined;
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? DataFilter.fromPartial(object.filter)
      : undefined;
    message.order = object.order?.map((e) => DataOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataWait(): DataWait {
  return { conditionFilter: undefined, timeout: 0 };
}

export const DataWait = {
  encode(message: DataWait, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conditionFilter !== undefined) {
      DataFilter.encode(message.conditionFilter, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeout !== 0) {
      writer.uint32(16).int64(message.timeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataWait {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataWait();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conditionFilter = DataFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timeout = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataWait {
    return {
      conditionFilter: isSet(object.conditionFilter) ? DataFilter.fromJSON(object.conditionFilter) : undefined,
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
    };
  },

  toJSON(message: DataWait): unknown {
    const obj: any = {};
    if (message.conditionFilter !== undefined) {
      obj.conditionFilter = DataFilter.toJSON(message.conditionFilter);
    }
    if (message.timeout !== 0) {
      obj.timeout = Math.round(message.timeout);
    }
    return obj;
  },

  create(base?: DeepPartial<DataWait>): DataWait {
    return DataWait.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataWait>): DataWait {
    const message = createBaseDataWait();
    message.conditionFilter = (object.conditionFilter !== undefined && object.conditionFilter !== null)
      ? DataFilter.fromPartial(object.conditionFilter)
      : undefined;
    message.timeout = object.timeout ?? 0;
    return message;
  },
};

function createBaseDataOrder(): DataOrder {
  return { field: "", descending: false };
}

export const DataOrder = {
  encode(message: DataOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.field = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.descending = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataOrder {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      descending: isSet(object.descending) ? Boolean(object.descending) : false,
    };
  },

  toJSON(message: DataOrder): unknown {
    const obj: any = {};
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.descending === true) {
      obj.descending = message.descending;
    }
    return obj;
  },

  create(base?: DeepPartial<DataOrder>): DataOrder {
    return DataOrder.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataOrder>): DataOrder {
    const message = createBaseDataOrder();
    message.field = object.field ?? "";
    message.descending = object.descending ?? false;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ProjectionData_DataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<ProjectionData>): ProjectionData {
    return ProjectionData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProjectionData>): ProjectionData {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionData_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionData_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProjectionData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<ProjectionData_DataEntry>): ProjectionData_DataEntry {
    return ProjectionData_DataEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProjectionData_DataEntry>): ProjectionData_DataEntry {
    const message = createBaseProjectionData_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetProjectionDataResponse(): GetProjectionDataResponse {
  return { result: undefined };
}

export const GetProjectionDataResponse = {
  encode(message: GetProjectionDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      ProjectionData.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = ProjectionData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectionDataResponse {
    return { result: isSet(object.result) ? ProjectionData.fromJSON(object.result) : undefined };
  },

  toJSON(message: GetProjectionDataResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = ProjectionData.toJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<GetProjectionDataResponse>): GetProjectionDataResponse {
    return GetProjectionDataResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetProjectionDataResponse>): GetProjectionDataResponse {
    const message = createBaseGetProjectionDataResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? ProjectionData.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseGetProjectionDataListResponse(): GetProjectionDataListResponse {
  return { result: [], limit: 0, page: 0, total: 0 };
}

export const GetProjectionDataListResponse = {
  encode(message: GetProjectionDataListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      ProjectionData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int64(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(24).int64(message.page);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionDataListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionDataListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result.push(ProjectionData.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProjectionDataListResponse {
    return {
      result: Array.isArray(object?.result) ? object.result.map((e: any) => ProjectionData.fromJSON(e)) : [],
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetProjectionDataListResponse): unknown {
    const obj: any = {};
    if (message.result?.length) {
      obj.result = message.result.map((e) => ProjectionData.toJSON(e));
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create(base?: DeepPartial<GetProjectionDataListResponse>): GetProjectionDataListResponse {
    return GetProjectionDataListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetProjectionDataListResponse>): GetProjectionDataListResponse {
    const message = createBaseGetProjectionDataListResponse();
    message.result = object.result?.map((e) => ProjectionData.fromPartial(e)) || [];
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
