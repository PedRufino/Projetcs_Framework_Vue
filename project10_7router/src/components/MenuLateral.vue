<template>
    <div class="row text-center">
        <div class="col-lg-12"><div class="logo-size"></div></div>
        <div class="col-lg-12"><h4 class="title-nome" :nome="nome">{{nome}}</h4></div>
        <div class="col-lg-12">
            <button class="btn btn-outline-secondary" @click="trocarTema">
                {{ rotuloBtn }}
            </button>
        </div>
        <ul>
            <router-link to="/tarefas">
                <li style="margin-top: 10px; padding: 10px; border-top: 1px solid; border-bottom: 1px solid;">
                    
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
                            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
                        </svg>
                    </span>
                    
                </li>
            </router-link>
            <router-link to="/rota">
                <li style="margin-top: 10px; padding: 10px; border-top: 1px solid; border-bottom: 1px solid;">
                    
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-engines-fill" viewBox="0 0 16 16">
                                <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z"/>
                            </svg>
                        </span>
                    
                </li>
            </router-link>
            
        </ul>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:'MenuLateral',
        props:['logo','nome'],
        emits:['eTrocarTema'],
        data(){
            return{
                modoNoturno: false,
            }
        },
        computed:{
            rotuloBtn(){
                if(this.modoNoturno){
                    return 'Modo Padrão'
                }
                return 'Modo Noturno'
            }
        },
        methods:{
            trocarTema(){
                this.modoNoturno = !this.modoNoturno //true
                this.$emit('eTrocarTema', this.modoNoturno)
            }
        }
    })

</script>

<style>
.logo-size{
    display: inline-block;
    width: 200px;
    height: 200px;
    background-image: var(--img-menu);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    vertical-align: middle;
}

.title-nome{
    text-align: center;
    color: var(--texto-padrao);
}
</style>