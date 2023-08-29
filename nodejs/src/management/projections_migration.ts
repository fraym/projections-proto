/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface EnumType {
  name: string;
  values: string[];
}

export interface ProjectionType {
  name: string;
  directives: TypeDirective[];
  fields: TypeField[];
}

export interface CrudType {
  name: string;
  directives: TypeDirective[];
  fields: TypeField[];
}

export interface NestedType {
  name: string;
  directives: TypeDirective[];
  fields: TypeField[];
}

export interface TypeField {
  name: string;
  type: string[];
  directives: TypeDirective[];
}

export interface TypeDirective {
  name: string;
  arguments: TypeArgument[];
}

export interface TypeArgument {
  name: string;
  value: string;
}

export interface RegisterMigrationRequest {
  dangerouslyRemoveGdprFields: boolean;
  projectionTypes: ProjectionType[];
  crudTypes: CrudType[];
  enums: EnumType[];
  nestedTypes: NestedType[];
}

export interface RegisterMigrationResponse {
}

export interface StartMigrationRequest {
}

export interface StartMigrationResponse {
}

export interface FinishMigrationRequest {
}

export interface FinishMigrationResponse {
}

export interface RollbackMigrationRequest {
}

export interface RollbackMigrationResponse {
}

export interface GetMigrationStatusRequest {
}

export interface GetMigrationStatusResponse {
  started: boolean;
  done: boolean;
}

function createBaseEnumType(): EnumType {
  return { name: "", values: [] };
}

