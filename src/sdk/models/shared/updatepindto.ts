/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdatePinDtoMetadata = {};

export type UpdatePinDto = {
    metadata?: UpdatePinDtoMetadata | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace UpdatePinDtoMetadata$ {
    export const inboundSchema: z.ZodType<UpdatePinDtoMetadata, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePinDtoMetadata> = z.object(
        {}
    );
}

/** @internal */
export namespace UpdatePinDto$ {
    export const inboundSchema: z.ZodType<UpdatePinDto, z.ZodTypeDef, unknown> = z
        .object({
            metadata: z.lazy(() => UpdatePinDtoMetadata$.inboundSchema).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        metadata?: UpdatePinDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePinDto> = z
        .object({
            metadata: z.lazy(() => UpdatePinDtoMetadata$.outboundSchema).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
