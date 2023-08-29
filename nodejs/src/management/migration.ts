/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface ProjectionsEnumType {
  name: string;
  values: string[];
}

export interface ProjectionsProjectionType {
  name: string;
  directives: ProjectionsTypeDirective[];
  fields: ProjectionsTypeField[];
}

export interface ProjectionsCrudType {
  name: string;
  directives: ProjectionsTypeDirective[];
  fields: ProjectionsTypeField[];
}

export interface ProjectionsNestedType {
  name: string;
  directives: ProjectionsTypeDirective[];
  fields: ProjectionsTypeField[];
}

export interface ProjectionsTypeField {
  name: string;
  type: string[];
  directives: ProjectionsTypeDirective[];
}

export interface ProjectionsTypeDirective {
  name: string;
  arguments: ProjectionsTypeArgument[];
}

export interface ProjectionsTypeArgument {
  name: string;
  value: string;
}

export interface ProjectionsRegisterMigrationRequest {
  dangerouslyRemoveGdprFields: boolean;
  projectionTypes: ProjectionsProjectionType[];
  crudTypes: ProjectionsCrudType[];
  enums: ProjectionsEnumType[];
  nestedTypes: ProjectionsNestedType[];
}

export interface ProjectionsRegisterMigrationResponse {
}

export interface ProjectionsStartMigrationRequest {
}

export interface ProjectionsStartMigrationResponse {
}

export interface ProjectionsFinishMigrationRequest {
}

export interface ProjectionsFinishMigrationResponse {
}

export interface ProjectionsRollbackMigrationRequest {
}

export interface ProjectionsRollbackMigrationResponse {
}

export interface ProjectionsGetMigrationStatusRequest {
}

export interface ProjectionsGetMigrationStatusResponse {
  started: boolean;
  done: boolean;
}

function createBaseProjectionsEnumType(): ProjectionsEnumType {
  return { name: "", values: [] };
}

