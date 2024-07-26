/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import {
    BadRequestException,
    BadRequestException$inboundSchema,
    BadRequestException$Outbound,
    BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import * as z from "zod";

export type GetAllTransactionResponseBody = BadRequestException;

/** @internal */
export const GetAllTransactionResponseBody$inboundSchema: z.ZodType<
    GetAllTransactionResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllTransactionResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllTransactionResponseBody$outboundSchema: z.ZodType<
    GetAllTransactionResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllTransactionResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllTransactionResponseBody$ {
    /** @deprecated use `GetAllTransactionResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllTransactionResponseBody$inboundSchema;
    /** @deprecated use `GetAllTransactionResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllTransactionResponseBody$outboundSchema;
    /** @deprecated use `GetAllTransactionResponseBody$Outbound` instead. */
    export type Outbound = GetAllTransactionResponseBody$Outbound;
}
