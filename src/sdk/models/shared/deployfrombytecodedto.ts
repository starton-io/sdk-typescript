/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AbiObjectDto, AbiObjectDto$ } from "./abiobjectdto.js";
import { CustomGasDto, CustomGasDto$ } from "./customgasdto.js";
import * as z from "zod";

export type DeployFromBytecodeDto3 = {};

export type DeployFromBytecodeDtoParams = DeployFromBytecodeDto3 | string | number | boolean;

export enum DeployFromBytecodeDtoSpeed {
    Low = "low",
    Average = "average",
    Fast = "fast",
    Fastest = "fastest",
    Custom = "custom",
}

export type DeployFromBytecodeDto = {
    abi: Array<AbiObjectDto>;
    bytecode: string;
    customGas?: CustomGasDto | undefined;
    description?: string | undefined;
    gasLimit?: string | undefined;
    name: string;
    network: string;
    nonce?: number | undefined;
    /**
     * Smart contract constructor parameters.
     */
    params: Array<DeployFromBytecodeDto3 | string | number | boolean>;
    signerWallet: string;
    speed?: DeployFromBytecodeDtoSpeed | undefined;
    value?: string | undefined;
};

/** @internal */
export namespace DeployFromBytecodeDto3$ {
    export const inboundSchema: z.ZodType<DeployFromBytecodeDto3, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeployFromBytecodeDto3> =
        z.object({});
}

/** @internal */
export namespace DeployFromBytecodeDtoParams$ {
    export const inboundSchema: z.ZodType<DeployFromBytecodeDtoParams, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => DeployFromBytecodeDto3$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = DeployFromBytecodeDto3$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeployFromBytecodeDtoParams> =
        z.union([
            z.lazy(() => DeployFromBytecodeDto3$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace DeployFromBytecodeDtoSpeed$ {
    export const inboundSchema: z.ZodNativeEnum<typeof DeployFromBytecodeDtoSpeed> = z.nativeEnum(
        DeployFromBytecodeDtoSpeed
    );
    export const outboundSchema: z.ZodNativeEnum<typeof DeployFromBytecodeDtoSpeed> = inboundSchema;
}

/** @internal */
export namespace DeployFromBytecodeDto$ {
    export const inboundSchema: z.ZodType<DeployFromBytecodeDto, z.ZodTypeDef, unknown> = z.object({
        abi: z.array(AbiObjectDto$.inboundSchema),
        bytecode: z.string(),
        customGas: CustomGasDto$.inboundSchema.optional(),
        description: z.string().optional(),
        gasLimit: z.string().optional(),
        name: z.string(),
        network: z.string(),
        nonce: z.number().optional(),
        params: z.array(
            z.union([
                z.lazy(() => DeployFromBytecodeDto3$.inboundSchema),
                z.string(),
                z.number(),
                z.boolean(),
            ])
        ),
        signerWallet: z.string(),
        speed: DeployFromBytecodeDtoSpeed$.inboundSchema.optional(),
        value: z.string().optional(),
    });

    export type Outbound = {
        abi: Array<AbiObjectDto$.Outbound>;
        bytecode: string;
        customGas?: CustomGasDto$.Outbound | undefined;
        description?: string | undefined;
        gasLimit?: string | undefined;
        name: string;
        network: string;
        nonce?: number | undefined;
        params: Array<DeployFromBytecodeDto3$.Outbound | string | number | boolean>;
        signerWallet: string;
        speed?: string | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeployFromBytecodeDto> =
        z.object({
            abi: z.array(AbiObjectDto$.outboundSchema),
            bytecode: z.string(),
            customGas: CustomGasDto$.outboundSchema.optional(),
            description: z.string().optional(),
            gasLimit: z.string().optional(),
            name: z.string(),
            network: z.string(),
            nonce: z.number().optional(),
            params: z.array(
                z.union([
                    z.lazy(() => DeployFromBytecodeDto3$.outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            ),
            signerWallet: z.string(),
            speed: DeployFromBytecodeDtoSpeed$.outboundSchema.optional(),
            value: z.string().optional(),
        });
}
