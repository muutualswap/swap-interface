import { ChainId } from '@luaswap/sdk'

export default {
  rpc: 'https://wallet.tomochain.com/api/luaswap/rpc',
  rpcTomochain: 'https://rpc.tomochain.com',
  chainId: 1,
  apiETH: 'https://wallet.tomochain.com/api/luaswap',
  apiTOMO: 'https://wallet.tomochain.com/api/luaswap/tomochain'
}

export const START_REWARD_AT_BLOCK: { [chainId in ChainId]: number } = {
  1: 10950600,
  3: 10950600,
  4: 10950600,
  5: 10950600,
  42: 10950600,
  7879: 32787447,
  7880: 32787447,
  99: 32787447
}

export const NUMBER_BLOCKS_PER_YEAR: { [chainId in ChainId]: number } = {
  1: 2425000,
  3: 2425000,
  4: 2425000,
  5: 2425000,
  42: 2425000,
  7879: 12614400,
  7880: 12614400,
  99: 12614400
}

export const RPC_URL: { [chainId in ChainId]: string } = {
  1: 'https://wallet.tomochain.com/api/luaswap/rpc',
  3: '',
  4: '',
  5: '',
  42: '',
  7879: 'https://rpc.swapdex.net',
  7880: 'https://rpc.testnet.swapdex.net/',
  99: ''
}

export const API_URL: { [chainId in ChainId]: string } = {
  1: 'https://wallet.tomochain.com/api/luaswap',
  3: '',
  4: '',
  5: '',
  42: '',
  7879: 'https://wallet.tomochain.com/api/luaswap/',
  7880: '',
  99: ''
}

export const LUA_CONTRACT: { [chainId in ChainId]: string } = {
  1: '0xB1f66997A5760428D3a87D68b90BfE0aE64121cC',
  3: '',
  4: '',
  5: '',
  42: '',
  7879: '0x7262fa193e9590B2E075c3C16170f3f2f32F5C74',
  7880: '',
  99: ''
}
