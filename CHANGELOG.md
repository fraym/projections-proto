# v2.0.0

-   (bc) New migration API
-   (feature) Add crud data transformation streaming rpc

# v1.0.0

-   (feature) Add wait condition to get data rpc

# v1.0.0-alpha.17

-   (bug) Return id when upserting data

# v1.0.0-alpha.16

-   (feature) Specify correlation and causation ids

# v1.0.0-alpha.15

-   (feature) Add numer of total items to pagination data
-   (bc) Use int64 instead of int32 for pagination

# v1.0.0-alpha.14

-   (bug) Fix `GetProjectionDataListRequest` request

# v1.0.0-alpha.13

-   (bc) Extend and refactor delivery api

# v1.0.0-alpha.12

-   (feature) Add `DataOrder` to `GetProjectionDataRequest`

# v1.0.0-alpha.11

-   (bug) Fix `DataFilter`

# v1.0.0-alpha.10

-   (feature) Add `DataFilter` to `GetProjectionDataRequest`

# v1.0.0-alpha.9

-   (feature) Add `returnEmptyDataIfNotFound` to `GetProjectionDataRequest`

# v1.0.0-alpha.8

-   (bc) Update org name

# v1.0.0-alpha.7

-   (bc) Remove deprecated go code

# v1.0.0-alpha.6

-   (bc) Prevent naming conflicts
-   (bc) Transport schema as object instead of strings

# v1.0.0-alpha.5

-   (feature) Add generated go code
-   (feature) Add generated nodejs code

# v1.0.0-alpha.4

-   (bug) Fix `GetDataResponse`: use `result` field of type `repeated Data`

# v1.0.0-alpha.3

-   (bug) Add missing `tenantId` field to `GetDataRequest`

# v1.0.0-alpha.2

-   (bug) Fix `GetProjectionsResponse` field naming
-   (internal) Fix file naming
-   (internal) Add codeowners

# v1.0.0-alpha.1

-   (feature) Add management
-   (feature) Add delivery
