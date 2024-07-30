/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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

export type GetAllSettingRelayerTransactionManagerSettingResponseBody = CouldNotFindResource;

export type GetAllSettingRelayerResponseBody = BadRequestException;

/** @internal */
export const GetAllSettingRelayerTransactionManagerSettingResponseBody$inboundSchema: z.ZodType<
    GetAllSettingRelayerTransactionManagerSettingResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type GetAllSettingRelayerTransactionManagerSettingResponseBody$Outbound =
    CouldNotFindResource$Outbound;

/** @internal */
export const GetAllSettingRelayerTransactionManagerSettingResponseBody$outboundSchema: z.ZodType<
    GetAllSettingRelayerTransactionManagerSettingResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllSettingRelayerTransactionManagerSettingResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllSettingRelayerTransactionManagerSettingResponseBody$ {
    /** @deprecated use `GetAllSettingRelayerTransactionManagerSettingResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        GetAllSettingRelayerTransactionManagerSettingResponseBody$inboundSchema;
    /** @deprecated use `GetAllSettingRelayerTransactionManagerSettingResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        GetAllSettingRelayerTransactionManagerSettingResponseBody$outboundSchema;
    /** @deprecated use `GetAllSettingRelayerTransactionManagerSettingResponseBody$Outbound` instead. */
    export type Outbound = GetAllSettingRelayerTransactionManagerSettingResponseBody$Outbound;
}

/** @internal */
export const GetAllSettingRelayerResponseBody$inboundSchema: z.ZodType<
    GetAllSettingRelayerResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllSettingRelayerResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllSettingRelayerResponseBody$outboundSchema: z.ZodType<
    GetAllSettingRelayerResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllSettingRelayerResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllSettingRelayerResponseBody$ {
    /** @deprecated use `GetAllSettingRelayerResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllSettingRelayerResponseBody$inboundSchema;
    /** @deprecated use `GetAllSettingRelayerResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllSettingRelayerResponseBody$outboundSchema;
    /** @deprecated use `GetAllSettingRelayerResponseBody$Outbound` instead. */
    export type Outbound = GetAllSettingRelayerResponseBody$Outbound;
}