export const EnumType = {
  encode(message: EnumType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumType();
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

  fromJSON(object: any): EnumType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      values: Array.isArray(object?.values) ? object.values.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: EnumType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumType>, I>>(base?: I): EnumType {
    return EnumType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnumType>, I>>(object: I): EnumType {
    const message = createBaseEnumType();
    message.name = object.name ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseProjectionType(): ProjectionType {
  return { name: "", directives: [], fields: [] };
}

export const ProjectionType = {
  encode(message: ProjectionType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.directives) {
      TypeDirective.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fields) {
      TypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionType();
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

          message.directives.push(TypeDirective.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fields.push(TypeField.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectionType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      directives: Array.isArray(object?.directives) ? object.directives.map((e: any) => TypeDirective.fromJSON(e)) : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => TypeField.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectionType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => TypeDirective.toJSON(e));
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => TypeField.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectionType>, I>>(base?: I): ProjectionType {
    return ProjectionType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProjectionType>, I>>(object: I): ProjectionType {
    const message = createBaseProjectionType();
    message.name = object.name ?? "";
    message.directives = object.directives?.map((e) => TypeDirective.fromPartial(e)) || [];
    message.fields = object.fields?.map((e) => TypeField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCrudType(): CrudType {
  return { name: "", directives: [], fields: [] };
}

export const CrudType = {
  encode(message: CrudType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.directives) {
      TypeDirective.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fields) {
      TypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrudType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrudType();
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

          message.directives.push(TypeDirective.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fields.push(TypeField.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrudType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      directives: Array.isArray(object?.directives) ? object.directives.map((e: any) => TypeDirective.fromJSON(e)) : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => TypeField.fromJSON(e)) : [],
    };
  },

  toJSON(message: CrudType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => TypeDirective.toJSON(e));
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => TypeField.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CrudType>, I>>(base?: I): CrudType {
    return CrudType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CrudType>, I>>(object: I): CrudType {
    const message = createBaseCrudType();
    message.name = object.name ?? "";
    message.directives = object.directives?.map((e) => TypeDirective.fromPartial(e)) || [];
    message.fields = object.fields?.map((e) => TypeField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNestedType(): NestedType {
  return { name: "", directives: [], fields: [] };
}

export const NestedType = {
  encode(message: NestedType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.directives) {
      TypeDirective.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fields) {
      TypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NestedType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNestedType();
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

          message.directives.push(TypeDirective.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fields.push(TypeField.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NestedType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      directives: Array.isArray(object?.directives) ? object.directives.map((e: any) => TypeDirective.fromJSON(e)) : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => TypeField.fromJSON(e)) : [],
    };
  },

  toJSON(message: NestedType): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => TypeDirective.toJSON(e));
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => TypeField.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NestedType>, I>>(base?: I): NestedType {
    return NestedType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NestedType>, I>>(object: I): NestedType {
    const message = createBaseNestedType();
    message.name = object.name ?? "";
    message.directives = object.directives?.map((e) => TypeDirective.fromPartial(e)) || [];
    message.fields = object.fields?.map((e) => TypeField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTypeField(): TypeField {
  return { name: "", type: [], directives: [] };
}

export const TypeField = {
  encode(message: TypeField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.type) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.directives) {
      TypeDirective.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeField();
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

          message.directives.push(TypeDirective.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TypeField {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: Array.isArray(object?.type) ? object.type.map((e: any) => String(e)) : [],
      directives: Array.isArray(object?.directives) ? object.directives.map((e: any) => TypeDirective.fromJSON(e)) : [],
    };
  },

  toJSON(message: TypeField): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type?.length) {
      obj.type = message.type;
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => TypeDirective.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TypeField>, I>>(base?: I): TypeField {
    return TypeField.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TypeField>, I>>(object: I): TypeField {
    const message = createBaseTypeField();
    message.name = object.name ?? "";
    message.type = object.type?.map((e) => e) || [];
    message.directives = object.directives?.map((e) => TypeDirective.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTypeDirective(): TypeDirective {
  return { name: "", arguments: [] };
}

export const TypeDirective = {
  encode(message: TypeDirective, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.arguments) {
      TypeArgument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeDirective {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeDirective();
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

          message.arguments.push(TypeArgument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TypeDirective {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => TypeArgument.fromJSON(e)) : [],
    };
  },

  toJSON(message: TypeDirective): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => TypeArgument.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TypeDirective>, I>>(base?: I): TypeDirective {
    return TypeDirective.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TypeDirective>, I>>(object: I): TypeDirective {
    const message = createBaseTypeDirective();
    message.name = object.name ?? "";
    message.arguments = object.arguments?.map((e) => TypeArgument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTypeArgument(): TypeArgument {
  return { name: "", value: "" };
}

export const TypeArgument = {
  encode(message: TypeArgument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeArgument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeArgument();
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

  fromJSON(object: any): TypeArgument {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: TypeArgument): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TypeArgument>, I>>(base?: I): TypeArgument {
    return TypeArgument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TypeArgument>, I>>(object: I): TypeArgument {
    const message = createBaseTypeArgument();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRegisterMigrationRequest(): RegisterMigrationRequest {
  return { dangerouslyRemoveGdprFields: false, projectionTypes: [], crudTypes: [], enums: [], nestedTypes: [] };
}

export const RegisterMigrationRequest = {
  encode(message: RegisterMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dangerouslyRemoveGdprFields === true) {
      writer.uint32(8).bool(message.dangerouslyRemoveGdprFields);
    }
    for (const v of message.projectionTypes) {
      ProjectionType.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.crudTypes) {
      CrudType.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enums) {
      EnumType.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.nestedTypes) {
      NestedType.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterMigrationRequest();
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

          message.projectionTypes.push(ProjectionType.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.crudTypes.push(CrudType.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enums.push(EnumType.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nestedTypes.push(NestedType.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterMigrationRequest {
    return {
      dangerouslyRemoveGdprFields: isSet(object.dangerouslyRemoveGdprFields)
        ? Boolean(object.dangerouslyRemoveGdprFields)
        : false,
      projectionTypes: Array.isArray(object?.projectionTypes)
        ? object.projectionTypes.map((e: any) => ProjectionType.fromJSON(e))
        : [],
      crudTypes: Array.isArray(object?.crudTypes) ? object.crudTypes.map((e: any) => CrudType.fromJSON(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => EnumType.fromJSON(e)) : [],
      nestedTypes: Array.isArray(object?.nestedTypes) ? object.nestedTypes.map((e: any) => NestedType.fromJSON(e)) : [],
    };
  },

  toJSON(message: RegisterMigrationRequest): unknown {
    const obj: any = {};
    if (message.dangerouslyRemoveGdprFields === true) {
      obj.dangerouslyRemoveGdprFields = message.dangerouslyRemoveGdprFields;
    }
    if (message.projectionTypes?.length) {
      obj.projectionTypes = message.projectionTypes.map((e) => ProjectionType.toJSON(e));
    }
    if (message.crudTypes?.length) {
      obj.crudTypes = message.crudTypes.map((e) => CrudType.toJSON(e));
    }
    if (message.enums?.length) {
      obj.enums = message.enums.map((e) => EnumType.toJSON(e));
    }
    if (message.nestedTypes?.length) {
      obj.nestedTypes = message.nestedTypes.map((e) => NestedType.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterMigrationRequest>, I>>(base?: I): RegisterMigrationRequest {
    return RegisterMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterMigrationRequest>, I>>(object: I): RegisterMigrationRequest {
    const message = createBaseRegisterMigrationRequest();
    message.dangerouslyRemoveGdprFields = object.dangerouslyRemoveGdprFields ?? false;
    message.projectionTypes = object.projectionTypes?.map((e) => ProjectionType.fromPartial(e)) || [];
    message.crudTypes = object.crudTypes?.map((e) => CrudType.fromPartial(e)) || [];
    message.enums = object.enums?.map((e) => EnumType.fromPartial(e)) || [];
    message.nestedTypes = object.nestedTypes?.map((e) => NestedType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRegisterMigrationResponse(): RegisterMigrationResponse {
  return {};
}

export const RegisterMigrationResponse = {
  encode(_: RegisterMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterMigrationResponse();
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

  fromJSON(_: any): RegisterMigrationResponse {
    return {};
  },

  toJSON(_: RegisterMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterMigrationResponse>, I>>(base?: I): RegisterMigrationResponse {
    return RegisterMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterMigrationResponse>, I>>(_: I): RegisterMigrationResponse {
    const message = createBaseRegisterMigrationResponse();
    return message;
  },
};

function createBaseStartMigrationRequest(): StartMigrationRequest {
  return {};
}

export const StartMigrationRequest = {
  encode(_: StartMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartMigrationRequest();
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

  fromJSON(_: any): StartMigrationRequest {
    return {};
  },

  toJSON(_: StartMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StartMigrationRequest>, I>>(base?: I): StartMigrationRequest {
    return StartMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartMigrationRequest>, I>>(_: I): StartMigrationRequest {
    const message = createBaseStartMigrationRequest();
    return message;
  },
};

function createBaseStartMigrationResponse(): StartMigrationResponse {
  return {};
}

export const StartMigrationResponse = {
  encode(_: StartMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartMigrationResponse();
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

  fromJSON(_: any): StartMigrationResponse {
    return {};
  },

  toJSON(_: StartMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StartMigrationResponse>, I>>(base?: I): StartMigrationResponse {
    return StartMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartMigrationResponse>, I>>(_: I): StartMigrationResponse {
    const message = createBaseStartMigrationResponse();
    return message;
  },
};

function createBaseFinishMigrationRequest(): FinishMigrationRequest {
  return {};
}

export const FinishMigrationRequest = {
  encode(_: FinishMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishMigrationRequest();
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

  fromJSON(_: any): FinishMigrationRequest {
    return {};
  },

  toJSON(_: FinishMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishMigrationRequest>, I>>(base?: I): FinishMigrationRequest {
    return FinishMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishMigrationRequest>, I>>(_: I): FinishMigrationRequest {
    const message = createBaseFinishMigrationRequest();
    return message;
  },
};

function createBaseFinishMigrationResponse(): FinishMigrationResponse {
  return {};
}

export const FinishMigrationResponse = {
  encode(_: FinishMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishMigrationResponse();
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

  fromJSON(_: any): FinishMigrationResponse {
    return {};
  },

  toJSON(_: FinishMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishMigrationResponse>, I>>(base?: I): FinishMigrationResponse {
    return FinishMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishMigrationResponse>, I>>(_: I): FinishMigrationResponse {
    const message = createBaseFinishMigrationResponse();
    return message;
  },
};

function createBaseRollbackMigrationRequest(): RollbackMigrationRequest {
  return {};
}

export const RollbackMigrationRequest = {
  encode(_: RollbackMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollbackMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollbackMigrationRequest();
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

  fromJSON(_: any): RollbackMigrationRequest {
    return {};
  },

  toJSON(_: RollbackMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RollbackMigrationRequest>, I>>(base?: I): RollbackMigrationRequest {
    return RollbackMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollbackMigrationRequest>, I>>(_: I): RollbackMigrationRequest {
    const message = createBaseRollbackMigrationRequest();
    return message;
  },
};

function createBaseRollbackMigrationResponse(): RollbackMigrationResponse {
  return {};
}

export const RollbackMigrationResponse = {
  encode(_: RollbackMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollbackMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollbackMigrationResponse();
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

  fromJSON(_: any): RollbackMigrationResponse {
    return {};
  },

  toJSON(_: RollbackMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RollbackMigrationResponse>, I>>(base?: I): RollbackMigrationResponse {
    return RollbackMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollbackMigrationResponse>, I>>(_: I): RollbackMigrationResponse {
    const message = createBaseRollbackMigrationResponse();
    return message;
  },
};

function createBaseGetMigrationStatusRequest(): GetMigrationStatusRequest {
  return {};
}

export const GetMigrationStatusRequest = {
  encode(_: GetMigrationStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMigrationStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMigrationStatusRequest();
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

  fromJSON(_: any): GetMigrationStatusRequest {
    return {};
  },

  toJSON(_: GetMigrationStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMigrationStatusRequest>, I>>(base?: I): GetMigrationStatusRequest {
    return GetMigrationStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMigrationStatusRequest>, I>>(_: I): GetMigrationStatusRequest {
    const message = createBaseGetMigrationStatusRequest();
    return message;
  },
};

function createBaseGetMigrationStatusResponse(): GetMigrationStatusResponse {
  return { started: false, done: false };
}

export const GetMigrationStatusResponse = {
  encode(message: GetMigrationStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.started === true) {
      writer.uint32(8).bool(message.started);
    }
    if (message.done === true) {
      writer.uint32(16).bool(message.done);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMigrationStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMigrationStatusResponse();
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

  fromJSON(object: any): GetMigrationStatusResponse {
    return {
      started: isSet(object.started) ? Boolean(object.started) : false,
      done: isSet(object.done) ? Boolean(object.done) : false,
    };
  },

  toJSON(message: GetMigrationStatusResponse): unknown {
    const obj: any = {};
    if (message.started === true) {
      obj.started = message.started;
    }
    if (message.done === true) {
      obj.done = message.done;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMigrationStatusResponse>, I>>(base?: I): GetMigrationStatusResponse {
    return GetMigrationStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMigrationStatusResponse>, I>>(object: I): GetMigrationStatusResponse {
    const message = createBaseGetMigrationStatusResponse();
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
