<template>
    <h1 class="text-3xl">Users</h1>

    <div style="margin-top: 400px;">
        <p>The current time is {{ time }}.</p>

        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh (Without reload)
        </Link>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
    components: { Link },

    props: {
        time: String
    }
};
</script>

<style scoped>

</style>
