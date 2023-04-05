// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.21.12
// source: delivery/upsert_projection_data.proto

package deliverypb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type UpsertProjectionDataRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Projection    string            `protobuf:"bytes,1,opt,name=projection,proto3" json:"projection,omitempty"`
	Auth          *AuthData         `protobuf:"bytes,2,opt,name=auth,proto3" json:"auth,omitempty"`
	DataId        string            `protobuf:"bytes,3,opt,name=data_id,json=dataId,proto3" json:"data_id,omitempty"`
	Payload       map[string]string `protobuf:"bytes,4,rep,name=payload,proto3" json:"payload,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	EventMetadata *EventMetadata    `protobuf:"bytes,5,opt,name=eventMetadata,proto3" json:"eventMetadata,omitempty"`
}

func (x *UpsertProjectionDataRequest) Reset() {
	*x = UpsertProjectionDataRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_upsert_projection_data_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpsertProjectionDataRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpsertProjectionDataRequest) ProtoMessage() {}

func (x *UpsertProjectionDataRequest) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_upsert_projection_data_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpsertProjectionDataRequest.ProtoReflect.Descriptor instead.
func (*UpsertProjectionDataRequest) Descriptor() ([]byte, []int) {
	return file_delivery_upsert_projection_data_proto_rawDescGZIP(), []int{0}
}

func (x *UpsertProjectionDataRequest) GetProjection() string {
	if x != nil {
		return x.Projection
	}
	return ""
}

func (x *UpsertProjectionDataRequest) GetAuth() *AuthData {
	if x != nil {
		return x.Auth
	}
	return nil
}

func (x *UpsertProjectionDataRequest) GetDataId() string {
	if x != nil {
		return x.DataId
	}
	return ""
}

func (x *UpsertProjectionDataRequest) GetPayload() map[string]string {
	if x != nil {
		return x.Payload
	}
	return nil
}

func (x *UpsertProjectionDataRequest) GetEventMetadata() *EventMetadata {
	if x != nil {
		return x.EventMetadata
	}
	return nil
}

type UpsertProjectionDataResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	NewData               map[string]string `protobuf:"bytes,1,rep,name=newData,proto3" json:"newData,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Id                    string            `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
	ValidationErrors      []string          `protobuf:"bytes,3,rep,name=validationErrors,proto3" json:"validationErrors,omitempty"`
	FieldValidationErrors map[string]string `protobuf:"bytes,4,rep,name=fieldValidationErrors,proto3" json:"fieldValidationErrors,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *UpsertProjectionDataResponse) Reset() {
	*x = UpsertProjectionDataResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_upsert_projection_data_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpsertProjectionDataResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpsertProjectionDataResponse) ProtoMessage() {}

func (x *UpsertProjectionDataResponse) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_upsert_projection_data_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpsertProjectionDataResponse.ProtoReflect.Descriptor instead.
func (*UpsertProjectionDataResponse) Descriptor() ([]byte, []int) {
	return file_delivery_upsert_projection_data_proto_rawDescGZIP(), []int{1}
}

func (x *UpsertProjectionDataResponse) GetNewData() map[string]string {
	if x != nil {
		return x.NewData
	}
	return nil
}

func (x *UpsertProjectionDataResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpsertProjectionDataResponse) GetValidationErrors() []string {
	if x != nil {
		return x.ValidationErrors
	}
	return nil
}

func (x *UpsertProjectionDataResponse) GetFieldValidationErrors() map[string]string {
	if x != nil {
		return x.FieldValidationErrors
	}
	return nil
}

var File_delivery_upsert_projection_data_proto protoreflect.FileDescriptor

var file_delivery_upsert_projection_data_proto_rawDesc = []byte{
	0x0a, 0x25, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2f, 0x75, 0x70, 0x73, 0x65, 0x72,
	0x74, 0x5f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61, 0x74,
	0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72,
	0x79, 0x1a, 0x15, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2f, 0x73, 0x68, 0x61, 0x72,
	0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc7, 0x02, 0x0a, 0x1b, 0x55, 0x70, 0x73,
	0x65, 0x72, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74,
	0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1e, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x70, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x26, 0x0a, 0x04, 0x61, 0x75, 0x74, 0x68,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72,
	0x79, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x44, 0x61, 0x74, 0x61, 0x52, 0x04, 0x61, 0x75, 0x74, 0x68,
	0x12, 0x17, 0x0a, 0x07, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x64, 0x61, 0x74, 0x61, 0x49, 0x64, 0x12, 0x4c, 0x0a, 0x07, 0x70, 0x61, 0x79,
	0x6c, 0x6f, 0x61, 0x64, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x32, 0x2e, 0x64, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x50, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x2e, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07,
	0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x3d, 0x0a, 0x0d, 0x65, 0x76, 0x65, 0x6e, 0x74,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17,
	0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x0d, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x3a, 0x0a, 0x0c, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61,
	0x64, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x22, 0xa8, 0x03, 0x0a, 0x1c, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x4d, 0x0a, 0x07, 0x6e, 0x65, 0x77, 0x44, 0x61, 0x74, 0x61, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x33, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e,
	0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x4e, 0x65, 0x77,
	0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x6e, 0x65, 0x77, 0x44, 0x61,
	0x74, 0x61, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x2a, 0x0a, 0x10, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x45, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x10, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x12, 0x77,
	0x0a, 0x15, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x41, 0x2e,
	0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x50,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x56, 0x61, 0x6c, 0x69, 0x64,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x15, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x1a, 0x3a, 0x0a, 0x0c, 0x4e, 0x65, 0x77, 0x44, 0x61,
	0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a,
	0x02, 0x38, 0x01, 0x1a, 0x48, 0x0a, 0x1a, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x56, 0x61, 0x6c, 0x69,
	0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_delivery_upsert_projection_data_proto_rawDescOnce sync.Once
	file_delivery_upsert_projection_data_proto_rawDescData = file_delivery_upsert_projection_data_proto_rawDesc
)

func file_delivery_upsert_projection_data_proto_rawDescGZIP() []byte {
	file_delivery_upsert_projection_data_proto_rawDescOnce.Do(func() {
		file_delivery_upsert_projection_data_proto_rawDescData = protoimpl.X.CompressGZIP(file_delivery_upsert_projection_data_proto_rawDescData)
	})
	return file_delivery_upsert_projection_data_proto_rawDescData
}

var file_delivery_upsert_projection_data_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_delivery_upsert_projection_data_proto_goTypes = []interface{}{
	(*UpsertProjectionDataRequest)(nil),  // 0: delivery.UpsertProjectionDataRequest
	(*UpsertProjectionDataResponse)(nil), // 1: delivery.UpsertProjectionDataResponse
	nil,                                  // 2: delivery.UpsertProjectionDataRequest.PayloadEntry
	nil,                                  // 3: delivery.UpsertProjectionDataResponse.NewDataEntry
	nil,                                  // 4: delivery.UpsertProjectionDataResponse.FieldValidationErrorsEntry
	(*AuthData)(nil),                     // 5: delivery.AuthData
	(*EventMetadata)(nil),                // 6: delivery.EventMetadata
}
var file_delivery_upsert_projection_data_proto_depIdxs = []int32{
	5, // 0: delivery.UpsertProjectionDataRequest.auth:type_name -> delivery.AuthData
	2, // 1: delivery.UpsertProjectionDataRequest.payload:type_name -> delivery.UpsertProjectionDataRequest.PayloadEntry
	6, // 2: delivery.UpsertProjectionDataRequest.eventMetadata:type_name -> delivery.EventMetadata
	3, // 3: delivery.UpsertProjectionDataResponse.newData:type_name -> delivery.UpsertProjectionDataResponse.NewDataEntry
	4, // 4: delivery.UpsertProjectionDataResponse.fieldValidationErrors:type_name -> delivery.UpsertProjectionDataResponse.FieldValidationErrorsEntry
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_delivery_upsert_projection_data_proto_init() }
func file_delivery_upsert_projection_data_proto_init() {
	if File_delivery_upsert_projection_data_proto != nil {
		return
	}
	file_delivery_shared_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_delivery_upsert_projection_data_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpsertProjectionDataRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_delivery_upsert_projection_data_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpsertProjectionDataResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_delivery_upsert_projection_data_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_delivery_upsert_projection_data_proto_goTypes,
		DependencyIndexes: file_delivery_upsert_projection_data_proto_depIdxs,
		MessageInfos:      file_delivery_upsert_projection_data_proto_msgTypes,
	}.Build()
	File_delivery_upsert_projection_data_proto = out.File
	file_delivery_upsert_projection_data_proto_rawDesc = nil
	file_delivery_upsert_projection_data_proto_goTypes = nil
	file_delivery_upsert_projection_data_proto_depIdxs = nil
}
