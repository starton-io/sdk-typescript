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

export type GetAllInvitationResponseBody = BadRequestException;

/** @internal */
export const GetAllInvitationResponseBody$inboundSchema: z.ZodType<
    GetAllInvitationResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllInvitationResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllInvitationResponseBody$outboundSchema: z.ZodType<
    GetAllInvitationResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllInvitationResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllInvitationResponseBody$ {
    /** @deprecated use `GetAllInvitationResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllInvitationResponseBody$inboundSchema;
    /** @deprecated use `GetAllInvitationResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllInvitationResponseBody$outboundSchema;
    /** @deprecated use `GetAllInvitationResponseBody$Outbound` instead. */
    export type Outbound = GetAllInvitationResponseBody$Outbound;
}
