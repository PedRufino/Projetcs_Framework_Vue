<template>
    <nav class="navbar bg-dark bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <ul class="navbar-nav my-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cep">Consultar CEP</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" tabindex="-1" aria-disabled="true" to="/manga">Consultar Mangá</router-link>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Navbar',
    data() {
        return {

        }
    }
})
</script>

<style>
a {
    color: white !important;
}
.my-nav{
    display: contents !important;;
}
</style>