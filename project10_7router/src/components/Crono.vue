<template>
    <div class="test">
        <!-- <strong>0:00:00</strong> -->
        <strong>{{ tempoCalculado }}</strong>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Crono',
    props:{
        tempo_seg:{
            type:Number,
            default:0 //valor padrão
        }
    },
    computed:{
        //var computa
        tempoCalculado():string{
            return new Date(this.tempo_seg * 1000).toISOString().substr(11,8)
        }
    }
})
</script>

<style>
    .test{
        margin-top: 8px;
        margin-right: 20px;
    }

    @media only screen and (max-width: 990px) {
        .test{
            margin-right: 0;
        }
    }
</style>