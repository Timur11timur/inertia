<template>
    <h1>Hello, {{ name }}</h1>

    <p>We will use following frameworks:</p>

    <ul>
        <li v-for="framework in frameworks">{{ framework }}</li>
    </ul>
</template>

<script>
export default {
    props: {
        name: String,
        frameworks: Array,
    }
}
</script>

<style scoped>

</style>
