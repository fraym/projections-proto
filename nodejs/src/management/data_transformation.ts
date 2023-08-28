/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface DataTransformationRequest {
  payload?: { $case: "init"; init: TransformData } | { $case: "data"; data: TransformedData } | undefined;
}

export interface TransformData {
  crudType: string;
}

export interface DataToTransform {
  crudType: string;
  tenantId: string;
  id: string;
  data: { [key: string]: string };
}

export interface DataToTransform_DataEntry {
  key: string;
  value: string;
}

export interface TransformedData {
  crudType: string;
  tenantId: string;
  id: string;
  data: { [key: string]: string };
}

export interface TransformedData_DataEntry {
  key: string;
  value: string;
}

function createBaseDataTransformationRequest(): DataTransformationRequest {
  return { payload: undefined };
}

export const DataTransformationRequest = {
  encode(message: DataTransformationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.payload?.$case) {
      case "init":
        TransformData.encode(message.payload.init, writer.uint32(10).fork()).ldelim();
        break;
      case "data":
        TransformedData.encode(message.payload.data, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataTransformationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataTransformationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = { $case: "init", init: TransformData.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = { $case: "data", data: TransformedData.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataTransformationRequest {
    return {
      payload: isSet(object.init)
        ? { $case: "init", init: TransformData.fromJSON(object.init) }
        : isSet(object.data)
        ? { $case: "data", data: TransformedData.fromJSON(object.data) }
        : undefined,
    };
  },

  toJSON(message: DataTransformationRequest): unknown {
    const obj: any = {};
    if (message.payload?.$case === "init") {
      obj.init = TransformData.toJSON(message.payload.init);
    }
    if (message.payload?.$case === "data") {
      obj.data = TransformedData.toJSON(message.payload.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataTransformationRequest>, I>>(base?: I): DataTransformationRequest {
    return DataTransformationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataTransformationRequest>, I>>(object: I): DataTransformationRequest {
    const message = createBaseDataTransformationRequest();
    if (object.payload?.$case === "init" && object.payload?.init !== undefined && object.payload?.init !== null) {
      message.payload = { $case: "init", init: TransformData.fromPartial(object.payload.init) };
    }
    if (object.payload?.$case === "data" && object.payload?.data !== undefined && object.payload?.data !== null) {
      message.payload = { $case: "data", data: TransformedData.fromPartial(object.payload.data) };
    }
    return message;
  },
};

function createBaseTransformData(): TransformData {
  return { crudType: "" };
}

export const TransformData = {
  encode(message: TransformData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crudType !== "") {
      writer.uint32(10).string(message.crudType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransformData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransformData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.crudType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransformData {
    return { crudType: isSet(object.crudType) ? String(object.crudType) : "" };
  },

  toJSON(message: TransformData): unknown {
    const obj: any = {};
    if (message.crudType !== "") {
      obj.crudType = message.crudType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransformData>, I>>(base?: I): TransformData {
    return TransformData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransformData>, I>>(object: I): TransformData {
    const message = createBaseTransformData();
    message.crudType = object.crudType ?? "";
    return message;
  },
};

function createBaseDataToTransform(): DataToTransform {
  return { crudType: "", tenantId: "", id: "", data: {} };
}

export const DataToTransform = {
  encode(message: DataToTransform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crudType !== "") {
      writer.uint32(10).string(message.crudType);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      DataToTransform_DataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataToTransform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataToTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.crudType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = DataToTransform_DataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.data[entry4.key] = entry4.value;
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

  fromJSON(object: any): DataToTransform {
    return {
      crudType: isSet(object.crudType) ? String(object.crudType) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: DataToTransform): unknown {
    const obj: any = {};
    if (message.crudType !== "") {
      obj.crudType = message.crudType;
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    if (message.id !== "") {
      obj.id = message.id;
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

  create<I extends Exact<DeepPartial<DataToTransform>, I>>(base?: I): DataToTransform {
    return DataToTransform.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataToTransform>, I>>(object: I): DataToTransform {
    const message = createBaseDataToTransform();
    message.crudType = object.crudType ?? "";
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseDataToTransform_DataEntry(): DataToTransform_DataEntry {
  return { key: "", value: "" };
}

export const DataToTransform_DataEntry = {
  encode(message: DataToTransform_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataToTransform_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataToTransform_DataEntry();
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

  fromJSON(object: any): DataToTransform_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: DataToTransform_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataToTransform_DataEntry>, I>>(base?: I): DataToTransform_DataEntry {
    return DataToTransform_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataToTransform_DataEntry>, I>>(object: I): DataToTransform_DataEntry {
    const message = createBaseDataToTransform_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTransformedData(): TransformedData {
  return { crudType: "", tenantId: "", id: "", data: {} };
}

export const TransformedData = {
  encode(message: TransformedData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crudType !== "") {
      writer.uint32(10).string(message.crudType);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      TransformedData_DataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransformedData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransformedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.crudType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = TransformedData_DataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.data[entry4.key] = entry4.value;
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

  fromJSON(object: any): TransformedData {
    return {
      crudType: isSet(object.crudType) ? String(object.crudType) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TransformedData): unknown {
    const obj: any = {};
    if (message.crudType !== "") {
      obj.crudType = message.crudType;
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    if (message.id !== "") {
      obj.id = message.id;
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

  create<I extends Exact<DeepPartial<TransformedData>, I>>(base?: I): TransformedData {
    return TransformedData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransformedData>, I>>(object: I): TransformedData {
    const message = createBaseTransformedData();
    message.crudType = object.crudType ?? "";
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTransformedData_DataEntry(): TransformedData_DataEntry {
  return { key: "", value: "" };
}

export const TransformedData_DataEntry = {
  encode(message: TransformedData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransformedData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransformedData_DataEntry();
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

  fromJSON(object: any): TransformedData_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: TransformedData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransformedData_DataEntry>, I>>(base?: I): TransformedData_DataEntry {
    return TransformedData_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransformedData_DataEntry>, I>>(object: I): TransformedData_DataEntry {
    const message = createBaseTransformedData_DataEntry();
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
