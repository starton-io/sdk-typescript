/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetOneWebhookSigningSecretResponse = {
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
export namespace GetOneWebhookSigningSecretResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        WebhookSigningSecret?: shared.WebhookSigningSecret$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetOneWebhookSigningSecretResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            WebhookSigningSecret: shared.WebhookSigningSecret$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.WebhookSigningSecret === undefined
                    ? null
                    : { webhookSigningSecret: v.WebhookSigningSecret }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        WebhookSigningSecret?: shared.WebhookSigningSecret$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetOneWebhookSigningSecretResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            webhookSigningSecret: shared.WebhookSigningSecret$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.webhookSigningSecret === undefined
                    ? null
                    : { WebhookSigningSecret: v.webhookSigningSecret }),
            };
        });
}
