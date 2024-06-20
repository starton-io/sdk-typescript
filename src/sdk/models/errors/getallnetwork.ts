/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import * as z from "zod";

export type GetAllNetworkResponseBody = BadRequestException;

/** @internal */
export namespace GetAllNetworkResponseBody$ {
    export const inboundSchema: z.ZodType<GetAllNetworkResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllNetworkResponseBody> =
        BadRequestException$.outboundSchema;
}
