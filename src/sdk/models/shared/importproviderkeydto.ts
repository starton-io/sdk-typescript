/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ImportProviderKeyDtoMetadata = {};

export enum ImportProviderKeyDtoProvider {
    Aws = "AWS",
    Vault = "Vault",
}

export type ImportProviderKeyDto = {
    description?: string | undefined;
    metadata?: ImportProviderKeyDtoMetadata | undefined;
    name?: string | undefined;
    provider: ImportProviderKeyDtoProvider;
    providerKeyId?: string | undefined;
};

/** @internal */
export namespace ImportProviderKeyDtoMetadata$ {
    export const inboundSchema: z.ZodType<ImportProviderKeyDtoMetadata, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportProviderKeyDtoMetadata> =
        z.object({});
}

/** @internal */
export namespace ImportProviderKeyDtoProvider$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ImportProviderKeyDtoProvider> = z.nativeEnum(
        ImportProviderKeyDtoProvider
    );
    export const outboundSchema: z.ZodNativeEnum<typeof ImportProviderKeyDtoProvider> =
        inboundSchema;
}

/** @internal */
export namespace ImportProviderKeyDto$ {
    export const inboundSchema: z.ZodType<ImportProviderKeyDto, z.ZodTypeDef, unknown> = z.object({
        description: z.string().optional(),
        metadata: z.lazy(() => ImportProviderKeyDtoMetadata$.inboundSchema).optional(),
        name: z.string().optional(),
        provider: ImportProviderKeyDtoProvider$.inboundSchema,
        providerKeyId: z.string().optional(),
    });

    export type Outbound = {
        description?: string | undefined;
        metadata?: ImportProviderKeyDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
        provider: string;
        providerKeyId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportProviderKeyDto> = z.object(
        {
            description: z.string().optional(),
            metadata: z.lazy(() => ImportProviderKeyDtoMetadata$.outboundSchema).optional(),
            name: z.string().optional(),
            provider: ImportProviderKeyDtoProvider$.outboundSchema,
            providerKeyId: z.string().optional(),
        }
    );
}
