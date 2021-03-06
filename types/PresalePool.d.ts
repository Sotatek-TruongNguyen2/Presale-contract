/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PresalePoolInterface extends ethers.utils.Interface {
  functions: {
    "buyTokenByETHWithPermission(address,uint256,bytes32[])": FunctionFragment;
    "buyTokenByTokenWithPermission(address,address,uint256,uint256,bytes32[])": FunctionFragment;
    "closeTime()": FunctionFragment;
    "factory()": FunctionFragment;
    "fundingWallet()": FunctionFragment;
    "initialize(bytes32,address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "isFinalized()": FunctionFragment;
    "newOfferedCurrency(address,uint256,uint256)": FunctionFragment;
    "newRoot(bytes32)": FunctionFragment;
    "offeredCurrencies(address)": FunctionFragment;
    "openTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "refundRemainingTokens(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "root()": FunctionFragment;
    "setCloseTime(uint256)": FunctionFragment;
    "setOpenTime(uint256)": FunctionFragment;
    "soldToken()": FunctionFragment;
    "totalRaised()": FunctionFragment;
    "totalSold()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userPurchased(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyTokenByETHWithPermission",
    values: [string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokenByTokenWithPermission",
    values: [string, string, BigNumberish, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "closeTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundingWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      BytesLike,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isFinalized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newOfferedCurrency",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "newRoot", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "offeredCurrencies",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "openTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "refundRemainingTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCloseTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOpenTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "soldToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalRaised",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "totalSold", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userPurchased",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "buyTokenByETHWithPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenByTokenWithPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "closeTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isFinalized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newOfferedCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "offeredCurrencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refundRemainingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCloseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOpenTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "soldToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalRaised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalSold", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userPurchased",
    data: BytesLike
  ): Result;

  events: {
    "BuyTokenByETHWithPermit(address,uint256,uint256,uint256)": EventFragment;
    "BuyTokenByTokenWithPermit(address,address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PoolCreated(bytes32,address,address,address,address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "PoolStatsChanged()": EventFragment;
    "SoldTokenRefunded(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "newRootSettled(bytes32,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyTokenByETHWithPermit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyTokenByTokenWithPermit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolStatsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SoldTokenRefunded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "newRootSettled"): EventFragment;
}

export class PresalePool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PresalePoolInterface;

  functions: {
    buyTokenByETHWithPermission(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "buyTokenByETHWithPermission(address,uint256,bytes32[])"(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    buyTokenByTokenWithPermission(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "buyTokenByTokenWithPermission(address,address,uint256,uint256,bytes32[])"(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    closeTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "closeTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    fundingWallet(overrides?: CallOverrides): Promise<[string]>;

    "fundingWallet()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(bytes32,address,address,address,uint256,uint256,uint256)"(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isFinalized(overrides?: CallOverrides): Promise<[boolean]>;

    "isFinalized()"(overrides?: CallOverrides): Promise<[boolean]>;

    newOfferedCurrency(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "newOfferedCurrency(address,uint256,uint256)"(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    newRoot(
      _root: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "newRoot(bytes32)"(
      _root: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    offeredCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { rate: BigNumber; decimals: BigNumber }
    >;

    "offeredCurrencies(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { rate: BigNumber; decimals: BigNumber }
    >;

    openTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "openTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    refundRemainingTokens(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "refundRemainingTokens(address,uint256)"(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    root(overrides?: CallOverrides): Promise<[string]>;

    "root()"(overrides?: CallOverrides): Promise<[string]>;

    setCloseTime(
      _closeTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCloseTime(uint256)"(
      _closeTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setOpenTime(
      _openTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOpenTime(uint256)"(
      _openTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    soldToken(overrides?: CallOverrides): Promise<[string]>;

    "soldToken()"(overrides?: CallOverrides): Promise<[string]>;

    totalRaised(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalRaised()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSold(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSold()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    userPurchased(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "userPurchased(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  buyTokenByETHWithPermission(
    _beneficiary: string,
    _maxAmount: BigNumberish,
    proof: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "buyTokenByETHWithPermission(address,uint256,bytes32[])"(
    _beneficiary: string,
    _maxAmount: BigNumberish,
    proof: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  buyTokenByTokenWithPermission(
    _offerToken: string,
    _beneficiary: string,
    _amount: BigNumberish,
    _maxAmount: BigNumberish,
    proof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "buyTokenByTokenWithPermission(address,address,uint256,uint256,bytes32[])"(
    _offerToken: string,
    _beneficiary: string,
    _amount: BigNumberish,
    _maxAmount: BigNumberish,
    proof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  closeTime(overrides?: CallOverrides): Promise<BigNumber>;

  "closeTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  fundingWallet(overrides?: CallOverrides): Promise<string>;

  "fundingWallet()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _root: BytesLike,
    _soldToken: string,
    _offerToken: string,
    _fundingWallet: string,
    _duration: BigNumberish,
    _offeredCurrencyRate: BigNumberish,
    _offeredCurrencyDecimal: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(bytes32,address,address,address,uint256,uint256,uint256)"(
    _root: BytesLike,
    _soldToken: string,
    _offerToken: string,
    _fundingWallet: string,
    _duration: BigNumberish,
    _offeredCurrencyRate: BigNumberish,
    _offeredCurrencyDecimal: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isFinalized(overrides?: CallOverrides): Promise<boolean>;

  "isFinalized()"(overrides?: CallOverrides): Promise<boolean>;

  newOfferedCurrency(
    _offerToken: string,
    _rate: BigNumberish,
    _decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "newOfferedCurrency(address,uint256,uint256)"(
    _offerToken: string,
    _rate: BigNumberish,
    _decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  newRoot(
    _root: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "newRoot(bytes32)"(
    _root: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  offeredCurrencies(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; decimals: BigNumber }>;

  "offeredCurrencies(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; decimals: BigNumber }>;

  openTime(overrides?: CallOverrides): Promise<BigNumber>;

  "openTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  refundRemainingTokens(
    _wallet: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "refundRemainingTokens(address,uint256)"(
    _wallet: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  root(overrides?: CallOverrides): Promise<string>;

  "root()"(overrides?: CallOverrides): Promise<string>;

  setCloseTime(
    _closeTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCloseTime(uint256)"(
    _closeTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setOpenTime(
    _openTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOpenTime(uint256)"(
    _openTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  soldToken(overrides?: CallOverrides): Promise<string>;

  "soldToken()"(overrides?: CallOverrides): Promise<string>;

  totalRaised(overrides?: CallOverrides): Promise<BigNumber>;

  "totalRaised()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalSold(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSold()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  userPurchased(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "userPurchased(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    buyTokenByETHWithPermission(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "buyTokenByETHWithPermission(address,uint256,bytes32[])"(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    buyTokenByTokenWithPermission(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "buyTokenByTokenWithPermission(address,address,uint256,uint256,bytes32[])"(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    closeTime(overrides?: CallOverrides): Promise<BigNumber>;

    "closeTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    fundingWallet(overrides?: CallOverrides): Promise<string>;

    "fundingWallet()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(bytes32,address,address,address,uint256,uint256,uint256)"(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isFinalized(overrides?: CallOverrides): Promise<boolean>;

    "isFinalized()"(overrides?: CallOverrides): Promise<boolean>;

    newOfferedCurrency(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "newOfferedCurrency(address,uint256,uint256)"(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    newRoot(_root: BytesLike, overrides?: CallOverrides): Promise<void>;

    "newRoot(bytes32)"(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    offeredCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { rate: BigNumber; decimals: BigNumber }
    >;

    "offeredCurrencies(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { rate: BigNumber; decimals: BigNumber }
    >;

    openTime(overrides?: CallOverrides): Promise<BigNumber>;

    "openTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    refundRemainingTokens(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "refundRemainingTokens(address,uint256)"(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    root(overrides?: CallOverrides): Promise<string>;

    "root()"(overrides?: CallOverrides): Promise<string>;

    setCloseTime(
      _closeTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCloseTime(uint256)"(
      _closeTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOpenTime(
      _openTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setOpenTime(uint256)"(
      _openTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    soldToken(overrides?: CallOverrides): Promise<string>;

    "soldToken()"(overrides?: CallOverrides): Promise<string>;

    totalRaised(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRaised()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSold(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSold()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userPurchased(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "userPurchased(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    BuyTokenByETHWithPermit(
      beneficiary: string | null,
      amount: null,
      maxAmount: null,
      soldTokens: null
    ): EventFilter;

    BuyTokenByTokenWithPermit(
      offerToken: string | null,
      beneficiary: string | null,
      amount: null,
      maxAmount: null,
      soldTokens: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Paused(account: null): EventFilter;

    PoolCreated(
      root: null,
      factory: null,
      soldToken: null,
      fundingWallet: string | null,
      owner: string | null,
      offeredCurrency: string | null,
      offeredCurrencyDecimal: null,
      offeredCurrencyRate: null,
      openTime: null,
      closeTime: null
    ): EventFilter;

    PoolStatsChanged(): EventFilter;

    SoldTokenRefunded(wallet: string | null, amount: null): EventFilter;

    Unpaused(account: null): EventFilter;

    newRootSettled(_oldRoot: null, _newRoot: null): EventFilter;
  };

  estimateGas: {
    buyTokenByETHWithPermission(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "buyTokenByETHWithPermission(address,uint256,bytes32[])"(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    buyTokenByTokenWithPermission(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "buyTokenByTokenWithPermission(address,address,uint256,uint256,bytes32[])"(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    closeTime(overrides?: CallOverrides): Promise<BigNumber>;

    "closeTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    fundingWallet(overrides?: CallOverrides): Promise<BigNumber>;

    "fundingWallet()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(bytes32,address,address,address,uint256,uint256,uint256)"(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isFinalized(overrides?: CallOverrides): Promise<BigNumber>;

    "isFinalized()"(overrides?: CallOverrides): Promise<BigNumber>;

    newOfferedCurrency(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "newOfferedCurrency(address,uint256,uint256)"(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    newRoot(_root: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "newRoot(bytes32)"(
      _root: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    offeredCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "offeredCurrencies(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openTime(overrides?: CallOverrides): Promise<BigNumber>;

    "openTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    refundRemainingTokens(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "refundRemainingTokens(address,uint256)"(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    "root()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCloseTime(
      _closeTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCloseTime(uint256)"(
      _closeTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOpenTime(
      _openTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setOpenTime(uint256)"(
      _openTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    soldToken(overrides?: CallOverrides): Promise<BigNumber>;

    "soldToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalRaised(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRaised()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSold(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSold()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    userPurchased(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "userPurchased(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokenByETHWithPermission(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "buyTokenByETHWithPermission(address,uint256,bytes32[])"(
      _beneficiary: string,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    buyTokenByTokenWithPermission(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "buyTokenByTokenWithPermission(address,address,uint256,uint256,bytes32[])"(
      _offerToken: string,
      _beneficiary: string,
      _amount: BigNumberish,
      _maxAmount: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    closeTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "closeTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundingWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fundingWallet()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(bytes32,address,address,address,uint256,uint256,uint256)"(
      _root: BytesLike,
      _soldToken: string,
      _offerToken: string,
      _fundingWallet: string,
      _duration: BigNumberish,
      _offeredCurrencyRate: BigNumberish,
      _offeredCurrencyDecimal: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isFinalized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isFinalized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newOfferedCurrency(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "newOfferedCurrency(address,uint256,uint256)"(
      _offerToken: string,
      _rate: BigNumberish,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    newRoot(
      _root: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "newRoot(bytes32)"(
      _root: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    offeredCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "offeredCurrencies(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "openTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refundRemainingTokens(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "refundRemainingTokens(address,uint256)"(
      _wallet: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "root()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCloseTime(
      _closeTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCloseTime(uint256)"(
      _closeTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setOpenTime(
      _openTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOpenTime(uint256)"(
      _openTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    soldToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "soldToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalRaised()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSold()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    userPurchased(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userPurchased(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
