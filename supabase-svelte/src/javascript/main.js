// Install the Supabase JavaScript client library
// npm install @supabase/supabase-js

// Import the necessary modules
import { subapase } from '/src/routes/supabaseClient.ts';
import { writable } from 'svelte/store';

// Create a Supabase client instance
const supabase = createClient('your_supabase_url', 'your_supabase_public_key');

// Create a writable store for authentication state
export const auth = writable({
    user: null,
    session: null,
    error: null
});

// Define functions for authentication
export const signIn = async (email, password) => {
    try {
        const { user, session, error } = await supabase.auth.signIn({
            email,
            password
        });
        if (error) throw error;
        auth.set({ user, session, error: null });
    } catch (error) {
        auth.set({ user: null, session: null, error: error.message });
    }
};

export const signOut = async () => {
    try {
        await supabase.auth.signOut();
        auth.set({ user: null, session: null, error: null });
    } catch (error) {
        auth.set({ user: null, session: null, error: error.message });
    }
};

// Usage example in a Svelte component
<script>
    import { signIn } from './auth';
    let email = '';
    let password = '';

    const handleSubmit = async () => {
        await signIn(email, password);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">Sign In</button>
</form>
