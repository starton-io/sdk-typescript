/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type WebhookSigningSecret = {
    createdAt?: Date | undefined;
    projectId: string;
    secret: string;
    updatedAt?: Date | undefined;
};

/** @internal */
export namespace WebhookSigningSecret$ {
    export type Inbound = {
        createdAt?: string | undefined;
        projectId: string;
        secret: string;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<WebhookSigningSecret, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T16:52:29.274Z")
                .transform((v) => new Date(v)),
            projectId: z.string(),
            secret: z.string(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T16:52:29.274Z")
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                projectId: v.projectId,
                secret: v.secret,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        createdAt: string;
        projectId: string;
        secret: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WebhookSigningSecret> = z
        .object({
            createdAt: z
                .date()
                .default(() => new Date("2024-01-24T16:52:29.274Z"))
                .transform((v) => v.toISOString()),
            projectId: z.string(),
            secret: z.string(),
            updatedAt: z
                .date()
                .default(() => new Date("2024-01-24T16:52:29.274Z"))
                .transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                projectId: v.projectId,
                secret: v.secret,
                updatedAt: v.updatedAt,
            };
        });
}
