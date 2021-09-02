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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PresaleWhitelistInterface extends ethers.utils.Interface {
  functions: {
    "root()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "root", values?: undefined): string;

  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;

  events: {
    "newRootSettled(bytes32,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "newRootSettled"): EventFragment;
}

export class PresaleWhitelist extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PresaleWhitelistInterface;

  functions: {
    root(overrides?: CallOverrides): Promise<[string]>;

    "root()"(overrides?: CallOverrides): Promise<[string]>;
  };

  root(overrides?: CallOverrides): Promise<string>;

  "root()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    root(overrides?: CallOverrides): Promise<string>;

    "root()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    newRootSettled(_oldRoot: null, _newRoot: null): EventFilter;
  };

  estimateGas: {
    root(overrides?: CallOverrides): Promise<BigNumber>;

    "root()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "root()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
