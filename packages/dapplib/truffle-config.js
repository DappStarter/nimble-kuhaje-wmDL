require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan remember stick around heavy civil army gesture'; 
let testAccounts = [
"0xf379cb599612834703ead3ffa2a1a0d1b652fc6b55fe5d559a7e6a68ce590447",
"0x13300bb7f99a0d811689bcfb77372b83dd5358d4a65ee113b9e4d2339938f238",
"0x2eb328d1b81bf62e615014e0967aaf72f7677adc3e88013239d9b343e7aac6c7",
"0x4808810c900d92f5df9ff8000a7608ceb1ce6b8c416064b20d4dbc1157f3005a",
"0x80a3d19b51f1d765d7d43eed09a42bda9abba99f575c8915c7dfccb89b89b73d",
"0x360d9e3f02c38ef88cb84af00f71c2c6aed503e1ec1f42019d815ccc7dbe0f1a",
"0x1d1941e6b8a75f5218d01d685282bdaa1a22adaa0a104667bf99b490a9ae4e45",
"0xc47a982eccbd9fdce60c936f8751d69f38ef36c9fbd8e2b9a8a577cc139f9912",
"0x0ed4383cfecf37071b8265fca92a385c60002ebb25de27cefcc2731c917bbe42",
"0x562fd4c5dce1430139b39396047820a084b4f1fc6bef58a744b5e80cda0c30cd"
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

