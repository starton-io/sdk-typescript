/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export enum Role {
  Owner = "owner",
}

export type CreateInvitationDto = {
  email: string;
  role: Role;
};

/** @internal */
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(
  Role,
);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> =
  Role$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
  /** @deprecated use `Role$inboundSchema` instead. */
  export const inboundSchema = Role$inboundSchema;
  /** @deprecated use `Role$outboundSchema` instead. */
  export const outboundSchema = Role$outboundSchema;
}

/** @internal */
export const CreateInvitationDto$inboundSchema: z.ZodType<
  CreateInvitationDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string(),
  role: Role$inboundSchema,
});

/** @internal */
export type CreateInvitationDto$Outbound = {
  email: string;
  role: string;
};

/** @internal */
export const CreateInvitationDto$outboundSchema: z.ZodType<
  CreateInvitationDto$Outbound,
  z.ZodTypeDef,
  CreateInvitationDto
> = z.object({
  email: z.string(),
  role: Role$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateInvitationDto$ {
  /** @deprecated use `CreateInvitationDto$inboundSchema` instead. */
  export const inboundSchema = CreateInvitationDto$inboundSchema;
  /** @deprecated use `CreateInvitationDto$outboundSchema` instead. */
  export const outboundSchema = CreateInvitationDto$outboundSchema;
  /** @deprecated use `CreateInvitationDto$Outbound` instead. */
  export type Outbound = CreateInvitationDto$Outbound;
}

export function createInvitationDtoToJSON(
  createInvitationDto: CreateInvitationDto,
): string {
  return JSON.stringify(
    CreateInvitationDto$outboundSchema.parse(createInvitationDto),
  );
}

export function createInvitationDtoFromJSON(
  jsonString: string,
): SafeParseResult<CreateInvitationDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateInvitationDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateInvitationDto' from JSON`,
  );
}
