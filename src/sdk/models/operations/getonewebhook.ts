/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetOneWebhookRequest = {
    /**
     * The unique identifier of the target webhook.
     */
    id: string;
};

export type GetOneWebhookResponse = {
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
    webhook?: shared.Webhook | undefined;
};

/** @internal */
export namespace GetOneWebhookRequest$ {
    export const inboundSchema: z.ZodType<GetOneWebhookRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWebhookRequest> = z.object(
        {
            id: z.string(),
        }
    );
}

/** @internal */
export namespace GetOneWebhookResponse$ {
    export const inboundSchema: z.ZodType<GetOneWebhookResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Webhook: shared.Webhook$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                Webhook: "webhook",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Webhook?: shared.Webhook$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWebhookResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            webhook: shared.Webhook$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                webhook: "Webhook",
            });
        });
}
