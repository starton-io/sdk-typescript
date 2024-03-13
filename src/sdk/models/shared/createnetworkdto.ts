/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ExplorerApiDto, ExplorerApiDto$ } from "./explorerapidto";
import { GasPriceRecommendationDto, GasPriceRecommendationDto$ } from "./gaspricerecommendationdto";
import * as z from "zod";

export type CreateNetworkDto = {
    blockchain: string;
    chainId: number;
    confirmationBlocks: number;
    decimal?: number | undefined;
    displayName: string;
    eip1159?: boolean | undefined;
    enableExternalWallet?: boolean | undefined;
    enableListener?: boolean | undefined;
    enableRelayer?: boolean | undefined;
    explorerApi?: ExplorerApiDto | undefined;
    explorerUrl?: string | undefined;
    gasPriceRecommendation?: GasPriceRecommendationDto | undefined;
    logo: string;
    name: string;
    symbol: string;
    testnet?: boolean | undefined;
    verifyBlockIntegrity?: boolean | undefined;
    verifyTxIntegrity?: boolean | undefined;
};

/** @internal */
export namespace CreateNetworkDto$ {
    export type Inbound = {
        blockchain: string;
        chainId: number;
        confirmationBlocks: number;
        decimal?: number | undefined;
        displayName: string;
        eip1159?: boolean | undefined;
        enableExternalWallet?: boolean | undefined;
        enableListener?: boolean | undefined;
        enableRelayer?: boolean | undefined;
        explorerApi?: ExplorerApiDto$.Inbound | undefined;
        explorerUrl?: string | undefined;
        gasPriceRecommendation?: GasPriceRecommendationDto$.Inbound | undefined;
        logo: string;
        name: string;
        symbol: string;
        testnet?: boolean | undefined;
        verifyBlockIntegrity?: boolean | undefined;
        verifyTxIntegrity?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<CreateNetworkDto, z.ZodTypeDef, Inbound> = z
        .object({
            blockchain: z.string(),
            chainId: z.number(),
            confirmationBlocks: z.number(),
            decimal: z.number().optional(),
            displayName: z.string(),
            eip1159: z.boolean().optional(),
            enableExternalWallet: z.boolean().optional(),
            enableListener: z.boolean().optional(),
            enableRelayer: z.boolean().optional(),
            explorerApi: ExplorerApiDto$.inboundSchema.optional(),
            explorerUrl: z.string().optional(),
            gasPriceRecommendation: GasPriceRecommendationDto$.inboundSchema.optional(),
            logo: z.string(),
            name: z.string(),
            symbol: z.string(),
            testnet: z.boolean().optional(),
            verifyBlockIntegrity: z.boolean().optional(),
            verifyTxIntegrity: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                blockchain: v.blockchain,
                chainId: v.chainId,
                confirmationBlocks: v.confirmationBlocks,
                ...(v.decimal === undefined ? null : { decimal: v.decimal }),
                displayName: v.displayName,
                ...(v.eip1159 === undefined ? null : { eip1159: v.eip1159 }),
                ...(v.enableExternalWallet === undefined
                    ? null
                    : { enableExternalWallet: v.enableExternalWallet }),
                ...(v.enableListener === undefined ? null : { enableListener: v.enableListener }),
                ...(v.enableRelayer === undefined ? null : { enableRelayer: v.enableRelayer }),
                ...(v.explorerApi === undefined ? null : { explorerApi: v.explorerApi }),
                ...(v.explorerUrl === undefined ? null : { explorerUrl: v.explorerUrl }),
                ...(v.gasPriceRecommendation === undefined
                    ? null
                    : { gasPriceRecommendation: v.gasPriceRecommendation }),
                logo: v.logo,
                name: v.name,
                symbol: v.symbol,
                ...(v.testnet === undefined ? null : { testnet: v.testnet }),
                ...(v.verifyBlockIntegrity === undefined
                    ? null
                    : { verifyBlockIntegrity: v.verifyBlockIntegrity }),
                ...(v.verifyTxIntegrity === undefined
                    ? null
                    : { verifyTxIntegrity: v.verifyTxIntegrity }),
            };
        });

    export type Outbound = {
        blockchain: string;
        chainId: number;
        confirmationBlocks: number;
        decimal?: number | undefined;
        displayName: string;
        eip1159?: boolean | undefined;
        enableExternalWallet?: boolean | undefined;
        enableListener?: boolean | undefined;
        enableRelayer?: boolean | undefined;
        explorerApi?: ExplorerApiDto$.Outbound | undefined;
        explorerUrl?: string | undefined;
        gasPriceRecommendation?: GasPriceRecommendationDto$.Outbound | undefined;
        logo: string;
        name: string;
        symbol: string;
        testnet?: boolean | undefined;
        verifyBlockIntegrity?: boolean | undefined;
        verifyTxIntegrity?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateNetworkDto> = z
        .object({
            blockchain: z.string(),
            chainId: z.number(),
            confirmationBlocks: z.number(),
            decimal: z.number().optional(),
            displayName: z.string(),
            eip1159: z.boolean().optional(),
            enableExternalWallet: z.boolean().optional(),
            enableListener: z.boolean().optional(),
            enableRelayer: z.boolean().optional(),
            explorerApi: ExplorerApiDto$.outboundSchema.optional(),
            explorerUrl: z.string().optional(),
            gasPriceRecommendation: GasPriceRecommendationDto$.outboundSchema.optional(),
            logo: z.string(),
            name: z.string(),
            symbol: z.string(),
            testnet: z.boolean().optional(),
            verifyBlockIntegrity: z.boolean().optional(),
            verifyTxIntegrity: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                blockchain: v.blockchain,
                chainId: v.chainId,
                confirmationBlocks: v.confirmationBlocks,
                ...(v.decimal === undefined ? null : { decimal: v.decimal }),
                displayName: v.displayName,
                ...(v.eip1159 === undefined ? null : { eip1159: v.eip1159 }),
                ...(v.enableExternalWallet === undefined
                    ? null
                    : { enableExternalWallet: v.enableExternalWallet }),
                ...(v.enableListener === undefined ? null : { enableListener: v.enableListener }),
                ...(v.enableRelayer === undefined ? null : { enableRelayer: v.enableRelayer }),
                ...(v.explorerApi === undefined ? null : { explorerApi: v.explorerApi }),
                ...(v.explorerUrl === undefined ? null : { explorerUrl: v.explorerUrl }),
                ...(v.gasPriceRecommendation === undefined
                    ? null
                    : { gasPriceRecommendation: v.gasPriceRecommendation }),
                logo: v.logo,
                name: v.name,
                symbol: v.symbol,
                ...(v.testnet === undefined ? null : { testnet: v.testnet }),
                ...(v.verifyBlockIntegrity === undefined
                    ? null
                    : { verifyBlockIntegrity: v.verifyBlockIntegrity }),
                ...(v.verifyTxIntegrity === undefined
                    ? null
                    : { verifyTxIntegrity: v.verifyTxIntegrity }),
            };
        });
}
