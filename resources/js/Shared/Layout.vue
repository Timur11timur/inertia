<template>
    <Head>
        <title>default</title>
        <meta
            type="description"
            content="Information about my app"
            head-key="description"
        >
        <!-- attribute head-key - shows than tis tag can be replaced-->
    </Head>

    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">My app</h1>

                <p class="text-sm ml-4">Welcome Back, {{ username }}!</p>
            </div>

            <Nav />
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script>
import Nav from "./Nav";
import { Head } from "@inertiajs/inertia-vue3";

export default {
    components: { Head, Nav },

    computed: {
        username() {
            return this.$page.props.auth.user.username
        }
    }
}
</script>

<style scoped>

</style>
