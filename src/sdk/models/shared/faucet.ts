/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Faucet = {
    /**
     * Claim date.
     */
    createdAt?: Date | undefined;
    /**
     * Faucet claim id.
     */
    id: string;
    /**
     * Claim ip.
     */
    ip: string;
    /**
     * Testnet network claim.
     */
    network: string | null;
    /**
     * Hash transaction of native faucet transfer.
     */
    txHash?: string | null | undefined;
    /**
     * UserId claim.
     */
    userId?: string | null | undefined;
    /**
     * Claim wallet
     */
    wallet: string;
};

/** @internal */
export namespace Faucet$ {
    export type Inbound = {
        createdAt?: string | undefined;
        id: string;
        ip: string;
        network: string | null;
        txHash?: string | null | undefined;
        userId?: string | null | undefined;
        wallet: string;
    };

    export const inboundSchema: z.ZodType<Faucet, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-31T13:57:38.178Z")
                .transform((v) => new Date(v)),
            id: z.string(),
            ip: z.string(),
            network: z.nullable(z.string()),
            txHash: z.nullable(z.string()).optional(),
            userId: z.nullable(z.string()).optional(),
            wallet: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                id: v.id,
                ip: v.ip,
                network: v.network,
                ...(v.txHash === undefined ? null : { txHash: v.txHash }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                wallet: v.wallet,
            };
        });

    export type Outbound = {
        createdAt: string;
        id: string;
        ip: string;
        network: string | null;
        txHash?: string | null | undefined;
        userId?: string | null | undefined;
        wallet: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Faucet> = z
        .object({
            createdAt: z
                .date()
                .default(() => new Date("2024-01-31T13:57:38.178Z"))
                .transform((v) => v.toISOString()),
            id: z.string(),
            ip: z.string(),
            network: z.nullable(z.string()),
            txHash: z.nullable(z.string()).optional(),
            userId: z.nullable(z.string()).optional(),
            wallet: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                id: v.id,
                ip: v.ip,
                network: v.network,
                ...(v.txHash === undefined ? null : { txHash: v.txHash }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                wallet: v.wallet,
            };
        });
}
