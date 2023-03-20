<template>
    <div id="carouselExample" class="carousel col slide">
        <div class="carousel-inner" style="text-align: center;">
            <div class="carousel-item active">
                <div class="destaque-wrap" style="background-color: #1C9ED0;">
                    <img src="https://static3.mangalivre.net/destaques/P9eeqB7OlsoilfoguY3S_Q/6938/ijiranaide-nagaroto.png"
                        class="" alt="...">
                </div>
            </div>
            <div class="carousel-item">
                <div class="destaque-wrap" style="background-color: #DF474A;">
                    <img src="https://static3.mangalivre.net/destaques/oH1IK8L7aCFOYXAlwB_x8Q/1392/boruto.png" class=""
                        alt="...">
                </div>
            </div>
            <div class="carousel-item">
                <div class="destaque-wrap" style="background-color: #A4C5BE;">
                    <img src="https://static3.mangalivre.net/destaques/OtwUr3uvLkq81dSfgVMpcw/8103/spyxfamily.png" class=""
                        alt="...">
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Carousel',
});
</script>

<style>
.destaque-wrap {
    background-color: #cacaca;
    background-image: url(https://mangalivre.net/assets/images/layout/destaque-pattern.png);
    background-repeat: repeat;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, .5), inset 0 -5px 10px 0 rgba(0, 0, 0, .25);
    text-align: center;
    width: 100%;
}

</style>