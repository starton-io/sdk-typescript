/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export enum QueryParamStatus {
    Retrying = "RETRYING",
    Successful = "SUCCESSFUL",
    Failed = "FAILED",
    Canceled = "CANCELED",
}

export type GetAllWebhookRequest = {
    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    limit?: number | undefined;
    /**
     * Number of returned page. By default the returned page is the first.
     */
    page?: number | undefined;
    status?: QueryParamStatus | undefined;
};

export type GetAllWebhookWebhookPaginated = {
    items: Array<shared.Webhook>;
    meta: shared.PaginationData;
};

export type GetAllWebhookResponse = {
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
    webhookPaginated?: GetAllWebhookWebhookPaginated | undefined;
};

/** @internal */
export namespace QueryParamStatus$ {
    export const inboundSchema: z.ZodNativeEnum<typeof QueryParamStatus> =
        z.nativeEnum(QueryParamStatus);
    export const outboundSchema: z.ZodNativeEnum<typeof QueryParamStatus> = inboundSchema;
}

/** @internal */
export namespace GetAllWebhookRequest$ {
    export const inboundSchema: z.ZodType<GetAllWebhookRequest, z.ZodTypeDef, unknown> = z.object({
        limit: z.number().int().optional(),
        page: z.number().int().optional(),
        status: QueryParamStatus$.inboundSchema.optional(),
    });

    export type Outbound = {
        limit?: number | undefined;
        page?: number | undefined;
        status?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWebhookRequest> = z.object(
        {
            limit: z.number().int().optional(),
            page: z.number().int().optional(),
            status: QueryParamStatus$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace GetAllWebhookWebhookPaginated$ {
    export const inboundSchema: z.ZodType<GetAllWebhookWebhookPaginated, z.ZodTypeDef, unknown> =
        z.object({
            items: z.array(shared.Webhook$.inboundSchema),
            meta: shared.PaginationData$.inboundSchema,
        });

    export type Outbound = {
        items: Array<shared.Webhook$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWebhookWebhookPaginated> =
        z.object({
            items: z.array(shared.Webhook$.outboundSchema),
            meta: shared.PaginationData$.outboundSchema,
        });
}

/** @internal */
export namespace GetAllWebhookResponse$ {
    export const inboundSchema: z.ZodType<GetAllWebhookResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            WebhookPaginated: z.lazy(() => GetAllWebhookWebhookPaginated$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                WebhookPaginated: "webhookPaginated",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        WebhookPaginated?: GetAllWebhookWebhookPaginated$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWebhookResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            webhookPaginated: z
                .lazy(() => GetAllWebhookWebhookPaginated$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                webhookPaginated: "WebhookPaginated",
            });
        });
}
