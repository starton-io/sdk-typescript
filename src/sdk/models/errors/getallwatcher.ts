/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import * as z from "zod";

export type GetAllWatcherResponseBody = BadRequestException;

/** @internal */
export namespace GetAllWatcherResponseBody$ {
    export const inboundSchema: z.ZodType<GetAllWatcherResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWatcherResponseBody> =
        BadRequestException$.outboundSchema;
}
