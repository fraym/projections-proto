/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AuthData, EventMetadata } from "./shared";

export const protobufPackage = "delivery";

export interface UpsertProjectionDataRequest {
  projection: string;
  auth: AuthData | undefined;
  dataId: string;
  payload: { [key: string]: string };
  eventMetadata: EventMetadata | undefined;
}

export interface UpsertProjectionDataRequest_PayloadEntry {
  key: string;
  value: string;
}

export interface UpsertProjectionDataResponse {
  newData: { [key: string]: string };
  id: string;
  validationErrors: string[];
  fieldValidationErrors: { [key: string]: string };
}

export interface UpsertProjectionDataResponse_NewDataEntry {
  key: string;
  value: string;
}

export interface UpsertProjectionDataResponse_FieldValidationErrorsEntry {
  key: string;
  value: string;
}

function createBaseUpsertProjectionDataRequest(): UpsertProjectionDataRequest {
  return { projection: "", auth: undefined, dataId: "", payload: {}, eventMetadata: undefined };
}

export const UpsertProjectionDataRequest = {
  encode(message: UpsertProjectionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projection !== "") {
      writer.uint32(10).string(message.projection);
    }
    if (message.auth !== undefined) {
      AuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.dataId !== "") {
      writer.uint32(26).string(message.dataId);
    }
    Object.entries(message.payload).forEach(([key, value]) => {
      UpsertProjectionDataRequest_PayloadEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.eventMetadata !== undefined) {
      EventMetadata.encode(message.eventMetadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertProjectionDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertProjectionDataRequest();
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

          const entry4 = UpsertProjectionDataRequest_PayloadEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.payload[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.eventMetadata = EventMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpsertProjectionDataRequest {
    return {
      projection: isSet(object.projection) ? String(object.projection) : "",
      auth: isSet(object.auth) ? AuthData.fromJSON(object.auth) : undefined,
      dataId: isSet(object.dataId) ? String(object.dataId) : "",
      payload: isObject(object.payload)
        ? Object.entries(object.payload).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      eventMetadata: isSet(object.eventMetadata) ? EventMetadata.fromJSON(object.eventMetadata) : undefined,
    };
  },

  toJSON(message: UpsertProjectionDataRequest): unknown {
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
    if (message.payload) {
      const entries = Object.entries(message.payload);
      if (entries.length > 0) {
        obj.payload = {};
        entries.forEach(([k, v]) => {
          obj.payload[k] = v;
        });
      }
    }
    if (message.eventMetadata !== undefined) {
      obj.eventMetadata = EventMetadata.toJSON(message.eventMetadata);
    }
    return obj;
  },

  create(base?: DeepPartial<UpsertProjectionDataRequest>): UpsertProjectionDataRequest {
    return UpsertProjectionDataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpsertProjectionDataRequest>): UpsertProjectionDataRequest {
    const message = createBaseUpsertProjectionDataRequest();
    message.projection = object.projection ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null) ? AuthData.fromPartial(object.auth) : undefined;
    message.dataId = object.dataId ?? "";
    message.payload = Object.entries(object.payload ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.eventMetadata = (object.eventMetadata !== undefined && object.eventMetadata !== null)
      ? EventMetadata.fromPartial(object.eventMetadata)
      : undefined;
    return message;
  },
};

function createBaseUpsertProjectionDataRequest_PayloadEntry(): UpsertProjectionDataRequest_PayloadEntry {
  return { key: "", value: "" };
}

export const UpsertProjectionDataRequest_PayloadEntry = {
  encode(message: UpsertProjectionDataRequest_PayloadEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertProjectionDataRequest_PayloadEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertProjectionDataRequest_PayloadEntry();
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

  fromJSON(object: any): UpsertProjectionDataRequest_PayloadEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: UpsertProjectionDataRequest_PayloadEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<UpsertProjectionDataRequest_PayloadEntry>): UpsertProjectionDataRequest_PayloadEntry {
    return UpsertProjectionDataRequest_PayloadEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpsertProjectionDataRequest_PayloadEntry>): UpsertProjectionDataRequest_PayloadEntry {
    const message = createBaseUpsertProjectionDataRequest_PayloadEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpsertProjectionDataResponse(): UpsertProjectionDataResponse {
  return { newData: {}, id: "", validationErrors: [], fieldValidationErrors: {} };
}

export const UpsertProjectionDataResponse = {
  encode(message: UpsertProjectionDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.newData).forEach(([key, value]) => {
      UpsertProjectionDataResponse_NewDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.validationErrors) {
      writer.uint32(26).string(v!);
    }
    Object.entries(message.fieldValidationErrors).forEach(([key, value]) => {
      UpsertProjectionDataResponse_FieldValidationErrorsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertProjectionDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertProjectionDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = UpsertProjectionDataResponse_NewDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.newData[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validationErrors.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = UpsertProjectionDataResponse_FieldValidationErrorsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.fieldValidationErrors[entry4.key] = entry4.value;
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

  fromJSON(object: any): UpsertProjectionDataResponse {
    return {
      newData: isObject(object.newData)
        ? Object.entries(object.newData).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      id: isSet(object.id) ? String(object.id) : "",
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => String(e))
        : [],
      fieldValidationErrors: isObject(object.fieldValidationErrors)
        ? Object.entries(object.fieldValidationErrors).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpsertProjectionDataResponse): unknown {
    const obj: any = {};
    if (message.newData) {
      const entries = Object.entries(message.newData);
      if (entries.length > 0) {
        obj.newData = {};
        entries.forEach(([k, v]) => {
          obj.newData[k] = v;
        });
      }
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors;
    }
    if (message.fieldValidationErrors) {
      const entries = Object.entries(message.fieldValidationErrors);
      if (entries.length > 0) {
        obj.fieldValidationErrors = {};
        entries.forEach(([k, v]) => {
          obj.fieldValidationErrors[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<UpsertProjectionDataResponse>): UpsertProjectionDataResponse {
    return UpsertProjectionDataResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpsertProjectionDataResponse>): UpsertProjectionDataResponse {
    const message = createBaseUpsertProjectionDataResponse();
    message.newData = Object.entries(object.newData ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.id = object.id ?? "";
    message.validationErrors = object.validationErrors?.map((e) => e) || [];
    message.fieldValidationErrors = Object.entries(object.fieldValidationErrors ?? {}).reduce<
      { [key: string]: string }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseUpsertProjectionDataResponse_NewDataEntry(): UpsertProjectionDataResponse_NewDataEntry {
  return { key: "", value: "" };
}

export const UpsertProjectionDataResponse_NewDataEntry = {
  encode(message: UpsertProjectionDataResponse_NewDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertProjectionDataResponse_NewDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertProjectionDataResponse_NewDataEntry();
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

  fromJSON(object: any): UpsertProjectionDataResponse_NewDataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: UpsertProjectionDataResponse_NewDataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<UpsertProjectionDataResponse_NewDataEntry>): UpsertProjectionDataResponse_NewDataEntry {
    return UpsertProjectionDataResponse_NewDataEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<UpsertProjectionDataResponse_NewDataEntry>,
  ): UpsertProjectionDataResponse_NewDataEntry {
    const message = createBaseUpsertProjectionDataResponse_NewDataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpsertProjectionDataResponse_FieldValidationErrorsEntry(): UpsertProjectionDataResponse_FieldValidationErrorsEntry {
  return { key: "", value: "" };
}

export const UpsertProjectionDataResponse_FieldValidationErrorsEntry = {
  encode(
    message: UpsertProjectionDataResponse_FieldValidationErrorsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertProjectionDataResponse_FieldValidationErrorsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertProjectionDataResponse_FieldValidationErrorsEntry();
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

  fromJSON(object: any): UpsertProjectionDataResponse_FieldValidationErrorsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: UpsertProjectionDataResponse_FieldValidationErrorsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(
    base?: DeepPartial<UpsertProjectionDataResponse_FieldValidationErrorsEntry>,
  ): UpsertProjectionDataResponse_FieldValidationErrorsEntry {
    return UpsertProjectionDataResponse_FieldValidationErrorsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<UpsertProjectionDataResponse_FieldValidationErrorsEntry>,
  ): UpsertProjectionDataResponse_FieldValidationErrorsEntry {
    const message = createBaseUpsertProjectionDataResponse_FieldValidationErrorsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
