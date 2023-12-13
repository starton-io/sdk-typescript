/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CreatePinDtoMetadata = {};

export type CreatePinDto = {
    cid: string;
    metadata?: CreatePinDtoMetadata | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace CreatePinDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<CreatePinDtoMetadata, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePinDtoMetadata> = z.object(
        {}
    );
}

/** @internal */
export namespace CreatePinDto$ {
    export type Inbound = {
        cid: string;
        metadata?: CreatePinDtoMetadata$.Inbound | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreatePinDto, z.ZodTypeDef, Inbound> = z
        .object({
            cid: z.string(),
            metadata: z.lazy(() => CreatePinDtoMetadata$.inboundSchema).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                cid: v.cid,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        cid: string;
        metadata?: CreatePinDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePinDto> = z
        .object({
            cid: z.string(),
            metadata: z.lazy(() => CreatePinDtoMetadata$.outboundSchema).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                cid: v.cid,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
