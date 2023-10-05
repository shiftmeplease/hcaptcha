base64: base64 -d b64wasm > 1.wasm.bin
Decompile: 
./bin/wasm-decompile 1.wasm.bin -o 1.dcmp
./bin/wasm2c 1.wasm.bin -o 1.c