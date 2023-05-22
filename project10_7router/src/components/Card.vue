<template>
    <div class="row card p-2" :style="corDeFundo">
        <slot></slot>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:'Card',
        data(){
            return{
                corDeFundo:{
                    'background-color':'#F5F5DC'
                }
            }
        }
    })

</script>