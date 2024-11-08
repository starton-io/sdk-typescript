/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetAllWatcherEventRequest = {
  /**
   * The unique identifier of the watcher from which you'll retrieve events.
   */
  id: string;
  /**
   * Number of entities returned on each page. By default this number is set to 100.
   */
  limit?: number | undefined;
  /**
   * Number of returned page. By default the returned page is the first.
   */
  page?: number | undefined;
};

export type GetAllWatcherEventWatcherEventPaginated = {
  items: Array<shared.WatcherEvent>;
  meta: shared.PaginationData;
};

export type GetAllWatcherEventResponse = {
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
  watcherEventPaginated?: GetAllWatcherEventWatcherEventPaginated | undefined;
};

/** @internal */
export const GetAllWatcherEventRequest$inboundSchema: z.ZodType<
  GetAllWatcherEventRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  limit: z.number().int().default(100),
  page: z.number().int().optional(),
});

/** @internal */
export type GetAllWatcherEventRequest$Outbound = {
  id: string;
  limit: number;
  page?: number | undefined;
};

/** @internal */
export const GetAllWatcherEventRequest$outboundSchema: z.ZodType<
  GetAllWatcherEventRequest$Outbound,
  z.ZodTypeDef,
  GetAllWatcherEventRequest
> = z.object({
  id: z.string(),
  limit: z.number().int().default(100),
  page: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWatcherEventRequest$ {
  /** @deprecated use `GetAllWatcherEventRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllWatcherEventRequest$inboundSchema;
  /** @deprecated use `GetAllWatcherEventRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllWatcherEventRequest$outboundSchema;
  /** @deprecated use `GetAllWatcherEventRequest$Outbound` instead. */
  export type Outbound = GetAllWatcherEventRequest$Outbound;
}

/** @internal */
export const GetAllWatcherEventWatcherEventPaginated$inboundSchema: z.ZodType<
  GetAllWatcherEventWatcherEventPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(shared.WatcherEvent$inboundSchema),
  meta: shared.PaginationData$inboundSchema,
});

/** @internal */
export type GetAllWatcherEventWatcherEventPaginated$Outbound = {
  items: Array<shared.WatcherEvent$Outbound>;
  meta: shared.PaginationData$Outbound;
};

/** @internal */
export const GetAllWatcherEventWatcherEventPaginated$outboundSchema: z.ZodType<
  GetAllWatcherEventWatcherEventPaginated$Outbound,
  z.ZodTypeDef,
  GetAllWatcherEventWatcherEventPaginated
> = z.object({
  items: z.array(shared.WatcherEvent$outboundSchema),
  meta: shared.PaginationData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWatcherEventWatcherEventPaginated$ {
  /** @deprecated use `GetAllWatcherEventWatcherEventPaginated$inboundSchema` instead. */
  export const inboundSchema =
    GetAllWatcherEventWatcherEventPaginated$inboundSchema;
  /** @deprecated use `GetAllWatcherEventWatcherEventPaginated$outboundSchema` instead. */
  export const outboundSchema =
    GetAllWatcherEventWatcherEventPaginated$outboundSchema;
  /** @deprecated use `GetAllWatcherEventWatcherEventPaginated$Outbound` instead. */
  export type Outbound = GetAllWatcherEventWatcherEventPaginated$Outbound;
}

/** @internal */
export const GetAllWatcherEventResponse$inboundSchema: z.ZodType<
  GetAllWatcherEventResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  WatcherEventPaginated: z.lazy(() =>
    GetAllWatcherEventWatcherEventPaginated$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "WatcherEventPaginated": "watcherEventPaginated",
  });
});

/** @internal */
export type GetAllWatcherEventResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  WatcherEventPaginated?:
    | GetAllWatcherEventWatcherEventPaginated$Outbound
    | undefined;
};

/** @internal */
export const GetAllWatcherEventResponse$outboundSchema: z.ZodType<
  GetAllWatcherEventResponse$Outbound,
  z.ZodTypeDef,
  GetAllWatcherEventResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  watcherEventPaginated: z.lazy(() =>
    GetAllWatcherEventWatcherEventPaginated$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    watcherEventPaginated: "WatcherEventPaginated",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWatcherEventResponse$ {
  /** @deprecated use `GetAllWatcherEventResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllWatcherEventResponse$inboundSchema;
  /** @deprecated use `GetAllWatcherEventResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllWatcherEventResponse$outboundSchema;
  /** @deprecated use `GetAllWatcherEventResponse$Outbound` instead. */
  export type Outbound = GetAllWatcherEventResponse$Outbound;
}
