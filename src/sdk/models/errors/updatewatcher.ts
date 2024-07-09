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

export type UpdateWatcherMonitorResponseBody = CouldNotFindResource;

export type UpdateWatcherResponseBody = BadRequestException;

/** @internal */
export const UpdateWatcherMonitorResponseBody$inboundSchema: z.ZodType<
    UpdateWatcherMonitorResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type UpdateWatcherMonitorResponseBody$Outbound = CouldNotFindResource$Outbound;

/** @internal */
export const UpdateWatcherMonitorResponseBody$outboundSchema: z.ZodType<
    UpdateWatcherMonitorResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateWatcherMonitorResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWatcherMonitorResponseBody$ {
    /** @deprecated use `UpdateWatcherMonitorResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdateWatcherMonitorResponseBody$inboundSchema;
    /** @deprecated use `UpdateWatcherMonitorResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdateWatcherMonitorResponseBody$outboundSchema;
    /** @deprecated use `UpdateWatcherMonitorResponseBody$Outbound` instead. */
    export type Outbound = UpdateWatcherMonitorResponseBody$Outbound;
}

/** @internal */
export const UpdateWatcherResponseBody$inboundSchema: z.ZodType<
    UpdateWatcherResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type UpdateWatcherResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const UpdateWatcherResponseBody$outboundSchema: z.ZodType<
    UpdateWatcherResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateWatcherResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWatcherResponseBody$ {
    /** @deprecated use `UpdateWatcherResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdateWatcherResponseBody$inboundSchema;
    /** @deprecated use `UpdateWatcherResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdateWatcherResponseBody$outboundSchema;
    /** @deprecated use `UpdateWatcherResponseBody$Outbound` instead. */
    export type Outbound = UpdateWatcherResponseBody$Outbound;
}
