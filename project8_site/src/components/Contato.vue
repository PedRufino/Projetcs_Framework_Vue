<template>
    <div class="row" style="margin-left: 100px; margin-right: 100px; margin-top: 10rem;">
        <img class="col-6" style="padding: 0 !important;" src="https://mangakun.com/wp-content/uploads/2023/02/Como-ler-manga.webp" alt="">
        <form class="form-control col needs-validation" novalidate>
            <div class="row g-3">
                <div class="col-md-12">
                    <label for="validationCustom01" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
                    <div class="valid-feedback">
                        Parece bom!
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom02" class="form-label">Sobrenome:</label>
                    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
                    <div class="valid-feedback">
                        Parece bom!
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustomUsername" class="form-label">Nome de usuário:</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            Escolha um nome de usuário.
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom03" class="form-label">Cidade:</label>
                    <input type="text" class="form-control" id="validationCustom03" required>
                    <div class="invalid-feedback">
                        Forneça uma cidade válida.
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom04" class="form-label">Estado:</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                        Selecione um estado válido.
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom05" class="form-label">CEP</label>
                    <input type="text" class="form-control" id="validationCustom05" required>
                    <div class="invalid-feedback">
                        Forneça um CEP válido.
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                        <label class="form-check-label" for="invalidCheck">
                            Concordo com os termos e condições
                        </label>
                        <div class="invalid-feedback">
                            Você deve concordar antes de enviar.
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Enviar</button>
                </div>
            </div>
        </form>
    </div>
</template>

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
