/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import * as z from "zod";

export type GetAllRpcResponseBody = BadRequestException;

/** @internal */
export namespace GetAllRpcResponseBody$ {
    export const inboundSchema: z.ZodType<GetAllRpcResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllRpcResponseBody> =
        BadRequestException$.outboundSchema;
}
