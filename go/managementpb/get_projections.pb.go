// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.9
// source: management/get_projections.proto

package managementpb

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

type GetProjectionsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GetProjectionsRequest) Reset() {
	*x = GetProjectionsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_management_get_projections_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetProjectionsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetProjectionsRequest) ProtoMessage() {}

func (x *GetProjectionsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_management_get_projections_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetProjectionsRequest.ProtoReflect.Descriptor instead.
func (*GetProjectionsRequest) Descriptor() ([]byte, []int) {
	return file_management_get_projections_proto_rawDescGZIP(), []int{0}
}

type GetProjectionsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectionNames []string `protobuf:"bytes,1,rep,name=projection_names,json=projectionNames,proto3" json:"projection_names,omitempty"`
}

func (x *GetProjectionsResponse) Reset() {
	*x = GetProjectionsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_management_get_projections_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetProjectionsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetProjectionsResponse) ProtoMessage() {}

func (x *GetProjectionsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_management_get_projections_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetProjectionsResponse.ProtoReflect.Descriptor instead.
func (*GetProjectionsResponse) Descriptor() ([]byte, []int) {
	return file_management_get_projections_proto_rawDescGZIP(), []int{1}
}

func (x *GetProjectionsResponse) GetProjectionNames() []string {
	if x != nil {
		return x.ProjectionNames
	}
	return nil
}

var File_management_get_projections_proto protoreflect.FileDescriptor

var file_management_get_projections_proto_rawDesc = []byte{
	0x0a, 0x20, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x65, 0x74,
	0x5f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0a, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x17,
	0x0a, 0x15, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x43, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x50, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x29, 0x0a, 0x10, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0f, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_management_get_projections_proto_rawDescOnce sync.Once
	file_management_get_projections_proto_rawDescData = file_management_get_projections_proto_rawDesc
)

func file_management_get_projections_proto_rawDescGZIP() []byte {
	file_management_get_projections_proto_rawDescOnce.Do(func() {
		file_management_get_projections_proto_rawDescData = protoimpl.X.CompressGZIP(file_management_get_projections_proto_rawDescData)
	})
	return file_management_get_projections_proto_rawDescData
}

var file_management_get_projections_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_management_get_projections_proto_goTypes = []interface{}{
	(*GetProjectionsRequest)(nil),  // 0: management.GetProjectionsRequest
	(*GetProjectionsResponse)(nil), // 1: management.GetProjectionsResponse
}
var file_management_get_projections_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_management_get_projections_proto_init() }
func file_management_get_projections_proto_init() {
	if File_management_get_projections_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_management_get_projections_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetProjectionsRequest); i {
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
		file_management_get_projections_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetProjectionsResponse); i {
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
			RawDescriptor: file_management_get_projections_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_management_get_projections_proto_goTypes,
		DependencyIndexes: file_management_get_projections_proto_depIdxs,
		MessageInfos:      file_management_get_projections_proto_msgTypes,
	}.Build()
	File_management_get_projections_proto = out.File
	file_management_get_projections_proto_rawDesc = nil
	file_management_get_projections_proto_goTypes = nil
	file_management_get_projections_proto_depIdxs = nil
}
