/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateWalletDtoMetadata = {};

export type UpdateWalletDto = {
    description?: string | undefined;
    metadata?: UpdateWalletDtoMetadata | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace UpdateWalletDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<UpdateWalletDtoMetadata, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWalletDtoMetadata> =
        z.object({});
}

/** @internal */
export namespace UpdateWalletDto$ {
    export type Inbound = {
        description?: string | undefined;
        metadata?: UpdateWalletDtoMetadata$.Inbound | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateWalletDto, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string().optional(),
            metadata: z.lazy(() => UpdateWalletDtoMetadata$.inboundSchema).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        description?: string | undefined;
        metadata?: UpdateWalletDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWalletDto> = z
        .object({
            description: z.string().optional(),
            metadata: z.lazy(() => UpdateWalletDtoMetadata$.outboundSchema).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
