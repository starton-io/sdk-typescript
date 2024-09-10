/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetOneWatcherEventRequest = {
  /**
   * The unique identifier of the watcher event.
   */
  eventId: string;
  /**
   * The unique identifier of the watcher.
   */
  id: string;
};

export type GetOneWatcherEventResponse = {
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
  watcherEvent?: shared.WatcherEvent | undefined;
};

/** @internal */
export const GetOneWatcherEventRequest$inboundSchema: z.ZodType<
  GetOneWatcherEventRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  eventId: z.string(),
  id: z.string(),
});

/** @internal */
export type GetOneWatcherEventRequest$Outbound = {
  eventId: string;
  id: string;
};

/** @internal */
export const GetOneWatcherEventRequest$outboundSchema: z.ZodType<
  GetOneWatcherEventRequest$Outbound,
  z.ZodTypeDef,
  GetOneWatcherEventRequest
> = z.object({
  eventId: z.string(),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneWatcherEventRequest$ {
  /** @deprecated use `GetOneWatcherEventRequest$inboundSchema` instead. */
  export const inboundSchema = GetOneWatcherEventRequest$inboundSchema;
  /** @deprecated use `GetOneWatcherEventRequest$outboundSchema` instead. */
  export const outboundSchema = GetOneWatcherEventRequest$outboundSchema;
  /** @deprecated use `GetOneWatcherEventRequest$Outbound` instead. */
  export type Outbound = GetOneWatcherEventRequest$Outbound;
}

/** @internal */
export const GetOneWatcherEventResponse$inboundSchema: z.ZodType<
  GetOneWatcherEventResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  WatcherEvent: shared.WatcherEvent$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "WatcherEvent": "watcherEvent",
  });
});

/** @internal */
export type GetOneWatcherEventResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  WatcherEvent?: shared.WatcherEvent$Outbound | undefined;
};

/** @internal */
export const GetOneWatcherEventResponse$outboundSchema: z.ZodType<
  GetOneWatcherEventResponse$Outbound,
  z.ZodTypeDef,
  GetOneWatcherEventResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  watcherEvent: shared.WatcherEvent$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    watcherEvent: "WatcherEvent",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneWatcherEventResponse$ {
  /** @deprecated use `GetOneWatcherEventResponse$inboundSchema` instead. */
  export const inboundSchema = GetOneWatcherEventResponse$inboundSchema;
  /** @deprecated use `GetOneWatcherEventResponse$outboundSchema` instead. */
  export const outboundSchema = GetOneWatcherEventResponse$outboundSchema;
  /** @deprecated use `GetOneWatcherEventResponse$Outbound` instead. */
  export type Outbound = GetOneWatcherEventResponse$Outbound;
}
