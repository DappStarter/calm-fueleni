require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food guard razor ranch punch hard light army gather'; 
let testAccounts = [
"0x608212beaf9484c16eaa54c11447d87803d241be4bb6ccdb32da69f1747f0cb8",
"0x3f47f7f9ceaa8c4bc602a5f61d64ae7fe664bfc22cd9960342adb8fba284b84c",
"0xcd991618cf7349261c2fdf3efc695b891cd4e52ee9534844453e2f6c059bbf78",
"0xa43c6d88e23fbb1052690d83dbecd1d703518ed2248d13ec79ebde0f5ddf44bc",
"0x98a59cbc7a8901e9305dccfd4070f2969d0bffa0e9083faa5d0c7679fe2210dc",
"0xca7560c1fb0d0d2f23979487eb3ce42d07a8256f5ae1ce3014d58d2dd6fd101a",
"0x94c0b5067144830a652734f1205dddcb54d0781384049b9ba5084c6d602500ae",
"0x93252fb0d9e465bd4c2480336eeeb3fb69c3ed389b4fa1c56c38b978f63f808c",
"0x62d2e809011b6cd562bb358a5dfc3ff44c60ae9b15a6914cc18d122fd7b20f8e",
"0xb5842223a9f86772ecf9aa33b49eef8aaef70caef984b46a18d532b9f149e3df"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

