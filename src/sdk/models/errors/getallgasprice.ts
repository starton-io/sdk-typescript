/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import * as z from "zod";

export type GetAllGasPriceResponseBody = BadRequestException;

/** @internal */
export namespace GetAllGasPriceResponseBody$ {
    export const inboundSchema: z.ZodType<GetAllGasPriceResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllGasPriceResponseBody> =
        BadRequestException$.outboundSchema;
}
