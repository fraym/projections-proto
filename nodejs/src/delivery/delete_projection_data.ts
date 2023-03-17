/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AuthData, DataFilter } from "./shared";

export const protobufPackage = "delivery";

export interface DeleteProjectionDataRequest {
  projection: string;
  auth: AuthData | undefined;
  dataId: string;
  filter: DataFilter | undefined;
}

export interface DeleteProjectionDataResponse {
  numberOfDeletedEntries: number;
}

function createBaseDeleteProjectionDataRequest(): DeleteProjectionDataRequest {
  return { projection: "", auth: undefined, dataId: "", filter: undefined };
}

export const DeleteProjectionDataRequest = {
  encode(message: DeleteProjectionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectionDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectionDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projection = reader.string();
          break;
        case 2:
          message.auth = AuthData.decode(reader, reader.uint32());
          break;
        case 3:
          message.dataId = reader.string();
          break;
        case 4:
          message.filter = DataFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectionDataRequest {
    return {
      projection: isSet(object.projection) ? String(object.projection) : "",
      auth: isSet(object.auth) ? AuthData.fromJSON(object.auth) : undefined,
      dataId: isSet(object.dataId) ? String(object.dataId) : "",
      filter: isSet(object.filter) ? DataFilter.fromJSON(object.filter) : undefined,
    };
  },

  toJSON(message: DeleteProjectionDataRequest): unknown {
    const obj: any = {};
    message.projection !== undefined && (obj.projection = message.projection);
    message.auth !== undefined && (obj.auth = message.auth ? AuthData.toJSON(message.auth) : undefined);
    message.dataId !== undefined && (obj.dataId = message.dataId);
    message.filter !== undefined && (obj.filter = message.filter ? DataFilter.toJSON(message.filter) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeleteProjectionDataRequest>): DeleteProjectionDataRequest {
    return DeleteProjectionDataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteProjectionDataRequest>): DeleteProjectionDataRequest {
    const message = createBaseDeleteProjectionDataRequest();
    message.projection = object.projection ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null) ? AuthData.fromPartial(object.auth) : undefined;
    message.dataId = object.dataId ?? "";
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? DataFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseDeleteProjectionDataResponse(): DeleteProjectionDataResponse {
  return { numberOfDeletedEntries: 0 };
}

export const DeleteProjectionDataResponse = {
  encode(message: DeleteProjectionDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberOfDeletedEntries !== 0) {
      writer.uint32(8).int64(message.numberOfDeletedEntries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectionDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectionDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfDeletedEntries = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectionDataResponse {
    return { numberOfDeletedEntries: isSet(object.numberOfDeletedEntries) ? Number(object.numberOfDeletedEntries) : 0 };
  },

  toJSON(message: DeleteProjectionDataResponse): unknown {
    const obj: any = {};
    message.numberOfDeletedEntries !== undefined &&
      (obj.numberOfDeletedEntries = Math.round(message.numberOfDeletedEntries));
    return obj;
  },

  create(base?: DeepPartial<DeleteProjectionDataResponse>): DeleteProjectionDataResponse {
    return DeleteProjectionDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteProjectionDataResponse>): DeleteProjectionDataResponse {
    const message = createBaseDeleteProjectionDataResponse();
    message.numberOfDeletedEntries = object.numberOfDeletedEntries ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
