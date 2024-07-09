/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    BadRequestException,
    BadRequestException$inboundSchema,
    BadRequestException$Outbound,
    BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import * as z from "zod";

export type GetAllGasPriceResponseBody = BadRequestException;

/** @internal */
export const GetAllGasPriceResponseBody$inboundSchema: z.ZodType<
    GetAllGasPriceResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllGasPriceResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllGasPriceResponseBody$outboundSchema: z.ZodType<
    GetAllGasPriceResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllGasPriceResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllGasPriceResponseBody$ {
    /** @deprecated use `GetAllGasPriceResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllGasPriceResponseBody$inboundSchema;
    /** @deprecated use `GetAllGasPriceResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllGasPriceResponseBody$outboundSchema;
    /** @deprecated use `GetAllGasPriceResponseBody$Outbound` instead. */
    export type Outbound = GetAllGasPriceResponseBody$Outbound;
}
