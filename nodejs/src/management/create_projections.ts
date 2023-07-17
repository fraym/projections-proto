/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface CreateProjectionsRequest {
  schema: string;
}

export interface CreateProjectionsResponse {
}

function createBaseCreateProjectionsRequest(): CreateProjectionsRequest {
  return { schema: "" };
}

export const CreateProjectionsRequest = {
  encode(message: CreateProjectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProjectionsRequest {
    return { schema: isSet(object.schema) ? String(object.schema) : "" };
  },

  toJSON(message: CreateProjectionsRequest): unknown {
    const obj: any = {};
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectionsRequest>, I>>(base?: I): CreateProjectionsRequest {
    return CreateProjectionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectionsRequest>, I>>(object: I): CreateProjectionsRequest {
    const message = createBaseCreateProjectionsRequest();
    message.schema = object.schema ?? "";
    return message;
  },
};

function createBaseCreateProjectionsResponse(): CreateProjectionsResponse {
  return {};
}

export const CreateProjectionsResponse = {
  encode(_: CreateProjectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CreateProjectionsResponse {
    return {};
  },

  toJSON(_: CreateProjectionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectionsResponse>, I>>(base?: I): CreateProjectionsResponse {
    return CreateProjectionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectionsResponse>, I>>(_: I): CreateProjectionsResponse {
    const message = createBaseCreateProjectionsResponse();
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
