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

export type GetStorageUsedPinResponseBody = BadRequestException;

/** @internal */
export const GetStorageUsedPinResponseBody$inboundSchema: z.ZodType<
    GetStorageUsedPinResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetStorageUsedPinResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetStorageUsedPinResponseBody$outboundSchema: z.ZodType<
    GetStorageUsedPinResponseBody$Outbound,
    z.ZodTypeDef,
    GetStorageUsedPinResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStorageUsedPinResponseBody$ {
    /** @deprecated use `GetStorageUsedPinResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetStorageUsedPinResponseBody$inboundSchema;
    /** @deprecated use `GetStorageUsedPinResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetStorageUsedPinResponseBody$outboundSchema;
    /** @deprecated use `GetStorageUsedPinResponseBody$Outbound` instead. */
    export type Outbound = GetStorageUsedPinResponseBody$Outbound;
}
