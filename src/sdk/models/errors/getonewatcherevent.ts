/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import * as z from "zod";

export type GetOneWatcherEventMonitorResponseBody = CouldNotFindResource;

export type GetOneWatcherEventResponseBody = BadRequestException;

/** @internal */
export namespace GetOneWatcherEventMonitorResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetOneWatcherEventMonitorResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetOneWatcherEventMonitorResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace GetOneWatcherEventResponseBody$ {
    export const inboundSchema: z.ZodType<GetOneWatcherEventResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWatcherEventResponseBody> =
        BadRequestException$.outboundSchema;
}
