<template>
    <div class="row" style="margin-left: 100px; margin-right: 100px; margin-top: 10rem;">
        <img class="col-6" style="padding: 0 !important;" src="https://s5.static.brasilescola.uol.com.br/be/2022/04/pessoa-lendo-um-manga.jpg" alt="">
        <form class="form-control bg-meu col needs-validation" novalidate>
            <div class="row g-3">
                <div class="col-md-12">
                    <label for="validationCustom01" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Digite seu nome" minlength="3" required>
                    <div class="valid-feedback">
                        Parece bom!
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom02" class="form-label">Sobrenome:</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Digite seu sobrenome" minlength="3" required>
                    <div class="valid-feedback">
                        Parece bom!
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationDefaultEmail" class="form-label">E-mail:</label>
                    <div class="input-group">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu email" required>
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom03" class="form-label">Cidade:</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder="Digite sua ciade" required>
                    <div class="invalid-feedback">
                        Forneça uma cidade válida.
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom04" class="form-label">Estado:</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Escolha</option>
                        <option>SP</option>
                        <option>RJ</option>
                        <option>MG</option>
                        <option>AL</option>
                    </select>
                    <div class="invalid-feedback">
                        Selecione um estado válido.
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom05" class="form-label">CEP</label>
                    <input type="text" class="form-control " id="validationCustom05" placeholder="Digite seu CEP" minlength="9" maxlength="9" required>
                    <div class="invalid-feedback">
                        Forneça um CEP válido.
                    </div>
                </div>
                <div class="col-12">
                    <div class="m-3 row">
                        <div class=" col form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                            <label class="form-check-label" for="invalidCheck">
                                Concordo com os termos e condições
                            </label>
                            <div class="invalid-feedback">
                                Você deve concordar antes de enviar.
                            </div>
                        </div>
                        <div class="col form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                            <label class="form-check-label" for="invalidCheck">
                                Desejo receber noticias por e-mail
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <center>
                        <button class="btn btn-size btn-primary" type="submit">Enviar</button>
                    </center>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
.bg-meu{
    background-color: rgb(158, 189, 255)!important;
    border: 0 !important;
    border-radius: 0 !important;
    padding: 2vw !important;
}
.btn-size{
    width: 50%;
}
</style>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'Contato',
    });

    (function () {
        'use strict';
        window.addEventListener('load', function () {
            var forms = this.document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
</script>
