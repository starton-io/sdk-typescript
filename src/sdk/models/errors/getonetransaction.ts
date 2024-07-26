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

export type GetOneTransactionTransactionManagerResponseBody = CouldNotFindResource;

export type GetOneTransactionResponseBody = BadRequestException;

/** @internal */
export const GetOneTransactionTransactionManagerResponseBody$inboundSchema: z.ZodType<
    GetOneTransactionTransactionManagerResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type GetOneTransactionTransactionManagerResponseBody$Outbound =
    CouldNotFindResource$Outbound;

/** @internal */
export const GetOneTransactionTransactionManagerResponseBody$outboundSchema: z.ZodType<
    GetOneTransactionTransactionManagerResponseBody$Outbound,
    z.ZodTypeDef,
    GetOneTransactionTransactionManagerResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneTransactionTransactionManagerResponseBody$ {
    /** @deprecated use `GetOneTransactionTransactionManagerResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetOneTransactionTransactionManagerResponseBody$inboundSchema;
    /** @deprecated use `GetOneTransactionTransactionManagerResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetOneTransactionTransactionManagerResponseBody$outboundSchema;
    /** @deprecated use `GetOneTransactionTransactionManagerResponseBody$Outbound` instead. */
    export type Outbound = GetOneTransactionTransactionManagerResponseBody$Outbound;
}

/** @internal */
export const GetOneTransactionResponseBody$inboundSchema: z.ZodType<
    GetOneTransactionResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetOneTransactionResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetOneTransactionResponseBody$outboundSchema: z.ZodType<
    GetOneTransactionResponseBody$Outbound,
    z.ZodTypeDef,
    GetOneTransactionResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneTransactionResponseBody$ {
    /** @deprecated use `GetOneTransactionResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetOneTransactionResponseBody$inboundSchema;
    /** @deprecated use `GetOneTransactionResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetOneTransactionResponseBody$outboundSchema;
    /** @deprecated use `GetOneTransactionResponseBody$Outbound` instead. */
    export type Outbound = GetOneTransactionResponseBody$Outbound;
}
