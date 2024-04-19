/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import * as z from "zod";

export type GetAllWatcherEventResponseBody = BadRequestException;

/** @internal */
export namespace GetAllWatcherEventResponseBody$ {
    export type Inbound = BadRequestException$.Inbound;

    export type Outbound = BadRequestException$.Outbound;
    export const inboundSchema: z.ZodType<GetAllWatcherEventResponseBody, z.ZodTypeDef, Inbound> =
        BadRequestException$.inboundSchema;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWatcherEventResponseBody> =
        BadRequestException$.outboundSchema;
}
