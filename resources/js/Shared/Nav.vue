<template>
    <nav>
        <ul class="flex space-x-6">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'Users'">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component === 'Settings'">Settings</NavLink>
            </li>
            <li>
                <Link href="/logout" method="post" :data="{ foo: 'bar'}" as="button" class="text-blue-500 hover:underline">Log Out (POST)</Link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
import NavLink from "./NavLink";

export default {
    components: { Link, NavLink },
}
</script>

<style scoped>

</style>
