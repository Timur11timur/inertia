<template>
    <div class="flex justify-between mb-6">
        <div class="flex items-center">
            <h1 class="text-3xl">Users</h1>

            <Link v-if="can.createUser" href="/users/create" class="text-blue-500 text-sm ml-3">New User</Link>
        </div>

        <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg" />
    </div>

    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="user in users.data" :key="user.id">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ user.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td v-if="user.can.edit" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link :href="'/users/' + user.id + '/edit'" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <Pagination :links="users.links" class="mt-6" />

    <div style="margin-top: 200px;">
        <p>The current time is {{ time }}.</p>

        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh (Without reload)
        </Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import Pagination from '../../Shared/Pagination';
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
//import throttle from "lodash/throttle"; //send requests periodically
import debounce from "lodash/debounce"; //send request only when you stop typing

let props = defineProps({
    time: String,
    users: Object,
    filters: Object,
    can: Object
});

let search = ref(props.filters.search);

watch(search, debounce(function (value) {
    Inertia.get('/users',
        { search: value},
        {
            preserveState: true, //do not refresh page during typing search word
            replace: true //replace previous page if it was created by typing search word
        });
}, 300));
</script>

<style scoped>

</style>
