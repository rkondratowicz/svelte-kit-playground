import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import type { Post } from 'src/schema';

export const ssr = false;

export const load = (async () => {
    let { data, error } =
        await supabase
            .from('post')
            .select('*');

    console.log("dane");
    console.log(data);
    console.log(error);
    let typed = <Array<Post>>data;
    console.log(typed);

    return { posts: typed };
}) satisfies PageLoad;