// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.5
// source: management/service.proto

package managementpb

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

// ServiceClient is the client API for Service service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServiceClient interface {
	CreateProjections(ctx context.Context, in *CreateProjectionsRequest, opts ...grpc.CallOption) (*CreateProjectionsResponse, error)
	UpdateProjections(ctx context.Context, in *UpdateProjectionsRequest, opts ...grpc.CallOption) (*UpdateProjectionsResponse, error)
	RemoveProjections(ctx context.Context, in *RemoveProjectionsRequest, opts ...grpc.CallOption) (*RemoveProjectionsResponse, error)
	GetProjections(ctx context.Context, in *GetProjectionsRequest, opts ...grpc.CallOption) (*GetProjectionsResponse, error)
}

type serviceClient struct {
	cc grpc.ClientConnInterface
}

func NewServiceClient(cc grpc.ClientConnInterface) ServiceClient {
	return &serviceClient{cc}
}

func (c *serviceClient) CreateProjections(ctx context.Context, in *CreateProjectionsRequest, opts ...grpc.CallOption) (*CreateProjectionsResponse, error) {
	out := new(CreateProjectionsResponse)
	err := c.cc.Invoke(ctx, "/management.Service/CreateProjections", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) UpdateProjections(ctx context.Context, in *UpdateProjectionsRequest, opts ...grpc.CallOption) (*UpdateProjectionsResponse, error) {
	out := new(UpdateProjectionsResponse)
	err := c.cc.Invoke(ctx, "/management.Service/UpdateProjections", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) RemoveProjections(ctx context.Context, in *RemoveProjectionsRequest, opts ...grpc.CallOption) (*RemoveProjectionsResponse, error) {
	out := new(RemoveProjectionsResponse)
	err := c.cc.Invoke(ctx, "/management.Service/RemoveProjections", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GetProjections(ctx context.Context, in *GetProjectionsRequest, opts ...grpc.CallOption) (*GetProjectionsResponse, error) {
	out := new(GetProjectionsResponse)
	err := c.cc.Invoke(ctx, "/management.Service/GetProjections", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServiceServer is the server API for Service service.
// All implementations must embed UnimplementedServiceServer
// for forward compatibility
type ServiceServer interface {
	CreateProjections(context.Context, *CreateProjectionsRequest) (*CreateProjectionsResponse, error)
	UpdateProjections(context.Context, *UpdateProjectionsRequest) (*UpdateProjectionsResponse, error)
	RemoveProjections(context.Context, *RemoveProjectionsRequest) (*RemoveProjectionsResponse, error)
	GetProjections(context.Context, *GetProjectionsRequest) (*GetProjectionsResponse, error)
	mustEmbedUnimplementedServiceServer()
}

// UnimplementedServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServiceServer struct {
}

func (UnimplementedServiceServer) CreateProjections(context.Context, *CreateProjectionsRequest) (*CreateProjectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProjections not implemented")
}
func (UnimplementedServiceServer) UpdateProjections(context.Context, *UpdateProjectionsRequest) (*UpdateProjectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProjections not implemented")
}
func (UnimplementedServiceServer) RemoveProjections(context.Context, *RemoveProjectionsRequest) (*RemoveProjectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveProjections not implemented")
}
func (UnimplementedServiceServer) GetProjections(context.Context, *GetProjectionsRequest) (*GetProjectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProjections not implemented")
}
func (UnimplementedServiceServer) mustEmbedUnimplementedServiceServer() {}

// UnsafeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServiceServer will
// result in compilation errors.
type UnsafeServiceServer interface {
	mustEmbedUnimplementedServiceServer()
}

func RegisterServiceServer(s grpc.ServiceRegistrar, srv ServiceServer) {
	s.RegisterService(&Service_ServiceDesc, srv)
}

func _Service_CreateProjections_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateProjectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).CreateProjections(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/CreateProjections",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).CreateProjections(ctx, req.(*CreateProjectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_UpdateProjections_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProjectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).UpdateProjections(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/UpdateProjections",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).UpdateProjections(ctx, req.(*UpdateProjectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_RemoveProjections_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveProjectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).RemoveProjections(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/RemoveProjections",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).RemoveProjections(ctx, req.(*RemoveProjectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GetProjections_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetProjectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetProjections(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/GetProjections",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetProjections(ctx, req.(*GetProjectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Service_ServiceDesc is the grpc.ServiceDesc for Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "management.Service",
	HandlerType: (*ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateProjections",
			Handler:    _Service_CreateProjections_Handler,
		},
		{
			MethodName: "UpdateProjections",
			Handler:    _Service_UpdateProjections_Handler,
		},
		{
			MethodName: "RemoveProjections",
			Handler:    _Service_RemoveProjections_Handler,
		},
		{
			MethodName: "GetProjections",
			Handler:    _Service_GetProjections_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "management/service.proto",
}
