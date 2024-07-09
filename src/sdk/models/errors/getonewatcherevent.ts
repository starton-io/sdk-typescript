/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    BadRequestException,
    BadRequestException$inboundSchema,
    BadRequestException$Outbound,
    BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import {
    CouldNotFindResource,
    CouldNotFindResource$inboundSchema,
    CouldNotFindResource$Outbound,
    CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import * as z from "zod";

export type GetOneWatcherEventMonitorResponseBody = CouldNotFindResource;

export type GetOneWatcherEventResponseBody = BadRequestException;

/** @internal */
export const GetOneWatcherEventMonitorResponseBody$inboundSchema: z.ZodType<
    GetOneWatcherEventMonitorResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type GetOneWatcherEventMonitorResponseBody$Outbound = CouldNotFindResource$Outbound;

/** @internal */
export const GetOneWatcherEventMonitorResponseBody$outboundSchema: z.ZodType<
    GetOneWatcherEventMonitorResponseBody$Outbound,
    z.ZodTypeDef,
    GetOneWatcherEventMonitorResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneWatcherEventMonitorResponseBody$ {
    /** @deprecated use `GetOneWatcherEventMonitorResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetOneWatcherEventMonitorResponseBody$inboundSchema;
    /** @deprecated use `GetOneWatcherEventMonitorResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetOneWatcherEventMonitorResponseBody$outboundSchema;
    /** @deprecated use `GetOneWatcherEventMonitorResponseBody$Outbound` instead. */
    export type Outbound = GetOneWatcherEventMonitorResponseBody$Outbound;
}

/** @internal */
export const GetOneWatcherEventResponseBody$inboundSchema: z.ZodType<
    GetOneWatcherEventResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetOneWatcherEventResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetOneWatcherEventResponseBody$outboundSchema: z.ZodType<
    GetOneWatcherEventResponseBody$Outbound,
    z.ZodTypeDef,
    GetOneWatcherEventResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneWatcherEventResponseBody$ {
    /** @deprecated use `GetOneWatcherEventResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetOneWatcherEventResponseBody$inboundSchema;
    /** @deprecated use `GetOneWatcherEventResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetOneWatcherEventResponseBody$outboundSchema;
    /** @deprecated use `GetOneWatcherEventResponseBody$Outbound` instead. */
    export type Outbound = GetOneWatcherEventResponseBody$Outbound;
}
