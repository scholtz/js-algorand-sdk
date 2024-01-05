import JSONRequest from '../jsonrequest.js';
import { HTTPClient } from '../../client.js';
import IntDecoding from '../../../types/intDecoding.js';

export default class LookupAccountAppLocalStates extends JSONRequest {
  /**
   * Returns application local state about the given account.
   *
   * #### Example
   * ```typescript
   * const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
   * const accountAppLocalStates = await indexerClient.lookupAccountAppLocalStates(address).do();
   * ```
   *
   * [Response data schema details](https://developer.algorand.org/docs/rest-apis/indexer/#get-v2accountsaccount-idapps-local-state)
   * @param account - The address of the account to look up.
   * @category GET
   */
  constructor(
    c: HTTPClient,
    intDecoding: IntDecoding,
    private account: string
  ) {
    super(c, intDecoding);
    this.account = account;
  }

  /**
   * @returns `/v2/accounts/${account}/apps-local-state`
   */
  path() {
    return `/v2/accounts/${this.account}/apps-local-state`;
  }

  /**
   * Add a limit for filter.
   *
   * #### Example
   * ```typescript
   * const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
   * const maxResults = 20;
   * const accountAssets = await indexerClient
   *        .lookupAccountAppLocalStates(address)
   *        .limit(maxResults)
   *        .do();
   * ```
   *
   * @param limit - maximum number of results to return.
   * @category query
   */
  limit(limit: number) {
    this.query.limit = limit;
    return this;
  }

  /**
   * Specify round to filter with.
   *
   * #### Example
   * ```typescript
   * const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
   * const targetBlock = 18309917;
   * const accountAssets = await indexerClient
   *        .lookupAccountAppLocalStates(address)
   *        .round(targetBlock)
   *        .do();
   * ```
   * @param round
   * @category query
   */
  round(round: number) {
    this.query.round = round;
    return this;
  }

  /**
   * Specify the next page of results.
   *
   * #### Example
   * ```typescript
   * const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
   * const maxResults = 20;
   *
   * const accountAssetsPage1 = await indexerClient
   *        .lookupAccountAppLocalStates(address)
   *        .limit(maxResults)
   *        .do();
   *
   * const accountAssetsPage2 = await indexerClient
   *        .lookupAccountAppLocalStates(address)
   *        .limit(maxResults)
   *        .next(accountAssetsPage1["next-token"])
   *        .do();
   * ```
   * @param nextToken - provided by the previous results.
   */
  nextToken(nextToken: string) {
    this.query.next = nextToken;
    return this;
  }

  /**
   * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates
   *
   * #### Example
   * ```typescript
   * const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
   * const accountAssets = await indexerClient
   *        .lookupAccountAppLocalStates(address)
   *        .includeAll(false)
   *        .do();
   * ```
   * @param value
   * @category query
   */
  includeAll(value = true) {
    this.query['include-all'] = value;
    return this;
  }

  /**
   * Specify an applicationID to search for.
   *
   * #### Example
   * ```typescript
   * const applicationID = 163650;
   * const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
   * const accountApplications = await indexerClient
   *        .lookupAccountAppLocalStates(address)
   *        .applicationID(applicationID)
   *        .do();
   * ```
   * @param index - the applicationID
   * @category query
   */
  applicationID(index: number) {
    this.query['application-id'] = index;
    return this;
  }
}
