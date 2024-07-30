/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    BadRequestException,
    BadRequestException$inboundSchema,
    BadRequestException$Outbound,
    BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import * as z from "zod";

export type GetAllPinResponseBody = BadRequestException;

/** @internal */
export const GetAllPinResponseBody$inboundSchema: z.ZodType<
    GetAllPinResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllPinResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllPinResponseBody$outboundSchema: z.ZodType<
    GetAllPinResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllPinResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllPinResponseBody$ {
    /** @deprecated use `GetAllPinResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllPinResponseBody$inboundSchema;
    /** @deprecated use `GetAllPinResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllPinResponseBody$outboundSchema;
    /** @deprecated use `GetAllPinResponseBody$Outbound` instead. */
    export type Outbound = GetAllPinResponseBody$Outbound;
}