export const ProjectionsEnumType = {
  encode(message: ProjectionsEnumType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsEnumType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsEnumType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsEnumType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      values: Array.isArray(object?.values) ? object.values.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ProjectionsEnumType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsEnumType>, I>>(base?: I): ProjectionsEnumType {
    return ProjectionsEnumType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsEnumType>, I>>(object: I): ProjectionsEnumType {
    const message = createBaseProjectionsEnumType();
    message.name = object.name ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseProjectionsProjectionType(): ProjectionsProjectionType {
  return { name: "", directives: [], fields: [] };
}

export const ProjectionsProjectionType = {
  encode(message: ProjectionsProjectionType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.directives) {
      ProjectionsTypeDirective.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fields) {
      ProjectionsTypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsProjectionType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsProjectionType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.directives.push(ProjectionsTypeDirective.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fields.push(ProjectionsTypeField.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsProjectionType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      directives: Array.isArray(object?.directives)
        ? object.directives.map((e: any) => ProjectionsTypeDirective.fromJSON(e))
        : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => ProjectionsTypeField.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectionsProjectionType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => ProjectionsTypeDirective.toJSON(e));
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => ProjectionsTypeField.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsProjectionType>, I>>(base?: I): ProjectionsProjectionType {
    return ProjectionsProjectionType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsProjectionType>, I>>(object: I): ProjectionsProjectionType {
    const message = createBaseProjectionsProjectionType();
    message.name = object.name ?? "";
    message.directives = object.directives?.map((e) => ProjectionsTypeDirective.fromPartial(e)) || [];
    message.fields = object.fields?.map((e) => ProjectionsTypeField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectionsCrudType(): ProjectionsCrudType {
  return { name: "", directives: [], fields: [] };
}

export const ProjectionsCrudType = {
  encode(message: ProjectionsCrudType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.directives) {
      ProjectionsTypeDirective.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fields) {
      ProjectionsTypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsCrudType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsCrudType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.directives.push(ProjectionsTypeDirective.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fields.push(ProjectionsTypeField.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsCrudType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      directives: Array.isArray(object?.directives)
        ? object.directives.map((e: any) => ProjectionsTypeDirective.fromJSON(e))
        : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => ProjectionsTypeField.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectionsCrudType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => ProjectionsTypeDirective.toJSON(e));
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => ProjectionsTypeField.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsCrudType>, I>>(base?: I): ProjectionsCrudType {
    return ProjectionsCrudType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsCrudType>, I>>(object: I): ProjectionsCrudType {
    const message = createBaseProjectionsCrudType();
    message.name = object.name ?? "";
    message.directives = object.directives?.map((e) => ProjectionsTypeDirective.fromPartial(e)) || [];
    message.fields = object.fields?.map((e) => ProjectionsTypeField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectionsNestedType(): ProjectionsNestedType {
  return { name: "", directives: [], fields: [] };
}

export const ProjectionsNestedType = {
  encode(message: ProjectionsNestedType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.directives) {
      ProjectionsTypeDirective.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fields) {
      ProjectionsTypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsNestedType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsNestedType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.directives.push(ProjectionsTypeDirective.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fields.push(ProjectionsTypeField.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsNestedType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      directives: Array.isArray(object?.directives)
        ? object.directives.map((e: any) => ProjectionsTypeDirective.fromJSON(e))
        : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => ProjectionsTypeField.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectionsNestedType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => ProjectionsTypeDirective.toJSON(e));
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => ProjectionsTypeField.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsNestedType>, I>>(base?: I): ProjectionsNestedType {
    return ProjectionsNestedType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsNestedType>, I>>(object: I): ProjectionsNestedType {
    const message = createBaseProjectionsNestedType();
    message.name = object.name ?? "";
    message.directives = object.directives?.map((e) => ProjectionsTypeDirective.fromPartial(e)) || [];
    message.fields = object.fields?.map((e) => ProjectionsTypeField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectionsTypeField(): ProjectionsTypeField {
  return { name: "", type: [], directives: [] };
}

export const ProjectionsTypeField = {
  encode(message: ProjectionsTypeField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.type) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.directives) {
      ProjectionsTypeDirective.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsTypeField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsTypeField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.directives.push(ProjectionsTypeDirective.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsTypeField {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: Array.isArray(object?.type) ? object.type.map((e: any) => String(e)) : [],
      directives: Array.isArray(object?.directives)
        ? object.directives.map((e: any) => ProjectionsTypeDirective.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectionsTypeField): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type?.length) {
      obj.type = message.type;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => ProjectionsTypeDirective.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsTypeField>, I>>(base?: I): ProjectionsTypeField {
    return ProjectionsTypeField.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsTypeField>, I>>(object: I): ProjectionsTypeField {
    const message = createBaseProjectionsTypeField();
    message.name = object.name ?? "";
    message.type = object.type?.map((e) => e) || [];
    message.directives = object.directives?.map((e) => ProjectionsTypeDirective.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectionsTypeDirective(): ProjectionsTypeDirective {
  return { name: "", arguments: [] };
}

export const ProjectionsTypeDirective = {
  encode(message: ProjectionsTypeDirective, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.arguments) {
      ProjectionsTypeArgument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsTypeDirective {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsTypeDirective();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arguments.push(ProjectionsTypeArgument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsTypeDirective {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      arguments: Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => ProjectionsTypeArgument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectionsTypeDirective): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => ProjectionsTypeArgument.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsTypeDirective>, I>>(base?: I): ProjectionsTypeDirective {
    return ProjectionsTypeDirective.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsTypeDirective>, I>>(object: I): ProjectionsTypeDirective {
    const message = createBaseProjectionsTypeDirective();
    message.name = object.name ?? "";
    message.arguments = object.arguments?.map((e) => ProjectionsTypeArgument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectionsTypeArgument(): ProjectionsTypeArgument {
  return { name: "", value: "" };
}

export const ProjectionsTypeArgument = {
  encode(message: ProjectionsTypeArgument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsTypeArgument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsTypeArgument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): ProjectionsTypeArgument {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: ProjectionsTypeArgument): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsTypeArgument>, I>>(base?: I): ProjectionsTypeArgument {
    return ProjectionsTypeArgument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsTypeArgument>, I>>(object: I): ProjectionsTypeArgument {
    const message = createBaseProjectionsTypeArgument();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProjectionsRegisterMigrationRequest(): ProjectionsRegisterMigrationRequest {
  return { dangerouslyRemoveGdprFields: false, projectionTypes: [], crudTypes: [], enums: [], nestedTypes: [] };
}

export const ProjectionsRegisterMigrationRequest = {
  encode(message: ProjectionsRegisterMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dangerouslyRemoveGdprFields === true) {
      writer.uint32(8).bool(message.dangerouslyRemoveGdprFields);
    }
    for (const v of message.projectionTypes) {
      ProjectionsProjectionType.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.crudTypes) {
      ProjectionsCrudType.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enums) {
      ProjectionsEnumType.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.nestedTypes) {
      ProjectionsNestedType.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsRegisterMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsRegisterMigrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.dangerouslyRemoveGdprFields = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectionTypes.push(ProjectionsProjectionType.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.crudTypes.push(ProjectionsCrudType.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enums.push(ProjectionsEnumType.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nestedTypes.push(ProjectionsNestedType.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsRegisterMigrationRequest {
    return {
      dangerouslyRemoveGdprFields: isSet(object.dangerouslyRemoveGdprFields)
        ? Boolean(object.dangerouslyRemoveGdprFields)
        : false,
      projectionTypes: Array.isArray(object?.projectionTypes)
        ? object.projectionTypes.map((e: any) => ProjectionsProjectionType.fromJSON(e))
        : [],
      crudTypes: Array.isArray(object?.crudTypes)
        ? object.crudTypes.map((e: any) => ProjectionsCrudType.fromJSON(e))
        : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => ProjectionsEnumType.fromJSON(e)) : [],
      nestedTypes: Array.isArray(object?.nestedTypes)
        ? object.nestedTypes.map((e: any) => ProjectionsNestedType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectionsRegisterMigrationRequest): unknown {
    const obj: any = {};
    if (message.dangerouslyRemoveGdprFields === true) {
      obj.dangerouslyRemoveGdprFields = message.dangerouslyRemoveGdprFields;
    }
    if (message.projectionTypes?.length) {
      obj.projectionTypes = message.projectionTypes.map((e) => ProjectionsProjectionType.toJSON(e));
    }
    if (message.crudTypes?.length) {
      obj.crudTypes = message.crudTypes.map((e) => ProjectionsCrudType.toJSON(e));
    }
    if (message.enums?.length) {
      obj.enums = message.enums.map((e) => ProjectionsEnumType.toJSON(e));
    }
    if (message.nestedTypes?.length) {
      obj.nestedTypes = message.nestedTypes.map((e) => ProjectionsNestedType.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsRegisterMigrationRequest>, I>>(
    base?: I,
  ): ProjectionsRegisterMigrationRequest {
    return ProjectionsRegisterMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsRegisterMigrationRequest>, I>>(
    object: I,
  ): ProjectionsRegisterMigrationRequest {
    const message = createBaseProjectionsRegisterMigrationRequest();
    message.dangerouslyRemoveGdprFields = object.dangerouslyRemoveGdprFields ?? false;
    message.projectionTypes = object.projectionTypes?.map((e) => ProjectionsProjectionType.fromPartial(e)) || [];
    message.crudTypes = object.crudTypes?.map((e) => ProjectionsCrudType.fromPartial(e)) || [];
    message.enums = object.enums?.map((e) => ProjectionsEnumType.fromPartial(e)) || [];
    message.nestedTypes = object.nestedTypes?.map((e) => ProjectionsNestedType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectionsRegisterMigrationResponse(): ProjectionsRegisterMigrationResponse {
  return {};
}

export const ProjectionsRegisterMigrationResponse = {
  encode(_: ProjectionsRegisterMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsRegisterMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsRegisterMigrationResponse();
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

  fromJSON(_: any): ProjectionsRegisterMigrationResponse {
    return {};
  },

  toJSON(_: ProjectionsRegisterMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsRegisterMigrationResponse>, I>>(
    base?: I,
  ): ProjectionsRegisterMigrationResponse {
    return ProjectionsRegisterMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsRegisterMigrationResponse>, I>>(
    _: I,
  ): ProjectionsRegisterMigrationResponse {
    const message = createBaseProjectionsRegisterMigrationResponse();
    return message;
  },
};

function createBaseProjectionsStartMigrationRequest(): ProjectionsStartMigrationRequest {
  return {};
}

export const ProjectionsStartMigrationRequest = {
  encode(_: ProjectionsStartMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsStartMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsStartMigrationRequest();
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

  fromJSON(_: any): ProjectionsStartMigrationRequest {
    return {};
  },

  toJSON(_: ProjectionsStartMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsStartMigrationRequest>, I>>(
    base?: I,
  ): ProjectionsStartMigrationRequest {
    return ProjectionsStartMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsStartMigrationRequest>, I>>(
    _: I,
  ): ProjectionsStartMigrationRequest {
    const message = createBaseProjectionsStartMigrationRequest();
    return message;
  },
};

function createBaseProjectionsStartMigrationResponse(): ProjectionsStartMigrationResponse {
  return {};
}

export const ProjectionsStartMigrationResponse = {
  encode(_: ProjectionsStartMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsStartMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsStartMigrationResponse();
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

  fromJSON(_: any): ProjectionsStartMigrationResponse {
    return {};
  },

  toJSON(_: ProjectionsStartMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsStartMigrationResponse>, I>>(
    base?: I,
  ): ProjectionsStartMigrationResponse {
    return ProjectionsStartMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsStartMigrationResponse>, I>>(
    _: I,
  ): ProjectionsStartMigrationResponse {
    const message = createBaseProjectionsStartMigrationResponse();
    return message;
  },
};

function createBaseProjectionsFinishMigrationRequest(): ProjectionsFinishMigrationRequest {
  return {};
}

export const ProjectionsFinishMigrationRequest = {
  encode(_: ProjectionsFinishMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsFinishMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsFinishMigrationRequest();
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

  fromJSON(_: any): ProjectionsFinishMigrationRequest {
    return {};
  },

  toJSON(_: ProjectionsFinishMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsFinishMigrationRequest>, I>>(
    base?: I,
  ): ProjectionsFinishMigrationRequest {
    return ProjectionsFinishMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsFinishMigrationRequest>, I>>(
    _: I,
  ): ProjectionsFinishMigrationRequest {
    const message = createBaseProjectionsFinishMigrationRequest();
    return message;
  },
};

function createBaseProjectionsFinishMigrationResponse(): ProjectionsFinishMigrationResponse {
  return {};
}

export const ProjectionsFinishMigrationResponse = {
  encode(_: ProjectionsFinishMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsFinishMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsFinishMigrationResponse();
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

  fromJSON(_: any): ProjectionsFinishMigrationResponse {
    return {};
  },

  toJSON(_: ProjectionsFinishMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsFinishMigrationResponse>, I>>(
    base?: I,
  ): ProjectionsFinishMigrationResponse {
    return ProjectionsFinishMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsFinishMigrationResponse>, I>>(
    _: I,
  ): ProjectionsFinishMigrationResponse {
    const message = createBaseProjectionsFinishMigrationResponse();
    return message;
  },
};

function createBaseProjectionsRollbackMigrationRequest(): ProjectionsRollbackMigrationRequest {
  return {};
}

export const ProjectionsRollbackMigrationRequest = {
  encode(_: ProjectionsRollbackMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsRollbackMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsRollbackMigrationRequest();
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

  fromJSON(_: any): ProjectionsRollbackMigrationRequest {
    return {};
  },

  toJSON(_: ProjectionsRollbackMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsRollbackMigrationRequest>, I>>(
    base?: I,
  ): ProjectionsRollbackMigrationRequest {
    return ProjectionsRollbackMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsRollbackMigrationRequest>, I>>(
    _: I,
  ): ProjectionsRollbackMigrationRequest {
    const message = createBaseProjectionsRollbackMigrationRequest();
    return message;
  },
};

function createBaseProjectionsRollbackMigrationResponse(): ProjectionsRollbackMigrationResponse {
  return {};
}

export const ProjectionsRollbackMigrationResponse = {
  encode(_: ProjectionsRollbackMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsRollbackMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsRollbackMigrationResponse();
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

  fromJSON(_: any): ProjectionsRollbackMigrationResponse {
    return {};
  },

  toJSON(_: ProjectionsRollbackMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsRollbackMigrationResponse>, I>>(
    base?: I,
  ): ProjectionsRollbackMigrationResponse {
    return ProjectionsRollbackMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsRollbackMigrationResponse>, I>>(
    _: I,
  ): ProjectionsRollbackMigrationResponse {
    const message = createBaseProjectionsRollbackMigrationResponse();
    return message;
  },
};

function createBaseProjectionsGetMigrationStatusRequest(): ProjectionsGetMigrationStatusRequest {
  return {};
}

export const ProjectionsGetMigrationStatusRequest = {
  encode(_: ProjectionsGetMigrationStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsGetMigrationStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsGetMigrationStatusRequest();
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

  fromJSON(_: any): ProjectionsGetMigrationStatusRequest {
    return {};
  },

  toJSON(_: ProjectionsGetMigrationStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsGetMigrationStatusRequest>, I>>(
    base?: I,
  ): ProjectionsGetMigrationStatusRequest {
    return ProjectionsGetMigrationStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsGetMigrationStatusRequest>, I>>(
    _: I,
  ): ProjectionsGetMigrationStatusRequest {
    const message = createBaseProjectionsGetMigrationStatusRequest();
    return message;
  },
};

function createBaseProjectionsGetMigrationStatusResponse(): ProjectionsGetMigrationStatusResponse {
  return { started: false, done: false };
}

export const ProjectionsGetMigrationStatusResponse = {
  encode(message: ProjectionsGetMigrationStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.started === true) {
      writer.uint32(8).bool(message.started);
    }
    if (message.done === true) {
      writer.uint32(16).bool(message.done);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionsGetMigrationStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionsGetMigrationStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.started = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.done = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionsGetMigrationStatusResponse {
    return {
      started: isSet(object.started) ? Boolean(object.started) : false,
      done: isSet(object.done) ? Boolean(object.done) : false,
    };
  },

  toJSON(message: ProjectionsGetMigrationStatusResponse): unknown {
    const obj: any = {};
    if (message.started === true) {
      obj.started = message.started;
    }
    if (message.done === true) {
      obj.done = message.done;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionsGetMigrationStatusResponse>, I>>(
    base?: I,
  ): ProjectionsGetMigrationStatusResponse {
    return ProjectionsGetMigrationStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionsGetMigrationStatusResponse>, I>>(
    object: I,
  ): ProjectionsGetMigrationStatusResponse {
    const message = createBaseProjectionsGetMigrationStatusResponse();
    message.started = object.started ?? false;
    message.done = object.done ?? false;
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
