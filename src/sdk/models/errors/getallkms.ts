/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import * as z from "zod";

export type GetAllKmsResponseBody = BadRequestException;

/** @internal */
export namespace GetAllKmsResponseBody$ {
    export const inboundSchema: z.ZodType<GetAllKmsResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllKmsResponseBody> =
        BadRequestException$.outboundSchema;
}
