// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.9
// source: delivery/projection_service.proto

package deliverypb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ProjectionsServiceClient is the client API for ProjectionsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProjectionsServiceClient interface {
	GetData(ctx context.Context, in *GetProjectionDataRequest, opts ...grpc.CallOption) (*GetProjectionDataResponse, error)
}

type projectionsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewProjectionsServiceClient(cc grpc.ClientConnInterface) ProjectionsServiceClient {
	return &projectionsServiceClient{cc}
}

func (c *projectionsServiceClient) GetData(ctx context.Context, in *GetProjectionDataRequest, opts ...grpc.CallOption) (*GetProjectionDataResponse, error) {
	out := new(GetProjectionDataResponse)
	err := c.cc.Invoke(ctx, "/delivery.ProjectionsService/GetData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProjectionsServiceServer is the server API for ProjectionsService service.
// All implementations must embed UnimplementedProjectionsServiceServer
// for forward compatibility
type ProjectionsServiceServer interface {
	GetData(context.Context, *GetProjectionDataRequest) (*GetProjectionDataResponse, error)
	mustEmbedUnimplementedProjectionsServiceServer()
}

// UnimplementedProjectionsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedProjectionsServiceServer struct {
}

func (UnimplementedProjectionsServiceServer) GetData(context.Context, *GetProjectionDataRequest) (*GetProjectionDataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetData not implemented")
}
func (UnimplementedProjectionsServiceServer) mustEmbedUnimplementedProjectionsServiceServer() {}

// UnsafeProjectionsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProjectionsServiceServer will
// result in compilation errors.
type UnsafeProjectionsServiceServer interface {
	mustEmbedUnimplementedProjectionsServiceServer()
}

func RegisterProjectionsServiceServer(s grpc.ServiceRegistrar, srv ProjectionsServiceServer) {
	s.RegisterService(&ProjectionsService_ServiceDesc, srv)
}

func _ProjectionsService_GetData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetProjectionDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectionsServiceServer).GetData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/delivery.ProjectionsService/GetData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectionsServiceServer).GetData(ctx, req.(*GetProjectionDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ProjectionsService_ServiceDesc is the grpc.ServiceDesc for ProjectionsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProjectionsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "delivery.ProjectionsService",
	HandlerType: (*ProjectionsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetData",
			Handler:    _ProjectionsService_GetData_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "delivery/projection_service.proto",
}
