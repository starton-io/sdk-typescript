/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import * as z from "zod";

export type GetAllNetworkResponseBody = BadRequestException;

/** @internal */
export namespace GetAllNetworkResponseBody$ {
    export type Inbound = BadRequestException$.Inbound;

    export type Outbound = BadRequestException$.Outbound;
    export const inboundSchema: z.ZodType<GetAllNetworkResponseBody, z.ZodTypeDef, Inbound> =
        BadRequestException$.inboundSchema;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllNetworkResponseBody> =
        BadRequestException$.outboundSchema;
}
