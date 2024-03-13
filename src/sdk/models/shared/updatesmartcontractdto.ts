/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateSmartContractDtoMetadata = {};

export type UpdateSmartContractDto = {
    description?: string | undefined;
    metadata?: UpdateSmartContractDtoMetadata | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace UpdateSmartContractDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<UpdateSmartContractDtoMetadata, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSmartContractDtoMetadata> =
        z.object({});
}

/** @internal */
export namespace UpdateSmartContractDto$ {
    export type Inbound = {
        description?: string | undefined;
        metadata?: UpdateSmartContractDtoMetadata$.Inbound | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSmartContractDto, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string().optional(),
            metadata: z.lazy(() => UpdateSmartContractDtoMetadata$.inboundSchema).optional(),
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
        metadata?: UpdateSmartContractDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSmartContractDto> = z
        .object({
            description: z.string().optional(),
            metadata: z.lazy(() => UpdateSmartContractDtoMetadata$.outboundSchema).optional(),
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
