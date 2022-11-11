import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 56,
    BSCTESTNET = 97
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
// export declare const FACTORY_ADDRESS = "0x1730484cd33Fb46B22177f3Ffe8E002b4D7E3600";
// export declare const INIT_CODE_HASH = "0xe1a4292e78925c53bcb106503ec2c9a30c35f3fde4c084afc5af611bcffde55b";
export declare const FACTORY_ADDRESS = "0x523aE64cF1c91C1a2AEE536e6C8903630A745ba1";
export declare const INIT_CODE_HASH = "0x8ec78f39ec52729385c36d930a3d7a921b2697863627841fd4f89f88a1f2eee5";

// export declare const FACTORY_ADDRESS = "0x038Ec5ab93EEAF0DAfFcf1212C2eaa13a7E66aa5";
// export declare const INIT_CODE_HASH = "0xa132003d5106f0dbf544f14c070a6c70581b2d60176f472b8257b9867c6613de";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
