/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetAllWalletRequest = {
  /**
   * Number of entities returned on each page. By default this number is set to 100.
   */
  limit?: number | undefined;
  name?: string | undefined;
  /**
   * Number of returned page. By default the returned page is the first.
   */
  page?: number | undefined;
};

export type GetAllWalletWalletPaginated = {
  items: Array<shared.Wallet>;
  meta: shared.PaginationData;
};

export type GetAllWalletResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  walletPaginated?: GetAllWalletWalletPaginated | undefined;
};

/** @internal */
export const GetAllWalletRequest$inboundSchema: z.ZodType<
  GetAllWalletRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(100),
  name: z.string().optional(),
  page: z.number().int().optional(),
});

/** @internal */
export type GetAllWalletRequest$Outbound = {
  limit: number;
  name?: string | undefined;
  page?: number | undefined;
};

/** @internal */
export const GetAllWalletRequest$outboundSchema: z.ZodType<
  GetAllWalletRequest$Outbound,
  z.ZodTypeDef,
  GetAllWalletRequest
> = z.object({
  limit: z.number().int().default(100),
  name: z.string().optional(),
  page: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWalletRequest$ {
  /** @deprecated use `GetAllWalletRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllWalletRequest$inboundSchema;
  /** @deprecated use `GetAllWalletRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllWalletRequest$outboundSchema;
  /** @deprecated use `GetAllWalletRequest$Outbound` instead. */
  export type Outbound = GetAllWalletRequest$Outbound;
}

/** @internal */
export const GetAllWalletWalletPaginated$inboundSchema: z.ZodType<
  GetAllWalletWalletPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(shared.Wallet$inboundSchema),
  meta: shared.PaginationData$inboundSchema,
});

/** @internal */
export type GetAllWalletWalletPaginated$Outbound = {
  items: Array<shared.Wallet$Outbound>;
  meta: shared.PaginationData$Outbound;
};

/** @internal */
export const GetAllWalletWalletPaginated$outboundSchema: z.ZodType<
  GetAllWalletWalletPaginated$Outbound,
  z.ZodTypeDef,
  GetAllWalletWalletPaginated
> = z.object({
  items: z.array(shared.Wallet$outboundSchema),
  meta: shared.PaginationData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWalletWalletPaginated$ {
  /** @deprecated use `GetAllWalletWalletPaginated$inboundSchema` instead. */
  export const inboundSchema = GetAllWalletWalletPaginated$inboundSchema;
  /** @deprecated use `GetAllWalletWalletPaginated$outboundSchema` instead. */
  export const outboundSchema = GetAllWalletWalletPaginated$outboundSchema;
  /** @deprecated use `GetAllWalletWalletPaginated$Outbound` instead. */
  export type Outbound = GetAllWalletWalletPaginated$Outbound;
}

/** @internal */
export const GetAllWalletResponse$inboundSchema: z.ZodType<
  GetAllWalletResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  WalletPaginated: z.lazy(() => GetAllWalletWalletPaginated$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "WalletPaginated": "walletPaginated",
  });
});

/** @internal */
export type GetAllWalletResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  WalletPaginated?: GetAllWalletWalletPaginated$Outbound | undefined;
};

/** @internal */
export const GetAllWalletResponse$outboundSchema: z.ZodType<
  GetAllWalletResponse$Outbound,
  z.ZodTypeDef,
  GetAllWalletResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  walletPaginated: z.lazy(() => GetAllWalletWalletPaginated$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    walletPaginated: "WalletPaginated",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWalletResponse$ {
  /** @deprecated use `GetAllWalletResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllWalletResponse$inboundSchema;
  /** @deprecated use `GetAllWalletResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllWalletResponse$outboundSchema;
  /** @deprecated use `GetAllWalletResponse$Outbound` instead. */
  export type Outbound = GetAllWalletResponse$Outbound;
}
