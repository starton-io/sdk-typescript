/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GasPriceRecommendation = {};

export type Network = {
    blockchain: string;
    chainId: number;
    confirmationBlocks: number;
    createdAt?: Date | undefined;
    decimal: number;
    displayName: string;
    eip1159: boolean;
    enableExternalWallet: boolean;
    enableListener: boolean;
    enableRelayer: boolean;
    explorerUrl: string;
    faucetUrl?: string | null | undefined;
    gasPriceRecommendation?: GasPriceRecommendation | null | undefined;
    loadbalancerUrl: string;
    logo: string;
    name: string;
    owner: string;
    symbol: string;
    testnet: boolean;
    updatedAt?: Date | undefined;
    verifyBlockIntegrity: boolean;
    verifyTxIntegrity: boolean;
};

/** @internal */
export namespace GasPriceRecommendation$ {
    export const inboundSchema: z.ZodType<GasPriceRecommendation, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GasPriceRecommendation> =
        z.object({});
}

/** @internal */
export namespace Network$ {
    export const inboundSchema: z.ZodType<Network, z.ZodTypeDef, unknown> = z.object({
        blockchain: z.string(),
        chainId: z.number(),
        confirmationBlocks: z.number(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-01-31T13:57:36.282Z")
            .transform((v) => new Date(v)),
        decimal: z.number(),
        displayName: z.string(),
        eip1159: z.boolean(),
        enableExternalWallet: z.boolean(),
        enableListener: z.boolean(),
        enableRelayer: z.boolean(),
        explorerUrl: z.string(),
        faucetUrl: z.nullable(z.string()).optional(),
        gasPriceRecommendation: z
            .nullable(z.lazy(() => GasPriceRecommendation$.inboundSchema))
            .optional(),
        loadbalancerUrl: z.string(),
        logo: z.string(),
        name: z.string(),
        owner: z.string(),
        symbol: z.string(),
        testnet: z.boolean(),
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-01-31T13:57:36.282Z")
            .transform((v) => new Date(v)),
        verifyBlockIntegrity: z.boolean(),
        verifyTxIntegrity: z.boolean(),
    });

    export type Outbound = {
        blockchain: string;
        chainId: number;
        confirmationBlocks: number;
        createdAt: string;
        decimal: number;
        displayName: string;
        eip1159: boolean;
        enableExternalWallet: boolean;
        enableListener: boolean;
        enableRelayer: boolean;
        explorerUrl: string;
        faucetUrl?: string | null | undefined;
        gasPriceRecommendation?: GasPriceRecommendation$.Outbound | null | undefined;
        loadbalancerUrl: string;
        logo: string;
        name: string;
        owner: string;
        symbol: string;
        testnet: boolean;
        updatedAt: string;
        verifyBlockIntegrity: boolean;
        verifyTxIntegrity: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Network> = z.object({
        blockchain: z.string(),
        chainId: z.number(),
        confirmationBlocks: z.number(),
        createdAt: z
            .date()
            .default(() => new Date("2024-01-31T13:57:36.282Z"))
            .transform((v) => v.toISOString()),
        decimal: z.number(),
        displayName: z.string(),
        eip1159: z.boolean(),
        enableExternalWallet: z.boolean(),
        enableListener: z.boolean(),
        enableRelayer: z.boolean(),
        explorerUrl: z.string(),
        faucetUrl: z.nullable(z.string()).optional(),
        gasPriceRecommendation: z
            .nullable(z.lazy(() => GasPriceRecommendation$.outboundSchema))
            .optional(),
        loadbalancerUrl: z.string(),
        logo: z.string(),
        name: z.string(),
        owner: z.string(),
        symbol: z.string(),
        testnet: z.boolean(),
        updatedAt: z
            .date()
            .default(() => new Date("2024-01-31T13:57:36.282Z"))
            .transform((v) => v.toISOString()),
        verifyBlockIntegrity: z.boolean(),
        verifyTxIntegrity: z.boolean(),
    });
}
