/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CustomGasDto, CustomGasDto$ } from "./customgasdto";
import * as z from "zod";

export type CreateTransactionDtoMetadata = {};

/**
 * The gas speed you want. If custom it requires customGas field
 */
export enum CreateTransactionDtoSpeed {
    Low = "low",
    Average = "average",
    Fast = "fast",
    Fastest = "fastest",
    Custom = "custom",
}

export type CreateTransactionDto = {
    customGas?: CustomGasDto | undefined;
    /**
     * Transaction data.
     */
    data?: string | undefined;
    gasLimit?: string | undefined;
    metadata?: CreateTransactionDtoMetadata | undefined;
    /**
     * Your network you want to perform transaction.
     */
    network: string;
    /**
     * Your transaction nonce. Don't fill this value if you want to use relayer nonce auto assignation.
     */
    nonce?: number | undefined;
    /**
     * Your kms address. It's also the from of your transaction.
     */
    signerWallet: string;
    /**
     * The gas speed you want. If custom it requires customGas field
     */
    speed?: CreateTransactionDtoSpeed | undefined;
    /**
     * The address you want to send to.
     */
    to?: string | undefined;
    /**
     * The value of the transaction in wei.
     */
    value?: string | undefined;
};

/** @internal */
export namespace CreateTransactionDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<CreateTransactionDtoMetadata, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionDtoMetadata> =
        z.object({});
}

/** @internal */
export const CreateTransactionDtoSpeed$: z.ZodNativeEnum<typeof CreateTransactionDtoSpeed> =
    z.nativeEnum(CreateTransactionDtoSpeed);

/** @internal */
export namespace CreateTransactionDto$ {
    export type Inbound = {
        customGas?: CustomGasDto$.Inbound | undefined;
        data?: string | undefined;
        gasLimit?: string | undefined;
        metadata?: CreateTransactionDtoMetadata$.Inbound | undefined;
        network: string;
        nonce?: number | undefined;
        signerWallet: string;
        speed?: CreateTransactionDtoSpeed | undefined;
        to?: string | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTransactionDto, z.ZodTypeDef, Inbound> = z
        .object({
            customGas: CustomGasDto$.inboundSchema.optional(),
            data: z.string().optional(),
            gasLimit: z.string().optional(),
            metadata: z.lazy(() => CreateTransactionDtoMetadata$.inboundSchema).optional(),
            network: z.string(),
            nonce: z.number().int().optional(),
            signerWallet: z.string(),
            speed: CreateTransactionDtoSpeed$.optional(),
            to: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.customGas === undefined ? null : { customGas: v.customGas }),
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.gasLimit === undefined ? null : { gasLimit: v.gasLimit }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                network: v.network,
                ...(v.nonce === undefined ? null : { nonce: v.nonce }),
                signerWallet: v.signerWallet,
                ...(v.speed === undefined ? null : { speed: v.speed }),
                ...(v.to === undefined ? null : { to: v.to }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        customGas?: CustomGasDto$.Outbound | undefined;
        data?: string | undefined;
        gasLimit?: string | undefined;
        metadata?: CreateTransactionDtoMetadata$.Outbound | undefined;
        network: string;
        nonce?: number | undefined;
        signerWallet: string;
        speed?: CreateTransactionDtoSpeed | undefined;
        to?: string | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionDto> = z
        .object({
            customGas: CustomGasDto$.outboundSchema.optional(),
            data: z.string().optional(),
            gasLimit: z.string().optional(),
            metadata: z.lazy(() => CreateTransactionDtoMetadata$.outboundSchema).optional(),
            network: z.string(),
            nonce: z.number().int().optional(),
            signerWallet: z.string(),
            speed: CreateTransactionDtoSpeed$.optional(),
            to: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.customGas === undefined ? null : { customGas: v.customGas }),
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.gasLimit === undefined ? null : { gasLimit: v.gasLimit }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                network: v.network,
                ...(v.nonce === undefined ? null : { nonce: v.nonce }),
                signerWallet: v.signerWallet,
                ...(v.speed === undefined ? null : { speed: v.speed }),
                ...(v.to === undefined ? null : { to: v.to }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
