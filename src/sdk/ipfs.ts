/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ipfsDelete } from "../funcs/ipfsDelete.js";
import { ipfsGetAll } from "../funcs/ipfsGetAll.js";
import { ipfsGetOne } from "../funcs/ipfsGetOne.js";
import { ipfsGetStorageUsed } from "../funcs/ipfsGetStorageUsed.js";
import { ipfsPinExistingFile } from "../funcs/ipfsPinExistingFile.js";
import { ipfsUpdate } from "../funcs/ipfsUpdate.js";
import { ipfsUploadFile } from "../funcs/ipfsUploadFile.js";
import { ipfsUploadFolder } from "../funcs/ipfsUploadFolder.js";
import { ipfsUploadJson } from "../funcs/ipfsUploadJson.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator, unwrapResultIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Ipfs extends ClientSDK {
  /**
   * Deletes pinned file referenced by {id}
   *
   * @remarks
   * Unpin a previously pinned file by providing the specific {id} associated with the file.
   */
  async delete(
    request: operations.DeletePinRequest,
    options?: RequestOptions,
  ): Promise<operations.DeletePinResponse> {
    return unwrapAsync(ipfsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve all files
   *
   * @remarks
   * Retrieve a list of files that have been pinned on IPFS.
   */
  async getAll(
    request: operations.GetAllPinRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.GetAllPinResponse, { page: number }>> {
    return unwrapResultIterator(ipfsGetAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a Specific File
   *
   * @remarks
   * Fetches the details of a specific file that has been previously uploaded to IPFS, using its unique identifier.
   */
  async getOne(
    request: operations.GetOnePinRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOnePinResponse> {
    return unwrapAsync(ipfsGetOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Current Storage Usage
   *
   * @remarks
   * Fetches the current storage utilization details for the project, providing insights into the used space, total allowance, and remaining free space.
   */
  async getStorageUsed(
    options?: RequestOptions,
  ): Promise<operations.GetStorageUsedPinResponse> {
    return unwrapAsync(ipfsGetStorageUsed(
      this,
      options,
    ));
  }

  /**
   * Pin Existing IPFS File
   *
   * @remarks
   * Requests Starton to retain a copy of a file that has already been uploaded to IPFS, ensuring its availability.
   */
  async pinExistingFile(
    request: shared.CreatePinDto,
    options?: RequestOptions,
  ): Promise<operations.CreatePinResponse> {
    return unwrapAsync(ipfsPinExistingFile(
      this,
      request,
      options,
    ));
  }

  /**
   * Update File Details
   *
   * @remarks
   * Modifies the name or metadata of an existing file stored in IPFS. Note that direct edits to the file content are not possible; any changes to the content require re-uploading and will result in a new unique hash for the file.
   */
  async update(
    request: operations.UpdatePinRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdatePinResponse> {
    return unwrapAsync(ipfsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Upload a file
   *
   * @remarks
   * Safely upload a file to IPFS, ensuring it gets securely pinned for reliable retrieval, and receive a unique CID as a reference to the uploaded content. THE BODY PARAMETERS ARE FORM PARAMETERS FOR THIS ENDPOINT.
   */
  async uploadFile(
    request: operations.UploadFromFilePinRequestBody,
    options?: RequestOptions,
  ): Promise<operations.UploadFromFilePinResponse> {
    return unwrapAsync(ipfsUploadFile(
      this,
      request,
      options,
    ));
  }

  /**
   * Upload a folder
   *
   * @remarks
   * Upload an entire folder to IPFS, ensuring secure pinning of its contents for reliable retrieval. This endpoint expects a multipart/form-data payload, consisting of an optional metadata object and an array of files. The successful upload of the folder will result in a unique Content Identifier (CID) reference, which can be used to fetch the folder and its contents from IPFS at any time.
   */
  async uploadFolder(
    request: operations.UploadFromFolderPinRequestBody,
    options?: RequestOptions,
  ): Promise<operations.UploadFromFolderPinResponse> {
    return unwrapAsync(ipfsUploadFolder(
      this,
      request,
      options,
    ));
  }

  /**
   * Upload a JSON file
   *
   * @remarks
   * Upload a JSON file to IPFS with pinning for reliable access, associating it with a unique CID.
   */
  async uploadJson(
    request: shared.UploadJsonDto,
    options?: RequestOptions,
  ): Promise<operations.UploadFromJsonPinResponse> {
    return unwrapAsync(ipfsUploadJson(
      this,
      request,
      options,
    ));
  }
}
