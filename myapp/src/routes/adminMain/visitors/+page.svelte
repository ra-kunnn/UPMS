<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    const modalStore = getModalStore();

    function assignTenants(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'AssignTenants',
        };
        modalStore.trigger(modal);
    }
    export let data:PageData;

    const logout = async () => {
        const { supabase } = data; // Destructure supabase from data
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };

    interface Visitors{
        visitorID: number;
        visitorName: string;
        startDateOfVisit: Date;
        visitorRelation: string;
        tenantID: number;
        endDateOfVisit: Date;
        isApproved: boolean;
    }

    interface Tenant{
        tenantID: number;
        tenantName: string;
        tenantSex: string;
        dormNo: number;
        tenantEmail: string;
        tenantPhone: number;
    }

    let visitorRows: Visitors[] = [];
    let tenantRows: Tenant[] = [];

    onMount(() => {
        try {
            visitorRows = data.visitor || [];
            tenantRows = data.allTenants || [];
            
        } catch (error) {
            console.error(error);
            visitorRows = [];
        }
    });
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header {logout}/>
    <Aside />
    <header class="sm:ml-60 lg:ml-80">
        <div class="w-auto p-10">
            <div>
                <div class="flex pb-8 max-md:pb-4">
                    <h1 class="h1 font-bold md:text-5xl">Visitor Logbook</h1>
                </div>

                <div class="table-container">
                    <table class="table table-hover bg-surface-50">
                        <thead>
                            <tr class="bg-secondary-400">
                                <th>Name</th>
                                <th>Visiting</th>
                                <th>Relation</th>
                                <th>Enter Date and Time</th>
                                <th>Leave Date and Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {#each visitorRows as visitorRow}
                                {#if visitorRow.isApproved}
                                    <tr>
                                        <td>{visitorRow.visitorName}</td>
                                        {#each tenantRows as tenantRow}{#if tenantRow.tenantID === visitorRow.tenantID}<td>{tenantRow.tenantName}</td>{/if}{/each}
                                        <td>{visitorRow.visitorRelation}</td>
                                        <td>{visitorRow.startDateOfVisit}</td>
                                        <td>{visitorRow.endDateOfVisit}</td>
                                    </tr>
                                {/if}
                            {/each}
                            
                        </tbody>
                    </table>
                </div>
                
                <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />
        </div>
    </header>
</div>