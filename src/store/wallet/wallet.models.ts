import API from 'bitcore-wallet-client/ts_build';
import {ReactElement} from 'react';
import {Credentials} from 'bitcore-wallet-client/ts_build/lib/credentials';

export interface KeyMethods {
  _checkCoin: Function;
  _checkNetwork: Function;
  checkPassword: Function;
  compliantDerivation: boolean;
  createAccess: Function;
  createCredentials: Function;
  decrypt: Function;
  derive: Function;
  encrypt: Function;
  fingerPrint: string;
  id: string;
  get: Function;
  getBaseAddressDerivationPath: Function;
  isPrivKeyEncrypted: Function;
  sign: Function;
  toObj: Function;
  use0forBCH: any;
  use44forMultisig: any;
}

export interface KeyProperties {
  compliantDerivation: boolean;
  fingerPrint: string;
  id: string;
  mnemonic: string;
  mnemonicHasPassphrase: boolean;
  version: number;
  xPrivKey: string;
}

export interface Key {
  id: string;
  wallets: Wallet[];
  properties: KeyProperties;
  methods: KeyMethods;
  backupComplete?: boolean;
  show?: boolean;
  totalBalance: number;
  isPrivKeyEncrypted?: boolean;
  keyName?: string;
}

export interface Wallet extends WalletObj, API {}

export interface WalletBalance {
  crypto: string;
  fiat: number;
}

export interface WalletObj {
  id: string;
  keyId: string;
  currencyName: string;
  currencyAbbreviation: string;
  m: number;
  n: number;
  balance: WalletBalance;
  tokens?: string[];
  walletName?: string;
  preferences?: {
    tokenAddresses?: [];
  };
  img: string | ((props?: any) => ReactElement);
}

export interface PriceHistory {
  coin: string;
  priceDisplay: Array<number>;
  percentChange: string;
  currencyPair: string;
}

export interface KeyOptions {
  keyId: any;
  name: any;
  m: any;
  n: any;
  myName: any;
  networkName: string;
  singleAddress: any;
  coin: string;
  extendedPrivateKey: any;
  mnemonic: any;
  derivationStrategy: any;
  secret: any;
  account: any;
  passphrase: any;
  walletPrivKey: any;
  compliantDerivation: any;
  useLegacyCoinType?: boolean;
  useLegacyPurpose?: boolean;
  useNativeSegwit?: boolean;
  words?: string;
  xPrivKey?: string;
  invitationCode?: string;
}

export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

export interface Rate {
  code: string;
  fetchedOn: number;
  name: string;
  rate: number;
  ts: number;
}

export type Rates = {
  [key in string]: Rate[];
};

export interface Balance {
  availableAmount: number;
  availableConfirmedAmount: number;
  byAddress: {address: string; path: string; amount: number}[];
  lockedAmount: number;
  lockedConfirmedAmount: number;
  totalAmount: number;
  totalConfirmedAmount: number;
}

export interface WalletStatus {
  balance: Balance;
  pendingTxps: any[];
  preferences: any;
  serverMessages: any[];
  wallet: Credentials;
}

export enum CacheKeys {
  RATES = 'ratesCacheKey',
  BALANCE = 'balanceCacheKey',
}
