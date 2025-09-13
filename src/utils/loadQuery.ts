import type { QueryParams } from 'sanity';
import { client } from '@utils/sanity-client.ts';

export async function loadQuery<T = any>({ query, params }: { query: string; params?: QueryParams }) {
    console.log(query);
    let result = await client.fetch<T>(query, params);
    console.log(result);
    return result;
}
