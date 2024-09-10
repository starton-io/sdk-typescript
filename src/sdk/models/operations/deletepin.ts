/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type DeletePinRequest = {
  /**
   * The unique identifier of the pinned file on Starton
   */
  id: string;
};

export type DeletePinResponse = {
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
export const DeletePinRequest$inboundSchema: z.ZodType<
  DeletePinRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeletePinRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeletePinRequest$outboundSchema: z.ZodType<
  DeletePinRequest$Outbound,
  z.ZodTypeDef,
  DeletePinRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePinRequest$ {
  /** @deprecated use `DeletePinRequest$inboundSchema` instead. */
  export const inboundSchema = DeletePinRequest$inboundSchema;
  /** @deprecated use `DeletePinRequest$outboundSchema` instead. */
  export const outboundSchema = DeletePinRequest$outboundSchema;
  /** @deprecated use `DeletePinRequest$Outbound` instead. */
  export type Outbound = DeletePinRequest$Outbound;
}

/** @internal */
export const DeletePinResponse$inboundSchema: z.ZodType<
  DeletePinResponse,
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
export type DeletePinResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  boolean?: boolean | undefined;
};

/** @internal */
export const DeletePinResponse$outboundSchema: z.ZodType<
  DeletePinResponse$Outbound,
  z.ZodTypeDef,
  DeletePinResponse
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
export namespace DeletePinResponse$ {
  /** @deprecated use `DeletePinResponse$inboundSchema` instead. */
  export const inboundSchema = DeletePinResponse$inboundSchema;
  /** @deprecated use `DeletePinResponse$outboundSchema` instead. */
  export const outboundSchema = DeletePinResponse$outboundSchema;
  /** @deprecated use `DeletePinResponse$Outbound` instead. */
  export type Outbound = DeletePinResponse$Outbound;
}
