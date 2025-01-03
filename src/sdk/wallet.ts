/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { walletCreate } from "../funcs/walletCreate.js";
import { walletDelete } from "../funcs/walletDelete.js";
import { walletGetAll } from "../funcs/walletGetAll.js";
import { walletGetOne } from "../funcs/walletGetOne.js";
import { walletImport } from "../funcs/walletImport.js";
import { walletRequestFaucet } from "../funcs/walletRequestFaucet.js";
import { walletResyncNonce } from "../funcs/walletResyncNonce.js";
import { walletSign } from "../funcs/walletSign.js";
import { walletUpdate } from "../funcs/walletUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator, unwrapResultIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Wallet extends ClientSDK {
  /**
   * Create a new wallet
   *
   * @remarks
   * Create a new wallet for the project.
   */
  async create(
    request: shared.CreateWalletDto,
    options?: RequestOptions,
  ): Promise<operations.CreateWalletResponse> {
    return unwrapAsync(walletCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a wallet
   *
   * @remarks
   * Removes a wallet from the Key Management System.
   */
  async delete(
    request: operations.DeleteWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteWalletResponse> {
    return unwrapAsync(walletDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve the list of Wallets
   *
   * @remarks
   * Fetches the list of wallets of the project
   */
  async getAll(
    request: operations.GetAllWalletRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.GetAllWalletResponse, { page: number }>> {
    return unwrapResultIterator(walletGetAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Fetch Wallet Details
   *
   * @remarks
   * Retrieves information about a specific wallet.
   */
  async getOne(
    request: operations.GetOneWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOneWalletResponse> {
    return unwrapAsync(walletGetOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Import Wallet from Provider Key
   *
   * @remarks
   * Imports a wallet using a Key Management System.
   */
  async import(
    request: shared.ImportProviderKeyDto,
    options?: RequestOptions,
  ): Promise<operations.ImportProviderKeyWalletResponse> {
    return unwrapAsync(walletImport(
      this,
      request,
      options,
    ));
  }

  /**
   * Request tokens from faucet
   *
   * @remarks
   * Request tokens from the faucet, which can be used for testing and development purposes on testnet networks. Each user is limited to one request per day.
   */
  async requestFaucet(
    request: operations.ClaimFaucetRequest,
    options?: RequestOptions,
  ): Promise<operations.ClaimFaucetResponse> {
    return unwrapAsync(walletRequestFaucet(
      this,
      request,
      options,
    ));
  }

  /**
   * Synchronize Nonces for a wallet
   *
   * @remarks
   * Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.
   */
  async resyncNonce(
    request: operations.ResyncNoncesWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.ResyncNoncesWalletResponse> {
    return unwrapAsync(walletResyncNonce(
      this,
      request,
      options,
    ));
  }

  /**
   * Sign a message
   *
   * @remarks
   * Generates a cryptographic signature for a given message using a specified wallet.
   */
  async sign(
    request: operations.SignMessageWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.SignMessageWalletResponse> {
    return unwrapAsync(walletSign(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Wallet Information
   *
   * @remarks
   * Modifies details of an existing wallet using its address.
   */
  async update(
    request: operations.UpdateWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateWalletResponse> {
    return unwrapAsync(walletUpdate(
      this,
      request,
      options,
    ));
  }
}
