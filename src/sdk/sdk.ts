/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Data } from "./data.js";
import { Ipfs } from "./ipfs.js";
import { Kms } from "./kms.js";
import { Monitor } from "./monitor.js";
import { Network } from "./network.js";
import { Project } from "./project.js";
import { SmartContract } from "./smartcontract.js";
import { SmartContractManagement } from "./smartcontractmanagement.js";
import { TransactionManager } from "./transactionmanager.js";
import { Wallet } from "./wallet.js";
import { Webhook } from "./webhook.js";

export class Starton extends ClientSDK {
  private _data?: Data;
  get data(): Data {
    return (this._data ??= new Data(this.options$));
  }

  private _wallet?: Wallet;
  get wallet(): Wallet {
    return (this._wallet ??= new Wallet(this.options$));
  }

  private _ipfs?: Ipfs;
  get ipfs(): Ipfs {
    return (this._ipfs ??= new Ipfs(this.options$));
  }

  private _kms?: Kms;
  get kms(): Kms {
    return (this._kms ??= new Kms(this.options$));
  }

  private _transactionManager?: TransactionManager;
  get transactionManager(): TransactionManager {
    return (this._transactionManager ??= new TransactionManager(this.options$));
  }

  private _network?: Network;
  get network(): Network {
    return (this._network ??= new Network(this.options$));
  }

  private _project?: Project;
  get project(): Project {
    return (this._project ??= new Project(this.options$));
  }

  private _smartContractManagement?: SmartContractManagement;
  get smartContractManagement(): SmartContractManagement {
    return (this._smartContractManagement ??= new SmartContractManagement(
      this.options$,
    ));
  }

  private _smartContract?: SmartContract;
  get smartContract(): SmartContract {
    return (this._smartContract ??= new SmartContract(this.options$));
  }

  private _monitor?: Monitor;
  get monitor(): Monitor {
    return (this._monitor ??= new Monitor(this.options$));
  }

  private _webhook?: Webhook;
  get webhook(): Webhook {
    return (this._webhook ??= new Webhook(this.options$));
  }
}
