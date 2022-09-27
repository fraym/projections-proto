# projections-proto

This repository contains all protocol buffers for the gRPC api of the projections service.

## usage

1. git clone this project:

```shell
git clone git@github.com:fraym-work/projections-proto.git ./.pb
```

2. generate code from the cloned files
3. remove cloned data again to keep your project clean:

```shell
rm -rf ./.pb
```

## components

### management

Contains all proto files for the management api of the projections service.

### delivery

Contains all proto files for the delivery api of the projections service.
