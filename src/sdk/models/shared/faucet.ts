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
    export const inboundSchema: z.ZodType<Faucet, z.ZodTypeDef, unknown> = z.object({
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Faucet> = z.object({
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
    });
}
