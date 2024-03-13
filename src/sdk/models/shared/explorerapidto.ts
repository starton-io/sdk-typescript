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
export const ExplorerApiDtoType$ = z.nativeEnum(ExplorerApiDtoType);

/** @internal */
export namespace ExplorerApiDto$ {
    export type Inbound = {
        apiKey: string;
        type: ExplorerApiDtoType;
        url: string;
    };

    export const inboundSchema: z.ZodType<ExplorerApiDto, z.ZodTypeDef, Inbound> = z
        .object({
            apiKey: z.string(),
            type: ExplorerApiDtoType$,
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
        type: ExplorerApiDtoType;
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExplorerApiDto> = z
        .object({
            apiKey: z.string(),
            type: ExplorerApiDtoType$,
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
