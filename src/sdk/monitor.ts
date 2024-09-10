/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { monitorCreate } from "../funcs/monitorCreate.js";
import { monitorDelete } from "../funcs/monitorDelete.js";
import { monitorGetAll } from "../funcs/monitorGetAll.js";
import { monitorGetAllEvents } from "../funcs/monitorGetAllEvents.js";
import { monitorGetOne } from "../funcs/monitorGetOne.js";
import { monitorGetOneEvent } from "../funcs/monitorGetOneEvent.js";
import { monitorUpdate } from "../funcs/monitorUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator, unwrapResultIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Monitor extends ClientSDK {
  /**
   * Create a New Watcher
   *
   * @remarks
   * Adds a new watcher to the current project to start monitoring an address.
   */
  async create(
    request: shared.CreateWatcherDto,
    options?: RequestOptions,
  ): Promise<operations.CreateWatcherResponse> {
    return unwrapAsync(monitorCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a watcher
   *
   * @remarks
   * Removes a specific watcher from the current project. This action is irreversible.
   */
  async delete(
    request: operations.DeleteWatcherRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteWatcherResponse> {
    return unwrapAsync(monitorDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve List of Watchers
   *
   * @remarks
   * Fetches list of all watchers associated with the current project.
   */
  async getAll(
    request: operations.GetAllWatcherRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.GetAllWatcherResponse>> {
    return unwrapResultIterator(monitorGetAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Fetches the list of events for a watcher
   *
   * @remarks
   * Fetches a list of all events linked to a specific watcher, identified by {id}.
   */
  async getAllEvents(
    request: operations.GetAllWatcherEventRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.GetAllWatcherEventResponse>> {
    return unwrapResultIterator(monitorGetAllEvents(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a specific watcher
   *
   * @remarks
   * Retrieves detailed information about a specific watcher identified by its unique {id} within the current project.
   */
  async getOne(
    request: operations.GetOneWatcherRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOneWatcherResponse> {
    return unwrapAsync(monitorGetOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a watcher event
   *
   * @remarks
   * Retrieves information about a specific watcher event.
   */
  async getOneEvent(
    request: operations.GetOneWatcherEventRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOneWatcherEventResponse> {
    return unwrapAsync(monitorGetOneEvent(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a watcher
   *
   * @remarks
   * Modifies the properties of an existing watcher. Only the fields provided in the request body will be updated.
   */
  async update(
    request: operations.UpdateWatcherRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateWatcherResponse> {
    return unwrapAsync(monitorUpdate(
      this,
      request,
      options,
    ));
  }
}
