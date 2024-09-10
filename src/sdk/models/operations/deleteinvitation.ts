/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type DeleteInvitationRequest = {
  id: string;
};

export type DeleteInvitationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  number?: number | undefined;
};

/** @internal */
export const DeleteInvitationRequest$inboundSchema: z.ZodType<
  DeleteInvitationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteInvitationRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteInvitationRequest$outboundSchema: z.ZodType<
  DeleteInvitationRequest$Outbound,
  z.ZodTypeDef,
  DeleteInvitationRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteInvitationRequest$ {
  /** @deprecated use `DeleteInvitationRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteInvitationRequest$inboundSchema;
  /** @deprecated use `DeleteInvitationRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteInvitationRequest$outboundSchema;
  /** @deprecated use `DeleteInvitationRequest$Outbound` instead. */
  export type Outbound = DeleteInvitationRequest$Outbound;
}

/** @internal */
export const DeleteInvitationResponse$inboundSchema: z.ZodType<
  DeleteInvitationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  number: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DeleteInvitationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  number?: number | undefined;
};

/** @internal */
export const DeleteInvitationResponse$outboundSchema: z.ZodType<
  DeleteInvitationResponse$Outbound,
  z.ZodTypeDef,
  DeleteInvitationResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  number: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteInvitationResponse$ {
  /** @deprecated use `DeleteInvitationResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteInvitationResponse$inboundSchema;
  /** @deprecated use `DeleteInvitationResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteInvitationResponse$outboundSchema;
  /** @deprecated use `DeleteInvitationResponse$Outbound` instead. */
  export type Outbound = DeleteInvitationResponse$Outbound;
}
