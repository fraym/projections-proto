/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface GetProjectionsRequest {
}

export interface GetProjectionsResponse {
  projectionNames: string[];
}

function createBaseGetProjectionsRequest(): GetProjectionsRequest {
  return {};
}

export const GetProjectionsRequest = {
  encode(_: GetProjectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetProjectionsRequest {
    return {};
  },

  toJSON(_: GetProjectionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectionsRequest>, I>>(base?: I): GetProjectionsRequest {
    return GetProjectionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectionsRequest>, I>>(_: I): GetProjectionsRequest {
    const message = createBaseGetProjectionsRequest();
    return message;
  },
};

function createBaseGetProjectionsResponse(): GetProjectionsResponse {
  return { projectionNames: [] };
}

export const GetProjectionsResponse = {
  encode(message: GetProjectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectionNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectionNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectionsResponse {
    return {
      projectionNames: Array.isArray(object?.projectionNames) ? object.projectionNames.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GetProjectionsResponse): unknown {
    const obj: any = {};
    if (message.projectionNames) {
      obj.projectionNames = message.projectionNames.map((e) => e);
    } else {
      obj.projectionNames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectionsResponse>, I>>(base?: I): GetProjectionsResponse {
    return GetProjectionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectionsResponse>, I>>(object: I): GetProjectionsResponse {
    const message = createBaseGetProjectionsResponse();
    message.projectionNames = object.projectionNames?.map((e) => e) || [];
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
