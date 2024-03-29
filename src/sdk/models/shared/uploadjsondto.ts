/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Content = {};

export type UploadJsonDtoMetadata = {};

export type UploadJsonDto = {
    content: Content;
    metadata?: UploadJsonDtoMetadata | undefined;
    name: string;
};

/** @internal */
export namespace Content$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Content, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Content> = z.object({});
}

/** @internal */
export namespace UploadJsonDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<UploadJsonDtoMetadata, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadJsonDtoMetadata> =
        z.object({});
}

/** @internal */
export namespace UploadJsonDto$ {
    export type Inbound = {
        content: Content$.Inbound;
        metadata?: UploadJsonDtoMetadata$.Inbound | undefined;
        name: string;
    };

    export const inboundSchema: z.ZodType<UploadJsonDto, z.ZodTypeDef, Inbound> = z
        .object({
            content: z.lazy(() => Content$.inboundSchema),
            metadata: z.lazy(() => UploadJsonDtoMetadata$.inboundSchema).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
            };
        });

    export type Outbound = {
        content: Content$.Outbound;
        metadata?: UploadJsonDtoMetadata$.Outbound | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadJsonDto> = z
        .object({
            content: z.lazy(() => Content$.outboundSchema),
            metadata: z.lazy(() => UploadJsonDtoMetadata$.outboundSchema).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
            };
        });
}
