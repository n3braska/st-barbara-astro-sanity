import type { QueryParams } from 'sanity';
import { client } from '@utils/sanity-client.ts';

export async function loadQuery<T = any>({ query, params }: { query: string; params?: QueryParams }) {
    return await client.fetch<T>(query, params);
}
