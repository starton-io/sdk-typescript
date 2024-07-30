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

export type CreateKmsResponseBody = BadRequestException;

/** @internal */
export const CreateKmsResponseBody$inboundSchema: z.ZodType<
    CreateKmsResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type CreateKmsResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const CreateKmsResponseBody$outboundSchema: z.ZodType<
    CreateKmsResponseBody$Outbound,
    z.ZodTypeDef,
    CreateKmsResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateKmsResponseBody$ {
    /** @deprecated use `CreateKmsResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateKmsResponseBody$inboundSchema;
    /** @deprecated use `CreateKmsResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateKmsResponseBody$outboundSchema;
    /** @deprecated use `CreateKmsResponseBody$Outbound` instead. */
    export type Outbound = CreateKmsResponseBody$Outbound;
}
