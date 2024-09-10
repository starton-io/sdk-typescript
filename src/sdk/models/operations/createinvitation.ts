/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateInvitationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  invitation?: shared.Invitation | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const CreateInvitationResponse$inboundSchema: z.ZodType<
  CreateInvitationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Invitation: shared.Invitation$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Invitation": "invitation",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateInvitationResponse$Outbound = {
  ContentType: string;
  Invitation?: shared.Invitation$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CreateInvitationResponse$outboundSchema: z.ZodType<
  CreateInvitationResponse$Outbound,
  z.ZodTypeDef,
  CreateInvitationResponse
> = z.object({
  contentType: z.string(),
  invitation: shared.Invitation$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    invitation: "Invitation",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateInvitationResponse$ {
  /** @deprecated use `CreateInvitationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateInvitationResponse$inboundSchema;
  /** @deprecated use `CreateInvitationResponse$outboundSchema` instead. */
  export const outboundSchema = CreateInvitationResponse$outboundSchema;
  /** @deprecated use `CreateInvitationResponse$Outbound` instead. */
  export type Outbound = CreateInvitationResponse$Outbound;
}
