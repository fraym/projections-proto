// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.21.12
// source: delivery/projection_service.proto

package deliverypb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_delivery_projection_service_proto protoreflect.FileDescriptor

var file_delivery_projection_service_proto_rawDesc = []byte{
	0x0a, 0x21, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x08, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x1a, 0x22, 0x64,
	0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x25, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2f, 0x75, 0x70, 0x73, 0x65,
	0x72, 0x74, 0x5f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61,
	0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x25, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x2f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x5f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32,
	0x82, 0x03, 0x0a, 0x12, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x52, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x44, 0x61, 0x74,
	0x61, 0x12, 0x22, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x47, 0x65, 0x74,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79,
	0x2e, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61,
	0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5e, 0x0a, 0x0b, 0x47, 0x65,
	0x74, 0x44, 0x61, 0x74, 0x61, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x26, 0x2e, 0x64, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x27, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x47, 0x65, 0x74,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x4c, 0x69,
	0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5b, 0x0a, 0x0a, 0x55, 0x70,
	0x73, 0x65, 0x72, 0x74, 0x44, 0x61, 0x74, 0x61, 0x12, 0x25, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x2e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x26, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x55, 0x70, 0x73, 0x65, 0x72,
	0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5b, 0x0a, 0x0a, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x44, 0x61, 0x74, 0x61, 0x12, 0x25, 0x2e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79,
	0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x64,
	0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_delivery_projection_service_proto_goTypes = []interface{}{
	(*GetProjectionDataRequest)(nil),      // 0: delivery.GetProjectionDataRequest
	(*GetProjectionDataListRequest)(nil),  // 1: delivery.GetProjectionDataListRequest
	(*UpsertProjectionDataRequest)(nil),   // 2: delivery.UpsertProjectionDataRequest
	(*DeleteProjectionDataRequest)(nil),   // 3: delivery.DeleteProjectionDataRequest
	(*GetProjectionDataResponse)(nil),     // 4: delivery.GetProjectionDataResponse
	(*GetProjectionDataListResponse)(nil), // 5: delivery.GetProjectionDataListResponse
	(*UpsertProjectionDataResponse)(nil),  // 6: delivery.UpsertProjectionDataResponse
	(*DeleteProjectionDataResponse)(nil),  // 7: delivery.DeleteProjectionDataResponse
}
var file_delivery_projection_service_proto_depIdxs = []int32{
	0, // 0: delivery.ProjectionsService.GetData:input_type -> delivery.GetProjectionDataRequest
	1, // 1: delivery.ProjectionsService.GetDataList:input_type -> delivery.GetProjectionDataListRequest
	2, // 2: delivery.ProjectionsService.UpsertData:input_type -> delivery.UpsertProjectionDataRequest
	3, // 3: delivery.ProjectionsService.DeleteData:input_type -> delivery.DeleteProjectionDataRequest
	4, // 4: delivery.ProjectionsService.GetData:output_type -> delivery.GetProjectionDataResponse
	5, // 5: delivery.ProjectionsService.GetDataList:output_type -> delivery.GetProjectionDataListResponse
	6, // 6: delivery.ProjectionsService.UpsertData:output_type -> delivery.UpsertProjectionDataResponse
	7, // 7: delivery.ProjectionsService.DeleteData:output_type -> delivery.DeleteProjectionDataResponse
	4, // [4:8] is the sub-list for method output_type
	0, // [0:4] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_delivery_projection_service_proto_init() }
func file_delivery_projection_service_proto_init() {
	if File_delivery_projection_service_proto != nil {
		return
	}
	file_delivery_get_projection_data_proto_init()
	file_delivery_upsert_projection_data_proto_init()
	file_delivery_delete_projection_data_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_delivery_projection_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_delivery_projection_service_proto_goTypes,
		DependencyIndexes: file_delivery_projection_service_proto_depIdxs,
	}.Build()
	File_delivery_projection_service_proto = out.File
	file_delivery_projection_service_proto_rawDesc = nil
	file_delivery_projection_service_proto_goTypes = nil
	file_delivery_projection_service_proto_depIdxs = nil
}
