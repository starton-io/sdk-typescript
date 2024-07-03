/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type WebhookSigningSecret = {
    createdAt?: Date | undefined;
    projectId: string;
    secret: string;
    updatedAt?: Date | undefined;
};

/** @internal */
export namespace WebhookSigningSecret$ {
    export const inboundSchema: z.ZodType<WebhookSigningSecret, z.ZodTypeDef, unknown> = z.object({
        createdAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-05-02T09:34:00.631Z")
            .transform((v) => new Date(v)),
        projectId: z.string(),
        secret: z.string(),
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-05-02T09:34:00.631Z")
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        createdAt: string;
        projectId: string;
        secret: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WebhookSigningSecret> = z.object(
        {
            createdAt: z
                .date()
                .default(() => new Date("2024-05-02T09:34:00.631Z"))
                .transform((v) => v.toISOString()),
            projectId: z.string(),
            secret: z.string(),
            updatedAt: z
                .date()
                .default(() => new Date("2024-05-02T09:34:00.631Z"))
                .transform((v) => v.toISOString()),
        }
    );
}
