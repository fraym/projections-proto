/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "delivery";

export interface AuthData {
  tenantId: string;
  scopes: string[];
  data: { [key: string]: string };
}

export interface AuthData_DataEntry {
  key: string;
  value: string;
}

export interface DataFilter {
  fields: { [key: string]: DataFieldFilter };
  and: DataFilter[];
  or: DataFilter[];
}

export interface DataFilter_FieldsEntry {
  key: string;
  value: DataFieldFilter | undefined;
}

export interface DataFieldFilter {
  type: string;
  operation: string;
  value: string;
}

export interface EventMetadata {
  causationId: string;
  correlationId: string;
}

function createBaseAuthData(): AuthData {
  return { tenantId: "", scopes: [], data: {} };
}

export const AuthData = {
  encode(message: AuthData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    for (const v of message.scopes) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      AuthData_DataEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = AuthData_DataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.data[entry3.key] = entry3.value;
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

  fromJSON(object: any): AuthData {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      scopes: Array.isArray(object?.scopes) ? object.scopes.map((e: any) => String(e)) : [],
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: AuthData): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    if (message.scopes?.length) {
      obj.scopes = message.scopes;
    }
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

  create(base?: DeepPartial<AuthData>): AuthData {
    return AuthData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthData>): AuthData {
    const message = createBaseAuthData();
    message.tenantId = object.tenantId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseAuthData_DataEntry(): AuthData_DataEntry {
  return { key: "", value: "" };
}

export const AuthData_DataEntry = {
  encode(message: AuthData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthData_DataEntry();
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

  fromJSON(object: any): AuthData_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AuthData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<AuthData_DataEntry>): AuthData_DataEntry {
    return AuthData_DataEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthData_DataEntry>): AuthData_DataEntry {
    const message = createBaseAuthData_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDataFilter(): DataFilter {
  return { fields: {}, and: [], or: [] };
}

export const DataFilter = {
  encode(message: DataFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      DataFilter_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.and) {
      DataFilter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.or) {
      DataFilter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = DataFilter_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.and.push(DataFilter.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.or.push(DataFilter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataFilter {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: DataFieldFilter }>((acc, [key, value]) => {
          acc[key] = DataFieldFilter.fromJSON(value);
          return acc;
        }, {})
        : {},
      and: Array.isArray(object?.and) ? object.and.map((e: any) => DataFilter.fromJSON(e)) : [],
      or: Array.isArray(object?.or) ? object.or.map((e: any) => DataFilter.fromJSON(e)) : [],
    };
  },

  toJSON(message: DataFilter): unknown {
    const obj: any = {};
    if (message.fields) {
      const entries = Object.entries(message.fields);
      if (entries.length > 0) {
        obj.fields = {};
        entries.forEach(([k, v]) => {
          obj.fields[k] = DataFieldFilter.toJSON(v);
        });
      }
    }
    if (message.and?.length) {
      obj.and = message.and.map((e) => DataFilter.toJSON(e));
    }
    if (message.or?.length) {
      obj.or = message.or.map((e) => DataFilter.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DataFilter>): DataFilter {
    return DataFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DataFilter>): DataFilter {
    const message = createBaseDataFilter();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: DataFieldFilter }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = DataFieldFilter.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.and = object.and?.map((e) => DataFilter.fromPartial(e)) || [];
    message.or = object.or?.map((e) => DataFilter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataFilter_FieldsEntry(): DataFilter_FieldsEntry {
  return { key: "", value: undefined };
}

export const DataFilter_FieldsEntry = {
  encode(message: DataFilter_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      DataFieldFilter.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataFilter_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataFilter_FieldsEntry();
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

          message.value = DataFieldFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataFilter_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? DataFieldFilter.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DataFilter_FieldsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = DataFieldFilter.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<DataFilter_FieldsEntry>): DataFilter_FieldsEntry {
    return DataFilter_FieldsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DataFilter_FieldsEntry>): DataFilter_FieldsEntry {
    const message = createBaseDataFilter_FieldsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? DataFieldFilter.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseDataFieldFilter(): DataFieldFilter {
  return { type: "", operation: "", value: "" };
}

export const DataFieldFilter = {
  encode(message: DataFieldFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataFieldFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataFieldFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): DataFieldFilter {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: DataFieldFilter): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.operation !== "") {
      obj.operation = message.operation;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<DataFieldFilter>): DataFieldFilter {
    return DataFieldFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DataFieldFilter>): DataFieldFilter {
    const message = createBaseDataFieldFilter();
    message.type = object.type ?? "";
    message.operation = object.operation ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEventMetadata(): EventMetadata {
  return { causationId: "", correlationId: "" };
}

export const EventMetadata = {
  encode(message: EventMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.causationId !== "") {
      writer.uint32(10).string(message.causationId);
    }
    if (message.correlationId !== "") {
      writer.uint32(18).string(message.correlationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.causationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.correlationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventMetadata {
    return {
      causationId: isSet(object.causationId) ? String(object.causationId) : "",
      correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
    };
  },

  toJSON(message: EventMetadata): unknown {
    const obj: any = {};
    if (message.causationId !== "") {
      obj.causationId = message.causationId;
    }
    if (message.correlationId !== "") {
      obj.correlationId = message.correlationId;
    }
    return obj;
  },

  create(base?: DeepPartial<EventMetadata>): EventMetadata {
    return EventMetadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventMetadata>): EventMetadata {
    const message = createBaseEventMetadata();
    message.causationId = object.causationId ?? "";
    message.correlationId = object.correlationId ?? "";
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
