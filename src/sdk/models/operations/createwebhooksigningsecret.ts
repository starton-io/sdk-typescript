/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateWebhookSigningSecretResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    webhookSigningSecret?: shared.WebhookSigningSecret | undefined;
};

/** @internal */
export const CreateWebhookSigningSecretResponse$inboundSchema: z.ZodType<
    CreateWebhookSigningSecretResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        WebhookSigningSecret: shared.WebhookSigningSecret$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            WebhookSigningSecret: "webhookSigningSecret",
        });
    });

/** @internal */
export type CreateWebhookSigningSecretResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhookSigningSecret?: shared.WebhookSigningSecret$Outbound | undefined;
};

/** @internal */
export const CreateWebhookSigningSecretResponse$outboundSchema: z.ZodType<
    CreateWebhookSigningSecretResponse$Outbound,
    z.ZodTypeDef,
    CreateWebhookSigningSecretResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        webhookSigningSecret: shared.WebhookSigningSecret$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            webhookSigningSecret: "WebhookSigningSecret",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookSigningSecretResponse$ {
    /** @deprecated use `CreateWebhookSigningSecretResponse$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookSigningSecretResponse$inboundSchema;
    /** @deprecated use `CreateWebhookSigningSecretResponse$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookSigningSecretResponse$outboundSchema;
    /** @deprecated use `CreateWebhookSigningSecretResponse$Outbound` instead. */
    export type Outbound = CreateWebhookSigningSecretResponse$Outbound;
}
