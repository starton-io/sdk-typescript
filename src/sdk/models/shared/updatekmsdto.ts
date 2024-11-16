/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AwsKmsCredentialsDto,
  AwsKmsCredentialsDto$inboundSchema,
  AwsKmsCredentialsDto$Outbound,
  AwsKmsCredentialsDto$outboundSchema,
} from "./awskmscredentialsdto.js";
import {
  VaultKmsCredentialsDto,
  VaultKmsCredentialsDto$inboundSchema,
  VaultKmsCredentialsDto$Outbound,
  VaultKmsCredentialsDto$outboundSchema,
} from "./vaultkmscredentialsdto.js";

export type UpdateKmsDtoCredentials =
  | AwsKmsCredentialsDto
  | VaultKmsCredentialsDto;

export type UpdateKmsDtoMetadata = {};

export type UpdateKmsDto = {
  credentials?: AwsKmsCredentialsDto | VaultKmsCredentialsDto | undefined;
  metadata?: UpdateKmsDtoMetadata | undefined;
  name?: string | undefined;
  secret?: string | undefined;
};

/** @internal */
export const UpdateKmsDtoCredentials$inboundSchema: z.ZodType<
  UpdateKmsDtoCredentials,
  z.ZodTypeDef,
  unknown
> = z.union([
  AwsKmsCredentialsDto$inboundSchema,
  VaultKmsCredentialsDto$inboundSchema,
]);

/** @internal */
export type UpdateKmsDtoCredentials$Outbound =
  | AwsKmsCredentialsDto$Outbound
  | VaultKmsCredentialsDto$Outbound;

/** @internal */
export const UpdateKmsDtoCredentials$outboundSchema: z.ZodType<
  UpdateKmsDtoCredentials$Outbound,
  z.ZodTypeDef,
  UpdateKmsDtoCredentials
> = z.union([
  AwsKmsCredentialsDto$outboundSchema,
  VaultKmsCredentialsDto$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsDtoCredentials$ {
  /** @deprecated use `UpdateKmsDtoCredentials$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsDtoCredentials$inboundSchema;
  /** @deprecated use `UpdateKmsDtoCredentials$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsDtoCredentials$outboundSchema;
  /** @deprecated use `UpdateKmsDtoCredentials$Outbound` instead. */
  export type Outbound = UpdateKmsDtoCredentials$Outbound;
}

export function updateKmsDtoCredentialsToJSON(
  updateKmsDtoCredentials: UpdateKmsDtoCredentials,
): string {
  return JSON.stringify(
    UpdateKmsDtoCredentials$outboundSchema.parse(updateKmsDtoCredentials),
  );
}

export function updateKmsDtoCredentialsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateKmsDtoCredentials, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateKmsDtoCredentials$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateKmsDtoCredentials' from JSON`,
  );
}

/** @internal */
export const UpdateKmsDtoMetadata$inboundSchema: z.ZodType<
  UpdateKmsDtoMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UpdateKmsDtoMetadata$Outbound = {};

/** @internal */
export const UpdateKmsDtoMetadata$outboundSchema: z.ZodType<
  UpdateKmsDtoMetadata$Outbound,
  z.ZodTypeDef,
  UpdateKmsDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsDtoMetadata$ {
  /** @deprecated use `UpdateKmsDtoMetadata$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsDtoMetadata$inboundSchema;
  /** @deprecated use `UpdateKmsDtoMetadata$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsDtoMetadata$outboundSchema;
  /** @deprecated use `UpdateKmsDtoMetadata$Outbound` instead. */
  export type Outbound = UpdateKmsDtoMetadata$Outbound;
}

export function updateKmsDtoMetadataToJSON(
  updateKmsDtoMetadata: UpdateKmsDtoMetadata,
): string {
  return JSON.stringify(
    UpdateKmsDtoMetadata$outboundSchema.parse(updateKmsDtoMetadata),
  );
}

export function updateKmsDtoMetadataFromJSON(
  jsonString: string,
): SafeParseResult<UpdateKmsDtoMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateKmsDtoMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateKmsDtoMetadata' from JSON`,
  );
}

/** @internal */
export const UpdateKmsDto$inboundSchema: z.ZodType<
  UpdateKmsDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  credentials: z.union([
    AwsKmsCredentialsDto$inboundSchema,
    VaultKmsCredentialsDto$inboundSchema,
  ]).optional(),
  metadata: z.lazy(() => UpdateKmsDtoMetadata$inboundSchema).optional(),
  name: z.string().optional(),
  secret: z.string().optional(),
});

/** @internal */
export type UpdateKmsDto$Outbound = {
  credentials?:
    | AwsKmsCredentialsDto$Outbound
    | VaultKmsCredentialsDto$Outbound
    | undefined;
  metadata?: UpdateKmsDtoMetadata$Outbound | undefined;
  name?: string | undefined;
  secret?: string | undefined;
};

/** @internal */
export const UpdateKmsDto$outboundSchema: z.ZodType<
  UpdateKmsDto$Outbound,
  z.ZodTypeDef,
  UpdateKmsDto
> = z.object({
  credentials: z.union([
    AwsKmsCredentialsDto$outboundSchema,
    VaultKmsCredentialsDto$outboundSchema,
  ]).optional(),
  metadata: z.lazy(() => UpdateKmsDtoMetadata$outboundSchema).optional(),
  name: z.string().optional(),
  secret: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsDto$ {
  /** @deprecated use `UpdateKmsDto$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsDto$inboundSchema;
  /** @deprecated use `UpdateKmsDto$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsDto$outboundSchema;
  /** @deprecated use `UpdateKmsDto$Outbound` instead. */
  export type Outbound = UpdateKmsDto$Outbound;
}

export function updateKmsDtoToJSON(updateKmsDto: UpdateKmsDto): string {
  return JSON.stringify(UpdateKmsDto$outboundSchema.parse(updateKmsDto));
}

export function updateKmsDtoFromJSON(
  jsonString: string,
): SafeParseResult<UpdateKmsDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateKmsDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateKmsDto' from JSON`,
  );
}
