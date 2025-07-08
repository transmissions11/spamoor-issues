PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

ulimit -n unlimited

spamoor run 10k-config.yaml --rpchost="http://localhost:8545" --privkey=$PRIVATE_KEY --seconds-per-slot 1 > 10klog.txt