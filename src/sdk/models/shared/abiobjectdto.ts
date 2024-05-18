/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AbiInputDto, AbiInputDto$ } from "./abiinputdto";
import { AbiOutputDto, AbiOutputDto$ } from "./abioutputdto";
import * as z from "zod";

export enum StateMutability {
    Pure = "pure",
    View = "view",
    Nonpayable = "nonpayable",
    Payable = "payable",
}

export enum Type {
    Constructor = "constructor",
    Event = "event",
    Function = "function",
    Receive = "receive",
    Fallback = "fallback",
    Error = "error",
}

export type AbiObjectDto = {
    anonymous?: boolean | undefined;
    constant?: boolean | undefined;
    inputs?: AbiInputDto | undefined;
    name?: string | undefined;
    outputs?: AbiOutputDto | undefined;
    payability?: boolean | undefined;
    stateMutability?: StateMutability | undefined;
    type: Type;
};

/** @internal */
export namespace StateMutability$ {
    export const inboundSchema = z.nativeEnum(StateMutability);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Type$ {
    export const inboundSchema = z.nativeEnum(Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AbiObjectDto$ {
    export const inboundSchema: z.ZodType<AbiObjectDto, z.ZodTypeDef, unknown> = z
        .object({
            anonymous: z.boolean().optional(),
            constant: z.boolean().optional(),
            inputs: AbiInputDto$.inboundSchema.optional(),
            name: z.string().optional(),
            outputs: AbiOutputDto$.inboundSchema.optional(),
            payability: z.boolean().optional(),
            stateMutability: StateMutability$.inboundSchema.optional(),
            type: Type$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.anonymous === undefined ? null : { anonymous: v.anonymous }),
                ...(v.constant === undefined ? null : { constant: v.constant }),
                ...(v.inputs === undefined ? null : { inputs: v.inputs }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.outputs === undefined ? null : { outputs: v.outputs }),
                ...(v.payability === undefined ? null : { payability: v.payability }),
                ...(v.stateMutability === undefined
                    ? null
                    : { stateMutability: v.stateMutability }),
                type: v.type,
            };
        });

    export type Outbound = {
        anonymous?: boolean | undefined;
        constant?: boolean | undefined;
        inputs?: AbiInputDto$.Outbound | undefined;
        name?: string | undefined;
        outputs?: AbiOutputDto$.Outbound | undefined;
        payability?: boolean | undefined;
        stateMutability?: string | undefined;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AbiObjectDto> = z
        .object({
            anonymous: z.boolean().optional(),
            constant: z.boolean().optional(),
            inputs: AbiInputDto$.outboundSchema.optional(),
            name: z.string().optional(),
            outputs: AbiOutputDto$.outboundSchema.optional(),
            payability: z.boolean().optional(),
            stateMutability: StateMutability$.outboundSchema.optional(),
            type: Type$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.anonymous === undefined ? null : { anonymous: v.anonymous }),
                ...(v.constant === undefined ? null : { constant: v.constant }),
                ...(v.inputs === undefined ? null : { inputs: v.inputs }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.outputs === undefined ? null : { outputs: v.outputs }),
                ...(v.payability === undefined ? null : { payability: v.payability }),
                ...(v.stateMutability === undefined
                    ? null
                    : { stateMutability: v.stateMutability }),
                type: v.type,
            };
        });
}
