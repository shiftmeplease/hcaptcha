base64: base64 -d b64wasm > 1.wasm.bin
Decompile: 
./bin/wasm-decompile 1.wasm.bin -o 1.dcmp
./bin/wasm2c 1.wasm.bin -o 1.c



binaryen-version_116/bin/wasm-opt raw.wasm --flatten -Oz --monomorphize --gufa -c -S -o opt.wat
binaryen-version_116/bin/wasm-opt opt.wat --vacuum --simplify-globals --reorder-functions  --remove-unused-names --remove-unused-nonfunction-module-elements --remove-unused-module-elements -Oz -c -S -o opt2.wat
binaryen-version_116/bin/wasm-opt opt2.wat --untee --disable-tail-call --disable-relaxed-simd --code-folding --coalesce-locals-learning  --name-types --once-reduction --print-call-graph --type-refining -reorder-functions-by-name -c -S -o opt3.wat
binaryen-version_116/bin/wasm-opt opt3.wat --flatten --local-cse  --merge-blocks --rereloop --simplify-locals  --remove-unused-brs --merge-locals --vacuum -S -o opt4.wat
binaryen-version_116/bin/wasm-opt opt4.wat -O4 --vacuum -S -o opt5.wat
binaryen-version_116/bin/wasm-opt opt5.wat -O4 -all --vacuum -S -o opt6.wat

binaryen-version_116/bin/wasm-opt opt6.wat --flatten --directize --precompute-propagate --remove-unused-brs  --simplify-locals-nonesting  --remove-unused-names --cfp --inlining-optimizing  --optimize-for-js -S -o opt7.wat
binaryen-version_116/bin/wasm-opt opt6.wat --poppify -S -o opt6_poppy.wat
<!--   

--rereloop -Oz --vacuum --simplify-globals --roundtrip --reorder-functions --rereloop --remove-unused-names --remove-unused-nonfunction-module-elements --remove-unused-module-elements -Oz -c -S -o opt_wasm

raw.wasm --flatten -Oz --monomorphize --gufa  --rereloop -Oz --vacuum --simplify-globals --roundtrip --reorder-functions --rereloop --remove-unused-names --remove-unused-nonfunction-module-elements --remove-unused-module-elements -Oz -c -S -o opt_wasm


-Oz --monomorphize --gufa --flatten --rereloop -Oz --vacuum --simplify-globals --roundtrip --reorder-functions --rereloop --remove-unused-names --remove-unused-nonfunction-module-elements --remove-unused-module-elements -Oz -c -S

-osm -->