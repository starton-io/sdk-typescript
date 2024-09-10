/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type DeleteProjectMemberRequest = {
  userId: string;
};

export type DeleteProjectMemberResponse = {
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
  boolean?: boolean | undefined;
};

/** @internal */
export const DeleteProjectMemberRequest$inboundSchema: z.ZodType<
  DeleteProjectMemberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  userId: z.string(),
});

/** @internal */
export type DeleteProjectMemberRequest$Outbound = {
  userId: string;
};

/** @internal */
export const DeleteProjectMemberRequest$outboundSchema: z.ZodType<
  DeleteProjectMemberRequest$Outbound,
  z.ZodTypeDef,
  DeleteProjectMemberRequest
> = z.object({
  userId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectMemberRequest$ {
  /** @deprecated use `DeleteProjectMemberRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectMemberRequest$inboundSchema;
  /** @deprecated use `DeleteProjectMemberRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectMemberRequest$outboundSchema;
  /** @deprecated use `DeleteProjectMemberRequest$Outbound` instead. */
  export type Outbound = DeleteProjectMemberRequest$Outbound;
}

/** @internal */
export const DeleteProjectMemberResponse$inboundSchema: z.ZodType<
  DeleteProjectMemberResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  boolean: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DeleteProjectMemberResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  boolean?: boolean | undefined;
};

/** @internal */
export const DeleteProjectMemberResponse$outboundSchema: z.ZodType<
  DeleteProjectMemberResponse$Outbound,
  z.ZodTypeDef,
  DeleteProjectMemberResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  boolean: z.boolean().optional(),
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
export namespace DeleteProjectMemberResponse$ {
  /** @deprecated use `DeleteProjectMemberResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectMemberResponse$inboundSchema;
  /** @deprecated use `DeleteProjectMemberResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectMemberResponse$outboundSchema;
  /** @deprecated use `DeleteProjectMemberResponse$Outbound` instead. */
  export type Outbound = DeleteProjectMemberResponse$Outbound;
}
