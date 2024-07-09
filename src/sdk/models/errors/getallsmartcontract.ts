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

export type GetAllSmartContractResponseBody = BadRequestException;

/** @internal */
export const GetAllSmartContractResponseBody$inboundSchema: z.ZodType<
    GetAllSmartContractResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllSmartContractResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllSmartContractResponseBody$outboundSchema: z.ZodType<
    GetAllSmartContractResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllSmartContractResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllSmartContractResponseBody$ {
    /** @deprecated use `GetAllSmartContractResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllSmartContractResponseBody$inboundSchema;
    /** @deprecated use `GetAllSmartContractResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllSmartContractResponseBody$outboundSchema;
    /** @deprecated use `GetAllSmartContractResponseBody$Outbound` instead. */
    export type Outbound = GetAllSmartContractResponseBody$Outbound;
}
