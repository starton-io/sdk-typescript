/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { NotAuthenticated, NotAuthenticated$ } from "./notauthenticated.js";
import * as z from "zod";

export type CreateWebhookSigningSecretWebhookResponseBody = NotAuthenticated;

export type CreateWebhookSigningSecretResponseBody = BadRequestException;

/** @internal */
export namespace CreateWebhookSigningSecretWebhookResponseBody$ {
    export const inboundSchema: z.ZodType<
        CreateWebhookSigningSecretWebhookResponseBody,
        z.ZodTypeDef,
        unknown
    > = NotAuthenticated$.inboundSchema;

    export type Outbound = NotAuthenticated$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateWebhookSigningSecretWebhookResponseBody
    > = NotAuthenticated$.outboundSchema;
}

/** @internal */
export namespace CreateWebhookSigningSecretResponseBody$ {
    export const inboundSchema: z.ZodType<
        CreateWebhookSigningSecretResponseBody,
        z.ZodTypeDef,
        unknown
    > = BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateWebhookSigningSecretResponseBody
    > = BadRequestException$.outboundSchema;
}
