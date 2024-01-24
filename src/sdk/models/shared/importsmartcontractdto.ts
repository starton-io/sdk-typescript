/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AbiObjectDto, AbiObjectDto$ } from "./abiobjectdto";
import { z } from "zod";

export type ImportSmartContractDto3 = {};

export type ImportSmartContractDtoParams = ImportSmartContractDto3 | string | number | boolean;

export type ImportSmartContractDto = {
    abi: Array<AbiObjectDto>;
    address: string;
    creationHash?: string | undefined;
    description?: string | undefined;
    name: string;
    network: string;
    /**
     * Smart contract constructor parameters.
     */
    params?: Array<ImportSmartContractDto3 | string | number | boolean> | undefined;
    templateId?: string | undefined;
};

/** @internal */
export namespace ImportSmartContractDto3$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<ImportSmartContractDto3, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportSmartContractDto3> =
        z.object({});
}

/** @internal */
export namespace ImportSmartContractDtoParams$ {
    export type Inbound = ImportSmartContractDto3$.Inbound | string | number | boolean;

    export type Outbound = ImportSmartContractDto3$.Outbound | string | number | boolean;

    export const inboundSchema: z.ZodType<ImportSmartContractDtoParams, z.ZodTypeDef, Inbound> =
        z.union([
            z.lazy(() => ImportSmartContractDto3$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportSmartContractDtoParams> =
        z.union([
            z.lazy(() => ImportSmartContractDto3$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace ImportSmartContractDto$ {
    export type Inbound = {
        abi: Array<AbiObjectDto$.Inbound>;
        address: string;
        creationHash?: string | undefined;
        description?: string | undefined;
        name: string;
        network: string;
        params?: Array<ImportSmartContractDto3$.Inbound | string | number | boolean> | undefined;
        templateId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ImportSmartContractDto, z.ZodTypeDef, Inbound> = z
        .object({
            abi: z.array(AbiObjectDto$.inboundSchema),
            address: z.string(),
            creationHash: z.string().optional(),
            description: z.string().optional(),
            name: z.string(),
            network: z.string(),
            params: z
                .array(
                    z.union([
                        z.lazy(() => ImportSmartContractDto3$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            templateId: z.string().optional(),
        })
        .transform((v) => {
            return {
                abi: v.abi,
                address: v.address,
                ...(v.creationHash === undefined ? null : { creationHash: v.creationHash }),
                ...(v.description === undefined ? null : { description: v.description }),
                name: v.name,
                network: v.network,
                ...(v.params === undefined ? null : { params: v.params }),
                ...(v.templateId === undefined ? null : { templateId: v.templateId }),
            };
        });

    export type Outbound = {
        abi: Array<AbiObjectDto$.Outbound>;
        address: string;
        creationHash?: string | undefined;
        description?: string | undefined;
        name: string;
        network: string;
        params?: Array<ImportSmartContractDto3$.Outbound | string | number | boolean> | undefined;
        templateId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportSmartContractDto> = z
        .object({
            abi: z.array(AbiObjectDto$.outboundSchema),
            address: z.string(),
            creationHash: z.string().optional(),
            description: z.string().optional(),
            name: z.string(),
            network: z.string(),
            params: z
                .array(
                    z.union([
                        z.lazy(() => ImportSmartContractDto3$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            templateId: z.string().optional(),
        })
        .transform((v) => {
            return {
                abi: v.abi,
                address: v.address,
                ...(v.creationHash === undefined ? null : { creationHash: v.creationHash }),
                ...(v.description === undefined ? null : { description: v.description }),
                name: v.name,
                network: v.network,
                ...(v.params === undefined ? null : { params: v.params }),
                ...(v.templateId === undefined ? null : { templateId: v.templateId }),
            };
        });
}
