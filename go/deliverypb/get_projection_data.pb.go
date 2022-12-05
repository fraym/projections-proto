// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.9
// source: delivery/get_projection_data.proto

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

type GetProjectionDataRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Projection                string `protobuf:"bytes,1,opt,name=projection,proto3" json:"projection,omitempty"`
	TenantId                  string `protobuf:"bytes,2,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	DataId                    string `protobuf:"bytes,3,opt,name=data_id,json=dataId,proto3" json:"data_id,omitempty"`
	Limit                     int32  `protobuf:"varint,4,opt,name=limit,proto3" json:"limit,omitempty"`
	Page                      int32  `protobuf:"varint,5,opt,name=page,proto3" json:"page,omitempty"`
	ReturnEmptyDataIfNotFound bool   `protobuf:"varint,6,opt,name=returnEmptyDataIfNotFound,proto3" json:"returnEmptyDataIfNotFound,omitempty"`
}

func (x *GetProjectionDataRequest) Reset() {
	*x = GetProjectionDataRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_get_projection_data_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetProjectionDataRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetProjectionDataRequest) ProtoMessage() {}

func (x *GetProjectionDataRequest) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_get_projection_data_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetProjectionDataRequest.ProtoReflect.Descriptor instead.
func (*GetProjectionDataRequest) Descriptor() ([]byte, []int) {
	return file_delivery_get_projection_data_proto_rawDescGZIP(), []int{0}
}

func (x *GetProjectionDataRequest) GetProjection() string {
	if x != nil {
		return x.Projection
	}
	return ""
}

func (x *GetProjectionDataRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *GetProjectionDataRequest) GetDataId() string {
	if x != nil {
		return x.DataId
	}
	return ""
}

func (x *GetProjectionDataRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *GetProjectionDataRequest) GetPage() int32 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *GetProjectionDataRequest) GetReturnEmptyDataIfNotFound() bool {
	if x != nil {
		return x.ReturnEmptyDataIfNotFound
	}
	return false
}

type ProjectionData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data map[string]string `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *ProjectionData) Reset() {
	*x = ProjectionData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_get_projection_data_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectionData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectionData) ProtoMessage() {}

func (x *ProjectionData) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_get_projection_data_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectionData.ProtoReflect.Descriptor instead.
func (*ProjectionData) Descriptor() ([]byte, []int) {
	return file_delivery_get_projection_data_proto_rawDescGZIP(), []int{1}
}

func (x *ProjectionData) GetData() map[string]string {
	if x != nil {
		return x.Data
	}
	return nil
}

type GetProjectionDataResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Result []*ProjectionData `protobuf:"bytes,1,rep,name=result,proto3" json:"result,omitempty"`
	Limit  int32             `protobuf:"varint,2,opt,name=limit,proto3" json:"limit,omitempty"`
	Page   int32             `protobuf:"varint,3,opt,name=page,proto3" json:"page,omitempty"`
}

func (x *GetProjectionDataResponse) Reset() {
	*x = GetProjectionDataResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_get_projection_data_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetProjectionDataResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetProjectionDataResponse) ProtoMessage() {}

func (x *GetProjectionDataResponse) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_get_projection_data_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetProjectionDataResponse.ProtoReflect.Descriptor instead.
func (*GetProjectionDataResponse) Descriptor() ([]byte, []int) {
	return file_delivery_get_projection_data_proto_rawDescGZIP(), []int{2}
}

func (x *GetProjectionDataResponse) GetResult() []*ProjectionData {
	if x != nil {
		return x.Result
	}
	return nil
}

func (x *GetProjectionDataResponse) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *GetProjectionDataResponse) GetPage() int32 {
	if x != nil {
		return x.Page
	}
	return 0
}

var File_delivery_get_projection_data_proto protoreflect.FileDescriptor

var file_delivery_get_projection_data_proto_rawDesc = []byte{
	0x0a, 0x22, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x22, 0xd8,
	0x01, 0x0a, 0x18, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1e, 0x0a, 0x0a, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1b, 0x0a, 0x09, 0x74,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x64, 0x61, 0x74, 0x61,
	0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x61, 0x74, 0x61, 0x49,
	0x64, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x12, 0x3c, 0x0a, 0x19, 0x72,
	0x65, 0x74, 0x75, 0x72, 0x6e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x44, 0x61, 0x74, 0x61, 0x49, 0x66,
	0x4e, 0x6f, 0x74, 0x46, 0x6f, 0x75, 0x6e, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x19,
	0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x44, 0x61, 0x74, 0x61, 0x49,
	0x66, 0x4e, 0x6f, 0x74, 0x46, 0x6f, 0x75, 0x6e, 0x64, 0x22, 0x81, 0x01, 0x0a, 0x0e, 0x50, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x12, 0x36, 0x0a, 0x04,
	0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x64, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x44, 0x61, 0x74, 0x61, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04,
	0x64, 0x61, 0x74, 0x61, 0x1a, 0x37, 0x0a, 0x09, 0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x77, 0x0a,
	0x19, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61,
	0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x06, 0x72, 0x65,
	0x73, 0x75, 0x6c, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x64, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x44, 0x61, 0x74, 0x61, 0x52, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x14, 0x0a, 0x05,
	0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d,
	0x69, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_delivery_get_projection_data_proto_rawDescOnce sync.Once
	file_delivery_get_projection_data_proto_rawDescData = file_delivery_get_projection_data_proto_rawDesc
)

func file_delivery_get_projection_data_proto_rawDescGZIP() []byte {
	file_delivery_get_projection_data_proto_rawDescOnce.Do(func() {
		file_delivery_get_projection_data_proto_rawDescData = protoimpl.X.CompressGZIP(file_delivery_get_projection_data_proto_rawDescData)
	})
	return file_delivery_get_projection_data_proto_rawDescData
}

var file_delivery_get_projection_data_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_delivery_get_projection_data_proto_goTypes = []interface{}{
	(*GetProjectionDataRequest)(nil),  // 0: delivery.GetProjectionDataRequest
	(*ProjectionData)(nil),            // 1: delivery.ProjectionData
	(*GetProjectionDataResponse)(nil), // 2: delivery.GetProjectionDataResponse
	nil,                               // 3: delivery.ProjectionData.DataEntry
}
var file_delivery_get_projection_data_proto_depIdxs = []int32{
	3, // 0: delivery.ProjectionData.data:type_name -> delivery.ProjectionData.DataEntry
	1, // 1: delivery.GetProjectionDataResponse.result:type_name -> delivery.ProjectionData
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_delivery_get_projection_data_proto_init() }
func file_delivery_get_projection_data_proto_init() {
	if File_delivery_get_projection_data_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_delivery_get_projection_data_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetProjectionDataRequest); i {
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
		file_delivery_get_projection_data_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectionData); i {
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
		file_delivery_get_projection_data_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetProjectionDataResponse); i {
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
			RawDescriptor: file_delivery_get_projection_data_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_delivery_get_projection_data_proto_goTypes,
		DependencyIndexes: file_delivery_get_projection_data_proto_depIdxs,
		MessageInfos:      file_delivery_get_projection_data_proto_msgTypes,
	}.Build()
	File_delivery_get_projection_data_proto = out.File
	file_delivery_get_projection_data_proto_rawDesc = nil
	file_delivery_get_projection_data_proto_goTypes = nil
	file_delivery_get_projection_data_proto_depIdxs = nil
}