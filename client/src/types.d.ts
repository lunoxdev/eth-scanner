export interface ScanResults {
  address: string;
  balance: string;
  isContract: boolean;
  nonce: number;
  ens: string;
  blockNumber: number;
  blockHash: string;
  error: string;
}

export interface InputLightEffectTypes {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ListResult {
  address: string;
  balance: string;
  isContract: boolean;
  nonce: number;
  ens: string;
  blockNumber: number;
  blockHash: string;
  contractCode?: string;
}