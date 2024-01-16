/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteKmsKmsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

export class DeleteKmsKmsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: DeleteKmsKmsResponseBodyData;

    constructor(err: DeleteKmsKmsResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "DeleteKmsKmsResponseBody";
    }
}

export type DeleteKmsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

export class DeleteKmsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: DeleteKmsResponseBodyData;

    constructor(err: DeleteKmsResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "DeleteKmsResponseBody";
    }
}

/** @internal */
export namespace DeleteKmsKmsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteKmsKmsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new DeleteKmsKmsResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteKmsKmsResponseBody> = z
        .instanceof(DeleteKmsKmsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}

/** @internal */
export namespace DeleteKmsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteKmsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new DeleteKmsResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteKmsResponseBody> = z
        .instanceof(DeleteKmsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}