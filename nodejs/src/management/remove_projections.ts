/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface RemoveProjectionsRequest {
  projectionNames: string[];
}

export interface RemoveProjectionsResponse {
}

function createBaseRemoveProjectionsRequest(): RemoveProjectionsRequest {
  return { projectionNames: [] };
}

export const RemoveProjectionsRequest = {
  encode(message: RemoveProjectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectionNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveProjectionsRequest();
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

  fromJSON(object: any): RemoveProjectionsRequest {
    return {
      projectionNames: Array.isArray(object?.projectionNames) ? object.projectionNames.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: RemoveProjectionsRequest): unknown {
    const obj: any = {};
    if (message.projectionNames) {
      obj.projectionNames = message.projectionNames.map((e) => e);
    } else {
      obj.projectionNames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveProjectionsRequest>, I>>(base?: I): RemoveProjectionsRequest {
    return RemoveProjectionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveProjectionsRequest>, I>>(object: I): RemoveProjectionsRequest {
    const message = createBaseRemoveProjectionsRequest();
    message.projectionNames = object.projectionNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseRemoveProjectionsResponse(): RemoveProjectionsResponse {
  return {};
}

export const RemoveProjectionsResponse = {
  encode(_: RemoveProjectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveProjectionsResponse();
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

  fromJSON(_: any): RemoveProjectionsResponse {
    return {};
  },

  toJSON(_: RemoveProjectionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveProjectionsResponse>, I>>(base?: I): RemoveProjectionsResponse {
    return RemoveProjectionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveProjectionsResponse>, I>>(_: I): RemoveProjectionsResponse {
    const message = createBaseRemoveProjectionsResponse();
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
