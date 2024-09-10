/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type DeleteWatcherRequest = {
  id: string;
};

export type DeleteWatcherResponse = {
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
export const DeleteWatcherRequest$inboundSchema: z.ZodType<
  DeleteWatcherRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteWatcherRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteWatcherRequest$outboundSchema: z.ZodType<
  DeleteWatcherRequest$Outbound,
  z.ZodTypeDef,
  DeleteWatcherRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteWatcherRequest$ {
  /** @deprecated use `DeleteWatcherRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteWatcherRequest$inboundSchema;
  /** @deprecated use `DeleteWatcherRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteWatcherRequest$outboundSchema;
  /** @deprecated use `DeleteWatcherRequest$Outbound` instead. */
  export type Outbound = DeleteWatcherRequest$Outbound;
}

/** @internal */
export const DeleteWatcherResponse$inboundSchema: z.ZodType<
  DeleteWatcherResponse,
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
export type DeleteWatcherResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  number?: number | undefined;
};

/** @internal */
export const DeleteWatcherResponse$outboundSchema: z.ZodType<
  DeleteWatcherResponse$Outbound,
  z.ZodTypeDef,
  DeleteWatcherResponse
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
export namespace DeleteWatcherResponse$ {
  /** @deprecated use `DeleteWatcherResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteWatcherResponse$inboundSchema;
  /** @deprecated use `DeleteWatcherResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteWatcherResponse$outboundSchema;
  /** @deprecated use `DeleteWatcherResponse$Outbound` instead. */
  export type Outbound = DeleteWatcherResponse$Outbound;
}
