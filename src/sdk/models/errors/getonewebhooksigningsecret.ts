/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import * as z from "zod";

export type GetOneWebhookSigningSecretResponseBody = BadRequestException;

/** @internal */
export namespace GetOneWebhookSigningSecretResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetOneWebhookSigningSecretResponseBody,
        z.ZodTypeDef,
        unknown
    > = BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetOneWebhookSigningSecretResponseBody
    > = BadRequestException$.outboundSchema;
}
