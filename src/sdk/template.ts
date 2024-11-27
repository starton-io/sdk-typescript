/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { smartContractTemplateGetAll } from "../funcs/smartContractTemplateGetAll.js";
import { smartContractTemplateGetOne } from "../funcs/smartContractTemplateGetOne.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator, unwrapResultIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Template extends ClientSDK {
  /**
   * Fetch the list of Smart Contract Templates
   *
   * @remarks
   * Retrieves a paginated list of smart contract templates, you can use filters and pagination options to tailor the results to your specific needs.
   */
  async getAll(
    request: operations.GetAllSmartContractTemplateRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.GetAllSmartContractTemplateResponse,
      { page: number }
    >
  > {
    return unwrapResultIterator(smartContractTemplateGetAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a Specific Smart Contract Template
   *
   * @remarks
   * Fetches the details of a particular smart contract template using its unique identifier.
   */
  async getOne(
    request: operations.GetOneSmartContractTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOneSmartContractTemplateResponse> {
    return unwrapAsync(smartContractTemplateGetOne(
      this,
      request,
      options,
    ));
  }
}
