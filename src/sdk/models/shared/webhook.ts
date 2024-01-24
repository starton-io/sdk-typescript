/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Headers = {};

export type WebhookPayload = {};

export enum WebhookStatus {
    Retrying = "RETRYING",
    Successful = "SUCCESSFUL",
    Failed = "FAILED",
    Canceled = "CANCELED",
}

export type Webhook = {
    createdAt?: Date | undefined;
    headers: Headers | null;
    id: string;
    payload: WebhookPayload | null;
    projectId: string;
    refId: string;
    status: WebhookStatus;
    updatedAt?: Date | undefined;
    url: string;
};

/** @internal */
export namespace Headers$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Headers, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Headers> = z.object({});
}

/** @internal */
export namespace WebhookPayload$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<WebhookPayload, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WebhookPayload> = z.object({});
}

/** @internal */
export const WebhookStatus$ = z.nativeEnum(WebhookStatus);

/** @internal */
export namespace Webhook$ {
    export type Inbound = {
        createdAt?: string | undefined;
        headers: Headers$.Inbound | null;
        id: string;
        payload: WebhookPayload$.Inbound | null;
        projectId: string;
        refId: string;
        status: WebhookStatus;
        updatedAt?: string | undefined;
        url: string;
    };

    export const inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T16:52:29.292Z")
                .transform((v) => new Date(v)),
            headers: z.nullable(z.lazy(() => Headers$.inboundSchema)),
            id: z.string(),
            payload: z.nullable(z.lazy(() => WebhookPayload$.inboundSchema)),
            projectId: z.string(),
            refId: z.string(),
            status: WebhookStatus$,
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T16:52:29.292Z")
                .transform((v) => new Date(v)),
            url: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                headers: v.headers,
                id: v.id,
                payload: v.payload,
                projectId: v.projectId,
                refId: v.refId,
                status: v.status,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                url: v.url,
            };
        });

    export type Outbound = {
        createdAt: string;
        headers: Headers$.Outbound | null;
        id: string;
        payload: WebhookPayload$.Outbound | null;
        projectId: string;
        refId: string;
        status: WebhookStatus;
        updatedAt: string;
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Webhook> = z
        .object({
            createdAt: z
                .date()
                .default(() => new Date("2024-01-24T16:52:29.292Z"))
                .transform((v) => v.toISOString()),
            headers: z.nullable(z.lazy(() => Headers$.outboundSchema)),
            id: z.string(),
            payload: z.nullable(z.lazy(() => WebhookPayload$.outboundSchema)),
            projectId: z.string(),
            refId: z.string(),
            status: WebhookStatus$,
            updatedAt: z
                .date()
                .default(() => new Date("2024-01-24T16:52:29.292Z"))
                .transform((v) => v.toISOString()),
            url: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                headers: v.headers,
                id: v.id,
                payload: v.payload,
                projectId: v.projectId,
                refId: v.refId,
                status: v.status,
                updatedAt: v.updatedAt,
                url: v.url,
            };
        });
}
