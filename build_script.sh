#!/bin/bash

mkdir build
zip -r ./build/app.nw * -x /build/\*
wget -O ./build/nw.tar.gz https://dl.nwjs.io/v0.25.3/nwjs-v0.25.3-linux-x64.tar.gz
mkdir ./build/nw
tar -xvzf ./build/nw.tar.gz --strip 1 -C ./build/nw
rm ./build/nw.tar.gz
cat ./build/nw/nw ./build/app.nw > ./build/app && chmod +x ./build/app 