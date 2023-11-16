/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAllNetworkRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
    id?: string;

    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Number of returned page. By default the returned page is the first.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testnet" })
    testnet?: boolean;
}

export class GetAllNetworkNetworkPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Network })
    @Expose({ name: "items" })
    @Type(() => shared.Network)
    items: shared.Network[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.PaginationData)
    meta: shared.PaginationData;
}

export class GetAllNetworkResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    networkPaginated?: GetAllNetworkNetworkPaginated;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    next: () => Promise<GetAllNetworkResponse | null>;
}
