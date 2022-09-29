import { Collector } from '../../src/collector'
import { FEE, JoyIDInfo } from '../../src'
import { generateJoyIDInfoTx } from '../../src/service'

// const FROM_PRIVATE_KEY = '0x4271c23380932c74a041b4f56779e5ef60e808a127825875f906260f1f657761'
// const FROM_ADDRESS = 'ckt1q3excgzey7lepv7per00j7fn8edqf78c9c2cu234mm595e6s6wx0zqdwwhnxdxd504kp0r2a9q4wa90n8sys2lse0p2jy'


const run = async (FROM_PRIVATE_KEY: string, FROM_ADDRESS: string) => {
  const collector = new Collector({ ckbNodeUrl: 'https://testnet.ckbapp.dev/rpc', ckbIndexerUrl: 'https://testnet.ckbapp.dev/indexer' })
  const joyId: JoyIDInfo = {
    name: "Kelly",
    description: "Web3 Test Development-批量注册1w",
    avatar: "https://s1.328888.xyz/2022/09/27/skyty.webp",
    pubKey: "0xd7460a761595c746ee5ca9e0b7c400b2d3548ba651d6355ed5ebbba25600ae004db7f64fabb61039b5996516000b823e6a36e98c4769088ab4c841007656ef20",
    credentialId: "0xab2fdaec84c51843812a278b0b0c2b8bb7cad9ed1d06aba90497cdc8f002bf6b",
    alg: "0x01",
    // cotaCellId: "",
    subKeys: [
      {
        pubKey: "0xb6aa95ba49e3105293033b826e5200f988b3a3027a47cf7d06136bb6190099cb937099cb2df4d475da7e02bd009f3da50216645d744ee04864e1b200cb949e79",
        credentialId: "0x6dea4d99f4bd069812a82362d93c905d0faa3ac67a26adf5046c187903cd27fe",
        alg: "0x01",
      }, {
        pubKey: "0x1a8e3ddde1739f85a0ff7f8e8908003dd1ca4930f6421e6eb968e27460006399bc8700e910084302c308fd15000becaff7750078715267a8b79d3e002ee57852",
        credentialId: "0xe4c6b531009f12b656a6e87931610a918ea5e6423c31bd9da16f534fa3a7a218",
        alg: "0x01",
      }
    ],
  }

  await generateJoyIDInfoTx(collector, FROM_PRIVATE_KEY, FROM_ADDRESS, joyId, FEE, false)
}


import * as path from 'path'
import { readAddrCsv, getPrivAddr } from './readAddrCsv'

const waitrun = async () => {
  const csvFileName = 'joyid_privekey_address_1664270975992_9900.csv'
  let csvFilePath = path.resolve(__dirname, `../resource/${csvFileName}`)
  let table = readAddrCsv(csvFilePath)
  // for (let i = 1; i < table.length - 1; i++) { 
  for (let i = 4; i < 451; i++) {
    console.log(i)
    let receiver = getPrivAddr(table, i)
    await run(receiver.BobPrivkey, receiver.BobAddr)
  }
}

waitrun()


