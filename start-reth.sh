node clear-reth-dev-db.js

ulimit -n unlimited

echo $(ulimit -n)

reth node --http --http.addr 0.0.0.0 \
--http.port 8545 --http.api all \
--dev --dev.block-time 1s \
--engine.disable-precompile-cache \
--builder.gaslimit 10000000000000 \
--txpool.pending-max-count 10000000000000 \
--txpool.basefee-max-count 10000000000000 \
--txpool.queued-max-count 10000000000000 \
--txpool.max-account-slots 10000000000000 \
--txpool.max-pending-txns 10000000000000 \
--txpool.max-new-txns 10000000000000 \
--txpool.additional-validation-tasks 8 \
 --rpc.max-connections max \
--max-tx-reqs 1000000 \
--rpc.max-request-size 1000000 \
--rpc.max-response-size 1000000 \
--chain dev.json