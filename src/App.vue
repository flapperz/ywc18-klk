<template>
    <div id="app">
        <Header />
        <Navbar />
        <Content />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue';
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Content,
        Header,
    },
};
</script>

<style>
html {
    height: 100%;
    overflow: hidden;
}

body {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: 'Lato';
    height: 100%;
    background: rgb(101, 31, 87);
    background: linear-gradient(
        45deg,
        rgba(101, 31, 87, 1) 0%,
        rgba(225, 113, 87, 1) 48%,
        rgba(249, 248, 113, 1) 100%
    );
    /* display: flex;
    flex-direction: column; */
}
</style>
