/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateWatcherDtoMetadata = {};

export type UpdateWatcherDto = {
    confirmationsBlocks?: number | undefined;
    description?: string | null | undefined;
    metadata?: UpdateWatcherDtoMetadata | undefined;
    name?: string | null | undefined;
    paused?: boolean | undefined;
    webhookUrl?: string | undefined;
};

/** @internal */
export namespace UpdateWatcherDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<UpdateWatcherDtoMetadata, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWatcherDtoMetadata> =
        z.object({});
}

/** @internal */
export namespace UpdateWatcherDto$ {
    export type Inbound = {
        confirmationsBlocks?: number | undefined;
        description?: string | null | undefined;
        metadata?: UpdateWatcherDtoMetadata$.Inbound | undefined;
        name?: string | null | undefined;
        paused?: boolean | undefined;
        webhookUrl?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateWatcherDto, z.ZodTypeDef, Inbound> = z
        .object({
            confirmationsBlocks: z.number().optional(),
            description: z.nullable(z.string()).optional(),
            metadata: z.lazy(() => UpdateWatcherDtoMetadata$.inboundSchema).optional(),
            name: z.nullable(z.string()).optional(),
            paused: z.boolean().optional(),
            webhookUrl: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.confirmationsBlocks === undefined
                    ? null
                    : { confirmationsBlocks: v.confirmationsBlocks }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.paused === undefined ? null : { paused: v.paused }),
                ...(v.webhookUrl === undefined ? null : { webhookUrl: v.webhookUrl }),
            };
        });

    export type Outbound = {
        confirmationsBlocks?: number | undefined;
        description?: string | null | undefined;
        metadata?: UpdateWatcherDtoMetadata$.Outbound | undefined;
        name?: string | null | undefined;
        paused?: boolean | undefined;
        webhookUrl?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWatcherDto> = z
        .object({
            confirmationsBlocks: z.number().optional(),
            description: z.nullable(z.string()).optional(),
            metadata: z.lazy(() => UpdateWatcherDtoMetadata$.outboundSchema).optional(),
            name: z.nullable(z.string()).optional(),
            paused: z.boolean().optional(),
            webhookUrl: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.confirmationsBlocks === undefined
                    ? null
                    : { confirmationsBlocks: v.confirmationsBlocks }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.paused === undefined ? null : { paused: v.paused }),
                ...(v.webhookUrl === undefined ? null : { webhookUrl: v.webhookUrl }),
            };
        });
}
