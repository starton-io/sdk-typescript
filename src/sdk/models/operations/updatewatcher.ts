/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateWatcherRequest = {
  /**
   * Object containing the fields to update on the watcher.
   */
  updateWatcherDto: shared.UpdateWatcherDto;
  /**
   * The unique identifier of the watcher to update.
   */
  id: string;
};

export type UpdateWatcherResponse = {
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
  watcher?: shared.Watcher | undefined;
};

/** @internal */
export const UpdateWatcherRequest$inboundSchema: z.ZodType<
  UpdateWatcherRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UpdateWatcherDto: shared.UpdateWatcherDto$inboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "UpdateWatcherDto": "updateWatcherDto",
  });
});

/** @internal */
export type UpdateWatcherRequest$Outbound = {
  UpdateWatcherDto: shared.UpdateWatcherDto$Outbound;
  id: string;
};

/** @internal */
export const UpdateWatcherRequest$outboundSchema: z.ZodType<
  UpdateWatcherRequest$Outbound,
  z.ZodTypeDef,
  UpdateWatcherRequest
> = z.object({
  updateWatcherDto: shared.UpdateWatcherDto$outboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    updateWatcherDto: "UpdateWatcherDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWatcherRequest$ {
  /** @deprecated use `UpdateWatcherRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWatcherRequest$inboundSchema;
  /** @deprecated use `UpdateWatcherRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWatcherRequest$outboundSchema;
  /** @deprecated use `UpdateWatcherRequest$Outbound` instead. */
  export type Outbound = UpdateWatcherRequest$Outbound;
}

/** @internal */
export const UpdateWatcherResponse$inboundSchema: z.ZodType<
  UpdateWatcherResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Watcher: shared.Watcher$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Watcher": "watcher",
  });
});

/** @internal */
export type UpdateWatcherResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Watcher?: shared.Watcher$Outbound | undefined;
};

/** @internal */
export const UpdateWatcherResponse$outboundSchema: z.ZodType<
  UpdateWatcherResponse$Outbound,
  z.ZodTypeDef,
  UpdateWatcherResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  watcher: shared.Watcher$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    watcher: "Watcher",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWatcherResponse$ {
  /** @deprecated use `UpdateWatcherResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateWatcherResponse$inboundSchema;
  /** @deprecated use `UpdateWatcherResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateWatcherResponse$outboundSchema;
  /** @deprecated use `UpdateWatcherResponse$Outbound` instead. */
  export type Outbound = UpdateWatcherResponse$Outbound;
}
