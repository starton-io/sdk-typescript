/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum ExplorerApiDtoType {
    Etherscan = "etherscan",
    Blockscout = "blockscout",
}

export type ExplorerApiDto = {
    apiKey: string;
    type: ExplorerApiDtoType;
    url: string;
};

/** @internal */
export namespace ExplorerApiDtoType$ {
    export const inboundSchema = z.nativeEnum(ExplorerApiDtoType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ExplorerApiDto$ {
    export const inboundSchema: z.ZodType<ExplorerApiDto, z.ZodTypeDef, unknown> = z
        .object({
            apiKey: z.string(),
            type: ExplorerApiDtoType$.inboundSchema,
            url: z.string(),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                type: v.type,
                url: v.url,
            };
        });

    export type Outbound = {
        apiKey: string;
        type: string;
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExplorerApiDto> = z
        .object({
            apiKey: z.string(),
            type: ExplorerApiDtoType$.outboundSchema,
            url: z.string(),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                type: v.type,
                url: v.url,
            };
        });
}
