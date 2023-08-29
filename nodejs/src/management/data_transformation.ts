/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface ProjectionsDataTransformationRequest {
  payload?:
    | { $case: "init"; init: ProjectionsTransformData }
    | { $case: "data"; data: ProjectionsTransformedData }
    | undefined;
}

export interface ProjectionsTransformData {
  crudType: string;
}

export interface ProjectionsDataToTransform {
  crudType: string;
  tenantId: string;
  id: string;
  data: { [key: string]: string };
}

export interface ProjectionsDataToTransform_DataEntry {
  key: string;
  value: string;
}

export interface ProjectionsTransformedData {
  crudType: string;
  tenantId: string;
  id: string;
  data: { [key: string]: string };
}

export interface ProjectionsTransformedData_DataEntry {
  key: string;
  value: string;
}

function createBaseProjectionsDataTransformationRequest(): ProjectionsDataTransformationRequest {
  return { payload: undefined };
}

export const ProjectionsDataTransformationRequest = {
  encode(message: ProjectionsDataTransformationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.payload?.$case) {
      case "init":
        ProjectionsTransformData.encode(message.payload.init, writer.uint32(10).fork()).ldelim();
        break;
      case "data":
        ProjectionsTransformedData.encode(message.payload.data, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsDataTransformationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsDataTransformationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = { $case: "init", init: ProjectionsTransformData.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = { $case: "data", data: ProjectionsTransformedData.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsDataTransformationRequest {
    return {
      payload: isSet(object.init)
        ? { $case: "init", init: ProjectionsTransformData.fromJSON(object.init) }
        : isSet(object.data)
        ? { $case: "data", data: ProjectionsTransformedData.fromJSON(object.data) }
        : undefined,
    };
  },

  toJSON(message: ProjectionsDataTransformationRequest): unknown {
    const obj: any = {};
    if (message.payload?.$case === "init") {
      obj.init = ProjectionsTransformData.toJSON(message.payload.init);
    }
    if (message.payload?.$case === "data") {
      obj.data = ProjectionsTransformedData.toJSON(message.payload.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsDataTransformationRequest>, I>>(
    base?: I,
  ): ProjectionsDataTransformationRequest {
    return ProjectionsDataTransformationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsDataTransformationRequest>, I>>(
    object: I,
  ): ProjectionsDataTransformationRequest {
    const message = createBaseProjectionsDataTransformationRequest();
    if (object.payload?.$case === "init" && object.payload?.init !== undefined && object.payload?.init !== null) {
      message.payload = { $case: "init", init: ProjectionsTransformData.fromPartial(object.payload.init) };
    }
    if (object.payload?.$case === "data" && object.payload?.data !== undefined && object.payload?.data !== null) {
      message.payload = { $case: "data", data: ProjectionsTransformedData.fromPartial(object.payload.data) };
    }
    return message;
  },
};

function createBaseProjectionsTransformData(): ProjectionsTransformData {
  return { crudType: "" };
}

export const ProjectionsTransformData = {
  encode(message: ProjectionsTransformData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crudType !== "") {
      writer.uint32(10).string(message.crudType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsTransformData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsTransformData();
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

  fromJSON(object: any): ProjectionsTransformData {
    return { crudType: isSet(object.crudType) ? String(object.crudType) : "" };
  },

  toJSON(message: ProjectionsTransformData): unknown {
    const obj: any = {};
    if (message.crudType !== "") {
      obj.crudType = message.crudType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsTransformData>, I>>(base?: I): ProjectionsTransformData {
    return ProjectionsTransformData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsTransformData>, I>>(object: I): ProjectionsTransformData {
    const message = createBaseProjectionsTransformData();
    message.crudType = object.crudType ?? "";
    return message;
  },
};

function createBaseProjectionsDataToTransform(): ProjectionsDataToTransform {
  return { crudType: "", tenantId: "", id: "", data: {} };
}

export const ProjectionsDataToTransform = {
  encode(message: ProjectionsDataToTransform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      ProjectionsDataToTransform_DataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsDataToTransform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsDataToTransform();
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

          const entry4 = ProjectionsDataToTransform_DataEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProjectionsDataToTransform {
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

  toJSON(message: ProjectionsDataToTransform): unknown {
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

  create<I extends Exact<DeepPartial<ProjectionsDataToTransform>, I>>(base?: I): ProjectionsDataToTransform {
    return ProjectionsDataToTransform.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsDataToTransform>, I>>(object: I): ProjectionsDataToTransform {
    const message = createBaseProjectionsDataToTransform();
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

function createBaseProjectionsDataToTransform_DataEntry(): ProjectionsDataToTransform_DataEntry {
  return { key: "", value: "" };
}

export const ProjectionsDataToTransform_DataEntry = {
  encode(message: ProjectionsDataToTransform_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsDataToTransform_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsDataToTransform_DataEntry();
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

  fromJSON(object: any): ProjectionsDataToTransform_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProjectionsDataToTransform_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsDataToTransform_DataEntry>, I>>(
    base?: I,
  ): ProjectionsDataToTransform_DataEntry {
    return ProjectionsDataToTransform_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsDataToTransform_DataEntry>, I>>(
    object: I,
  ): ProjectionsDataToTransform_DataEntry {
    const message = createBaseProjectionsDataToTransform_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProjectionsTransformedData(): ProjectionsTransformedData {
  return { crudType: "", tenantId: "", id: "", data: {} };
}

export const ProjectionsTransformedData = {
  encode(message: ProjectionsTransformedData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      ProjectionsTransformedData_DataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsTransformedData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsTransformedData();
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

          const entry4 = ProjectionsTransformedData_DataEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProjectionsTransformedData {
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

  toJSON(message: ProjectionsTransformedData): unknown {
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

  create<I extends Exact<DeepPartial<ProjectionsTransformedData>, I>>(base?: I): ProjectionsTransformedData {
    return ProjectionsTransformedData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsTransformedData>, I>>(object: I): ProjectionsTransformedData {
    const message = createBaseProjectionsTransformedData();
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

function createBaseProjectionsTransformedData_DataEntry(): ProjectionsTransformedData_DataEntry {
  return { key: "", value: "" };
}

export const ProjectionsTransformedData_DataEntry = {
  encode(message: ProjectionsTransformedData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsTransformedData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsTransformedData_DataEntry();
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

  fromJSON(object: any): ProjectionsTransformedData_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProjectionsTransformedData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsTransformedData_DataEntry>, I>>(
    base?: I,
  ): ProjectionsTransformedData_DataEntry {
    return ProjectionsTransformedData_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsTransformedData_DataEntry>, I>>(
    object: I,
  ): ProjectionsTransformedData_DataEntry {
    const message = createBaseProjectionsTransformedData_DataEntry();
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
