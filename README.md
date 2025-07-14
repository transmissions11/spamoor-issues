# Contender

0. Install reth (https://reth.rs/installation/installation.html)
1. `./start-reth.sh`
2. `./spam.sh`

Output:

```
<snip>
2025-07-14T23:30:49.042112Z  INFO contender::util::utils: 352: funding tx confirmed (0x5be62788b132dd04fc40704dfdc88036682eeea3002f3e3a0ee7f704bf003567)
2025-07-14T23:30:49.042478Z  INFO contender::util::utils: 352: funding tx confirmed (0xfffb4a7386364877676d624628ef86b18bd585142caccd578f11bd569b40146d)
2025-07-14T23:30:49.042893Z  INFO contender::util::utils: 352: funding tx confirmed (0x5eb1d20bc9e0abcce31e1269841fbb89d4d5f037ba2971bea53e0e3971634906)
2025-07-14T23:30:49.043202Z  INFO contender::util::utils: 352: funding tx confirmed (0x14b4f45fe3282de20dcde98dccea461c74eba96349bd40ed030d4b471f78d7b0)
2025-07-14T23:30:49.043639Z  INFO contender::util::utils: 352: funding tx confirmed (0x0df52a54c943a3fe3146a06d958b252e396ae4a6ed52fdf7ff3898286df7a036)
2025-07-14T23:30:49.043969Z  INFO contender::util::utils: 352: funding tx confirmed (0x037546b9c10979b68a78d35f7d4d542a323b47999d3103862b7da3a345db256b)
2025-07-14T23:30:49.044306Z  INFO contender::util::utils: 352: funding tx confirmed (0xc77c0b9fecf9b88e78d0b0eea4430ba1be1556163cb995b802b286f9499c8c52)
Error: rpc client failed to get chain id Transport(Custom(reqwest::Error { kind: Request, source: hyper_util::client::legacy::Error(Connect, ConnectError("tcp connect error", [::1]:8545, Os { code: 61, kind: ConnectionRefused, message: "Connection refused" })) }))
❯
```
