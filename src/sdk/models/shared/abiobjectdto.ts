/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AbiInputDto,
  AbiInputDto$inboundSchema,
  AbiInputDto$Outbound,
  AbiInputDto$outboundSchema,
} from "./abiinputdto.js";
import {
  AbiOutputDto,
  AbiOutputDto$inboundSchema,
  AbiOutputDto$Outbound,
  AbiOutputDto$outboundSchema,
} from "./abioutputdto.js";

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
export const StateMutability$inboundSchema: z.ZodNativeEnum<
  typeof StateMutability
> = z.nativeEnum(StateMutability);

/** @internal */
export const StateMutability$outboundSchema: z.ZodNativeEnum<
  typeof StateMutability
> = StateMutability$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StateMutability$ {
  /** @deprecated use `StateMutability$inboundSchema` instead. */
  export const inboundSchema = StateMutability$inboundSchema;
  /** @deprecated use `StateMutability$outboundSchema` instead. */
  export const outboundSchema = StateMutability$outboundSchema;
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const AbiObjectDto$inboundSchema: z.ZodType<
  AbiObjectDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  anonymous: z.boolean().optional(),
  constant: z.boolean().optional(),
  inputs: AbiInputDto$inboundSchema.optional(),
  name: z.string().optional(),
  outputs: AbiOutputDto$inboundSchema.optional(),
  payability: z.boolean().optional(),
  stateMutability: StateMutability$inboundSchema.optional(),
  type: Type$inboundSchema,
});

/** @internal */
export type AbiObjectDto$Outbound = {
  anonymous?: boolean | undefined;
  constant?: boolean | undefined;
  inputs?: AbiInputDto$Outbound | undefined;
  name?: string | undefined;
  outputs?: AbiOutputDto$Outbound | undefined;
  payability?: boolean | undefined;
  stateMutability?: string | undefined;
  type: string;
};

/** @internal */
export const AbiObjectDto$outboundSchema: z.ZodType<
  AbiObjectDto$Outbound,
  z.ZodTypeDef,
  AbiObjectDto
> = z.object({
  anonymous: z.boolean().optional(),
  constant: z.boolean().optional(),
  inputs: AbiInputDto$outboundSchema.optional(),
  name: z.string().optional(),
  outputs: AbiOutputDto$outboundSchema.optional(),
  payability: z.boolean().optional(),
  stateMutability: StateMutability$outboundSchema.optional(),
  type: Type$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AbiObjectDto$ {
  /** @deprecated use `AbiObjectDto$inboundSchema` instead. */
  export const inboundSchema = AbiObjectDto$inboundSchema;
  /** @deprecated use `AbiObjectDto$outboundSchema` instead. */
  export const outboundSchema = AbiObjectDto$outboundSchema;
  /** @deprecated use `AbiObjectDto$Outbound` instead. */
  export type Outbound = AbiObjectDto$Outbound;
}

export function abiObjectDtoToJSON(abiObjectDto: AbiObjectDto): string {
  return JSON.stringify(AbiObjectDto$outboundSchema.parse(abiObjectDto));
}

export function abiObjectDtoFromJSON(
  jsonString: string,
): SafeParseResult<AbiObjectDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AbiObjectDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AbiObjectDto' from JSON`,
  );
}
