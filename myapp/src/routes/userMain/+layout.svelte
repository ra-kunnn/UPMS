<script>
    export let data;
    $: ({ supabase } = data);

</script>

<main>
    <slot />
</main>