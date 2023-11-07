/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum Status {
    Queued = "queued",
    Pinning = "pinning",
    Pinned = "pinned",
    Failed = "failed",
    Deleted = "deleted",
}

export class GetAllPinRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cid" })
    cid?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDirectoryContent" })
    includeDirectoryContent?: boolean;

    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
    name?: string;

    /**
     * Number of returned page. By default the returned page is the first.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: Status;
}

export class GetAllPinPinPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Pin })
    @Expose({ name: "items" })
    @Type(() => shared.Pin)
    items: shared.Pin[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.PaginationData)
    meta: shared.PaginationData;
}

export class GetAllPinResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    pinPaginated?: GetAllPinPinPaginated;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    next: () => Promise<GetAllPinResponse | null>;
}
