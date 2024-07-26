/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import {
    BadRequestException,
    BadRequestException$inboundSchema,
    BadRequestException$Outbound,
    BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import {
    CouldNotFindResource,
    CouldNotFindResource$inboundSchema,
    CouldNotFindResource$Outbound,
    CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import * as z from "zod";

export type GetOnePinIpfsResponseBody = CouldNotFindResource;

export type GetOnePinResponseBody = BadRequestException;

/** @internal */
export const GetOnePinIpfsResponseBody$inboundSchema: z.ZodType<
    GetOnePinIpfsResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type GetOnePinIpfsResponseBody$Outbound = CouldNotFindResource$Outbound;

/** @internal */
export const GetOnePinIpfsResponseBody$outboundSchema: z.ZodType<
    GetOnePinIpfsResponseBody$Outbound,
    z.ZodTypeDef,
    GetOnePinIpfsResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOnePinIpfsResponseBody$ {
    /** @deprecated use `GetOnePinIpfsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetOnePinIpfsResponseBody$inboundSchema;
    /** @deprecated use `GetOnePinIpfsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetOnePinIpfsResponseBody$outboundSchema;
    /** @deprecated use `GetOnePinIpfsResponseBody$Outbound` instead. */
    export type Outbound = GetOnePinIpfsResponseBody$Outbound;
}

/** @internal */
export const GetOnePinResponseBody$inboundSchema: z.ZodType<
    GetOnePinResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetOnePinResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetOnePinResponseBody$outboundSchema: z.ZodType<
    GetOnePinResponseBody$Outbound,
    z.ZodTypeDef,
    GetOnePinResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOnePinResponseBody$ {
    /** @deprecated use `GetOnePinResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetOnePinResponseBody$inboundSchema;
    /** @deprecated use `GetOnePinResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetOnePinResponseBody$outboundSchema;
    /** @deprecated use `GetOnePinResponseBody$Outbound` instead. */
    export type Outbound = GetOnePinResponseBody$Outbound;
}
