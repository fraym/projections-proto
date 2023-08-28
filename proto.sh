#! /bin/bash
for filename in ./management/*.proto; do
	params="$params --go_opt=Mmanagement/$(basename $filename)=github.com/fraym/projections-proto/go/v2/managementpb"
	params="$params --go-grpc_opt=Mmanagement/$(basename $filename)=github.com/fraym/projections-proto/go/v2/managementpb"
done

for filename in ./delivery/*.proto; do
	params="$params --go_opt=Mdelivery/$(basename $filename)=github.com/fraym/projections-proto/go/v2/deliverypb"
	params="$params --go-grpc_opt=Mdelivery/$(basename $filename)=github.com/fraym/projections-proto/go/v2/deliverypb"
done

protoc \
  --proto_path=./ \
	--go_out=./go/ \
	--go-grpc_out=./go/ \
	${params[@]} \
	--go_opt=module=github.com/fraym/projections-proto/go/v2 \
	--go-grpc_opt=module=github.com/fraym/projections-proto/go/v2 \
	**/*.proto
