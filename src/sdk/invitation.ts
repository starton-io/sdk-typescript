/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectMemberInvitationCreate } from "../funcs/projectMemberInvitationCreate.js";
import { projectMemberInvitationDelete } from "../funcs/projectMemberInvitationDelete.js";
import { projectMemberInvitationGetAll } from "../funcs/projectMemberInvitationGetAll.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator, unwrapResultIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Invitation extends ClientSDK {
  /**
   * Send an invitation to the project
   *
   * @remarks
   * Invites a new member to the project. The user needs to have the necessary permissions to send invitations. The invitation details, including the recipient's email and role, must be provided in the request body.
   */
  async create(
    request: shared.CreateInvitationDto,
    options?: RequestOptions,
  ): Promise<operations.CreateInvitationResponse> {
    return unwrapAsync(projectMemberInvitationCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Revoke a previously sent invitation.
   *
   * @remarks
   * Deletes an invitation that was previously sent. The user needs to have the necessary permissions to delete invitations. The id of the invitation to be revoked must be provided in the request URL
   */
  async delete(
    request: operations.DeleteInvitationRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteInvitationResponse> {
    return unwrapAsync(projectMemberInvitationDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list of all member invitations for a specific project
   *
   * @remarks
   * Fetch all member invitations for a project. The user needs to have the appropriate permissions to access this data.
   */
  async getAll(
    request: operations.GetAllInvitationRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetAllInvitationResponse, { page: number }>
  > {
    return unwrapResultIterator(projectMemberInvitationGetAll(
      this,
      request,
      options,
    ));
  }
}
