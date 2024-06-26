/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateWalletDtoMetadata = {};

export type CreateWalletDto = {
    description?: string | undefined;
    kmsId: string;
    metadata?: CreateWalletDtoMetadata | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace CreateWalletDtoMetadata$ {
    export const inboundSchema: z.ZodType<CreateWalletDtoMetadata, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateWalletDtoMetadata> =
        z.object({});
}

/** @internal */
export namespace CreateWalletDto$ {
    export const inboundSchema: z.ZodType<CreateWalletDto, z.ZodTypeDef, unknown> = z.object({
        description: z.string().optional(),
        kmsId: z.string(),
        metadata: z.lazy(() => CreateWalletDtoMetadata$.inboundSchema).optional(),
        name: z.string().optional(),
    });

    export type Outbound = {
        description?: string | undefined;
        kmsId: string;
        metadata?: CreateWalletDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateWalletDto> = z.object({
        description: z.string().optional(),
        kmsId: z.string(),
        metadata: z.lazy(() => CreateWalletDtoMetadata$.outboundSchema).optional(),
        name: z.string().optional(),
    });
}
