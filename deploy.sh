#!/bin/bash

# Build the LambdaStack doc site.

# If we want to change to named parameters then we can later.

rm -rf public/
HUGO_ENV="${3:-production}" hugo --gc --minify --cleanDestinationDir || exit 1
s3deploy -source=public/ -region="${2:-us-east-1}" -bucket="${1:-www.lambdastackio.com}" -acl='public-read'