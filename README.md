# Spamoor Issues

## 1k Spam

`./start-reth.sh`

**Question: Why are pending numbers so high from the start?**

```sh
❯ ./spam-1k.sh
INFO[0002] starting spamoor run command                  buildtime="2025-07-08T20:25:01Z" version=git-d013cd6
INFO[0002] initialized client pool with 1 clients (chain id: 1337)  module=clientpool
INFO[0002] client check completed (1 good clients, 0 bad clients)  module=clientpool
INFO[0002] initialized root wallet (addr: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 balance: 1000000 ETH, nonce: 0)
INFO[0002] Preparing to run 1 spammer(s)
INFO[0002] Preparing wallets for all spammers...
INFO[0002] processed block 1:  0 total tx, 0 tx confirmed from 0 wallets (4.793709ms, 6.083µs)
INFO[0002] processed block 2:  0 total tx, 0 tx confirmed from 0 wallets (1.135583ms, 7.583µs)
INFO[0002] processed block 3:  0 total tx, 0 tx confirmed from 0 wallets (523.625µs, 667ns)
INFO[0002] processed block 4:  0 total tx, 0 tx confirmed from 0 wallets (5.508167ms, 2.167µs)
INFO[0002] funding child wallets... (0/1000)             module=walletpool name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0005] processed block 5:  0 total tx, 0 tx confirmed from 0 wallets (1.115834ms, 3.833µs)
INFO[0005] processed block 6:  200 total tx, 200 tx confirmed from 1 wallets (17.851667ms, 17.8725ms)
INFO[0005] funding child wallets... (200/1000)           module=walletpool name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0005] processed block 7:  0 total tx, 0 tx confirmed from 0 wallets (1.305625ms, 1.459µs)
INFO[0008] processed block 8:  0 total tx, 0 tx confirmed from 0 wallets (760.042µs, 4.167µs)
INFO[0008] processed block 9:  200 total tx, 200 tx confirmed from 1 wallets (18.407083ms, 16.608292ms)
INFO[0008] funding child wallets... (400/1000)           module=walletpool name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0008] processed block 10:  0 total tx, 0 tx confirmed from 0 wallets (1.245084ms, 1.125µs)
INFO[0008] processed block 11:  0 total tx, 0 tx confirmed from 0 wallets (179.542µs, 4µs)
INFO[0011] processed block 12:  200 total tx, 200 tx confirmed from 1 wallets (20.570875ms, 17.3255ms)
INFO[0011] funding child wallets... (600/1000)           module=walletpool name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0011] processed block 13:  0 total tx, 0 tx confirmed from 0 wallets (2.300458ms, 2.041µs)
INFO[0014] processed block 14:  0 total tx, 0 tx confirmed from 0 wallets (812.458µs, 9.125µs)
INFO[0014] processed block 15:  200 total tx, 200 tx confirmed from 1 wallets (17.546125ms, 17.087542ms)
INFO[0014] funding child wallets... (800/1000)           module=walletpool name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0014] processed block 16:  0 total tx, 0 tx confirmed from 0 wallets (718.458µs, 1.375µs)
INFO[0014] processed block 17:  0 total tx, 0 tx confirmed from 0 wallets (161.708µs, 875ns)
INFO[0017] processed block 18:  200 total tx, 200 tx confirmed from 1 wallets (19.792083ms, 15.20825ms)
INFO[0017] funding child wallets... (1000/1000)          module=walletpool name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0017] processed block 19:  0 total tx, 0 tx confirmed from 0 wallets (298.5µs, 2.208µs)
INFO[0017] initialized 1000 child wallets                module=walletpool name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0017] Wallets prepared for spammer 0 (0 Value Transaction Spammer (1k))
INFO[0017] Starting all spammers...
INFO[0017] Starting spammer 0: 0 Value Transaction Spammer (1k) (eoatx)
INFO[0017] starting scenario: eoatx                      name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0017] processed block 20:  0 total tx, 0 tx confirmed from 0 wallets (207.959µs, 1.083µs)
INFO[0017] block 20: submitted=0, pending=1, confirmed=0, throughput: 5B=0.00 tx/B, 20B=0.00 tx/B, 60B=0.00 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=0
INFO[0020] processed block 21:  5 total tx, 5 tx confirmed from 5 wallets (1.027833ms, 699.666µs)
INFO[0020] block 21: submitted=5, pending=2968, confirmed=5, throughput: 5B=2.50 tx/B, 20B=2.50 tx/B, 60B=2.50 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=5
INFO[0020] processed block 22:  1005 total tx, 1005 tx confirmed from 1000 wallets (62.914958ms, 60.101042ms)
INFO[0020] block 22: submitted=1005, pending=2139, confirmed=1005, throughput: 5B=336.67 tx/B, 20B=336.67 tx/B, 60B=336.67 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=1000
INFO[0021] processed block 23:  985 total tx, 985 tx confirmed from 985 wallets (57.491334ms, 59.043625ms)
INFO[0021] block 23: submitted=985, pending=1313, confirmed=985, throughput: 5B=498.75 tx/B, 20B=498.75 tx/B, 60B=498.75 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=985
INFO[0024] processed block 24:  983 total tx, 983 tx confirmed from 983 wallets (56.111334ms, 58.95525ms)
INFO[0024] block 24: submitted=983, pending=3449, confirmed=983, throughput: 5B=595.60 tx/B, 20B=595.60 tx/B, 60B=595.60 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=983
INFO[0024] processed block 25:  982 total tx, 982 tx confirmed from 982 wallets (56.370833ms, 60.178584ms)
INFO[0024] block 25: submitted=982, pending=2621, confirmed=982, throughput: 5B=792.00 tx/B, 20B=660.00 tx/B, 60B=660.00 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=982
INFO[0024] processed block 26:  985 total tx, 985 tx confirmed from 985 wallets (56.86275ms, 59.450333ms)
INFO[0024] block 26: submitted=985, pending=1792, confirmed=985, throughput: 5B=988.00 tx/B, 20B=706.43 tx/B, 60B=706.43 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=985
INFO[0024] processed block 27:  982 total tx, 982 tx confirmed from 982 wallets (57.346625ms, 58.985042ms)
INFO[0024] block 27: submitted=982, pending=967, confirmed=982, throughput: 5B=983.40 tx/B, 20B=740.88 tx/B, 60B=740.88 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=982
INFO[0027] processed block 28:  977 total tx, 977 tx confirmed from 977 wallets (57.506334ms, 58.495542ms)
INFO[0027] block 28: submitted=977, pending=3114, confirmed=977, throughput: 5B=981.80 tx/B, 20B=767.11 tx/B, 60B=767.11 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=977
INFO[0028] processed block 29:  985 total tx, 985 tx confirmed from 985 wallets (56.296083ms, 59.489542ms)
INFO[0028] block 29: submitted=985, pending=2286, confirmed=985, throughput: 5B=982.20 tx/B, 20B=788.90 tx/B, 60B=788.90 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=985
INFO[0028] processed block 30:  982 total tx, 982 tx confirmed from 982 wallets (58.187708ms, 59.525333ms)
INFO[0028] block 30: submitted=982, pending=1461, confirmed=982, throughput: 5B=982.20 tx/B, 20B=806.45 tx/B, 60B=806.45 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=982
INFO[0031] processed block 31:  985 total tx, 985 tx confirmed from 985 wallets (58.523459ms, 59.696041ms)
INFO[0031] block 31: submitted=985, pending=3603, confirmed=985, throughput: 5B=982.20 tx/B, 20B=821.33 tx/B, 60B=821.33 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=985
INFO[0031] processed block 32:  978 total tx, 978 tx confirmed from 978 wallets (55.157ms, 58.601541ms)
INFO[0031] block 32: submitted=978, pending=2780, confirmed=978, throughput: 5B=981.40 tx/B, 20B=833.38 tx/B, 60B=833.38 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=978
INFO[0031] processed block 33:  984 total tx, 984 tx confirmed from 984 wallets (57.301333ms, 60.030167ms)
INFO[0031] block 33: submitted=984, pending=1961, confirmed=984, throughput: 5B=982.80 tx/B, 20B=844.14 tx/B, 60B=844.14 tx/B  name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0 wallets=984
^CINFO[0033] Received interrupt signal, shutting down...
INFO[0033] scenario eoatx finished.                      name="0 Value Transaction Spammer (1k)" scenario=eoatx spammer=0
INFO[0033] All spammers completed
```

