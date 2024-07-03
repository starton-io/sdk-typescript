/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SettingRelayer = {
    createdAt?: Date | undefined;
    id: string;
    network: string;
    projectId: string;
    unstuckAutomaticGasPrice: boolean;
    unstuckCustomGasPrice: boolean;
    unstuckGasPriceDelay: number;
    unstuckMaxGasPrice: string;
    unstuckMissingNonce: boolean;
    unstuckMissingNonceDelay: number;
    updatedAt?: Date | undefined;
};

/** @internal */
export namespace SettingRelayer$ {
    export const inboundSchema: z.ZodType<SettingRelayer, z.ZodTypeDef, unknown> = z.object({
        createdAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-05-02T09:34:19.284Z")
            .transform((v) => new Date(v)),
        id: z.string(),
        network: z.string(),
        projectId: z.string(),
        unstuckAutomaticGasPrice: z.boolean(),
        unstuckCustomGasPrice: z.boolean(),
        unstuckGasPriceDelay: z.number(),
        unstuckMaxGasPrice: z.string(),
        unstuckMissingNonce: z.boolean(),
        unstuckMissingNonceDelay: z.number(),
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-05-02T09:34:19.284Z")
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        createdAt: string;
        id: string;
        network: string;
        projectId: string;
        unstuckAutomaticGasPrice: boolean;
        unstuckCustomGasPrice: boolean;
        unstuckGasPriceDelay: number;
        unstuckMaxGasPrice: string;
        unstuckMissingNonce: boolean;
        unstuckMissingNonceDelay: number;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SettingRelayer> = z.object({
        createdAt: z
            .date()
            .default(() => new Date("2024-05-02T09:34:19.284Z"))
            .transform((v) => v.toISOString()),
        id: z.string(),
        network: z.string(),
        projectId: z.string(),
        unstuckAutomaticGasPrice: z.boolean(),
        unstuckCustomGasPrice: z.boolean(),
        unstuckGasPriceDelay: z.number(),
        unstuckMaxGasPrice: z.string(),
        unstuckMissingNonce: z.boolean(),
        unstuckMissingNonceDelay: z.number(),
        updatedAt: z
            .date()
            .default(() => new Date("2024-05-02T09:34:19.284Z"))
            .transform((v) => v.toISOString()),
    });
}