## 10k Spam

**Question: Why is spamoor failing to make tcp requests?**

`./start-reth.sh`

```sh
❯ ./spam-10k.sh
INFO[0002] starting spamoor run command                  buildtime="2025-07-08T20:25:01Z" version=git-d013cd6
INFO[0002] initialized client pool with 1 clients (chain id: 1337)  module=clientpool
INFO[0002] client check completed (1 good clients, 0 bad clients)  module=clientpool
INFO[0002] initialized root wallet (addr: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 balance: 999198 ETH, nonce: 400)
INFO[0002] Preparing to run 1 spammer(s)
INFO[0002] Preparing wallets for all spammers...
INFO[0002] funding child wallets... (0/600)              module=walletpool name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0
INFO[0005] processed block 25:  200 total tx, 200 tx confirmed from 1 wallets (15.614833ms, 15.681792ms)
INFO[0005] funding child wallets... (200/600)            module=walletpool name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0
INFO[0005] processed block 26:  0 total tx, 0 tx confirmed from 0 wallets (2.139791ms, 1.25µs)
INFO[0008] processed block 27:  0 total tx, 0 tx confirmed from 0 wallets (505.75µs, 8.125µs)
INFO[0008] processed block 28:  200 total tx, 200 tx confirmed from 1 wallets (18.293334ms, 17.334916ms)
INFO[0008] funding child wallets... (400/600)            module=walletpool name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0
INFO[0008] processed block 29:  0 total tx, 0 tx confirmed from 0 wallets (1.820125ms, 1.834µs)
INFO[0008] processed block 30:  0 total tx, 0 tx confirmed from 0 wallets (145.625µs, 667ns)
INFO[0011] processed block 31:  200 total tx, 200 tx confirmed from 1 wallets (11.60625ms, 12.823959ms)
INFO[0011] funding child wallets... (600/600)            module=walletpool name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0
INFO[0011] processed block 32:  0 total tx, 0 tx confirmed from 0 wallets (232µs, 708ns)
INFO[0011] initialized 1000 child wallets                module=walletpool name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0
INFO[0011] Wallets prepared for spammer 0 (0 Value Transaction Spammer (10k))
INFO[0011] Starting all spammers...
INFO[0011] Starting spammer 0: 0 Value Transaction Spammer (10k) (eoatx)
INFO[0011] starting scenario: eoatx                      name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0
INFO[0011] processed block 33:  0 total tx, 0 tx confirmed from 0 wallets (425.75µs, 1.875µs)
INFO[0011] block 33: submitted=0, pending=8, confirmed=0, throughput: 5B=0.00 tx/B, 20B=0.00 tx/B, 60B=0.00 tx/B  name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0 wallets=0
INFO[0015] processed block 34:  7724 total tx, 7724 tx confirmed from 1000 wallets (513.241625ms, 549.973833ms)
INFO[0015] block 34: submitted=7724, pending=32935, confirmed=7724, throughput: 5B=3862.00 tx/B, 20B=3862.00 tx/B, 60B=3862.00 tx/B  name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0 wallets=1000
INFO[0017] processed block 35:  9071 total tx, 9071 tx confirmed from 1000 wallets (587.738084ms, 745.238291ms)
INFO[0017] block 35: submitted=9071, pending=40006, confirmed=9071, throughput: 5B=5598.33 tx/B, 20B=5598.33 tx/B, 60B=5598.33 tx/B  name="0 Value Transaction Spammer (10k)" scenario=eoatx spammer=0 wallets=1000
WARN[0021] Resyncing pending nonce for 0xA7fc620a53CeB1EC4C0533C4024C32674Bf4dc29 from 65 to 64
WARN[0021] could not send transaction: Post "http://localhost:8545": dial tcp [::1]:8545: connect: connection refused  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=233
^C^[[AINFO[0021] Received interrupt signal, shutting down...
WARN[0021] could not send transaction: Post "http://localhost:8545": context canceled  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=242
WARN[0021] could not send transaction: Post "http://localhost:8545": dial tcp [::1]:8545: connect: connection refused  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=243
WARN[0021] could not send transaction: Post "http://localhost:8545": dial tcp [::1]:8545: connect: connection refused  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=244
WARN[0021] could not send transaction: Post "http://localhost:8545": dial tcp [::1]:8545: connect: connection refused  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=248
WARN[0021] could not send transaction: Post "http://localhost:8545": context canceled  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=253
WARN[0021] could not send transaction: Post "http://localhost:8545": context canceled  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=255
WARN[0021] could not send transaction: Post "http://localhost:8545": context canceled  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=256
WARN[0021] could not send transaction: Post "http://localhost:8545": context canceled  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=260
WARN[0021] could not send transaction: Post "http://localhost:8545": context canceled  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=266
WARN[0021] could not send transaction: Post "http://localhost:8545": dial tcp [::1]:8545: connect: connection refused  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=270
WARN[0021] could not send transaction: Post "http://localhost:8545": dial tcp [::1]:8545: connect: connection refused  name="0 Value Transaction Spammer (10k)" rpc="localhost:8545" scenario=eoatx spammer=0 wallet=272
```
