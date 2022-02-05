$(() => {
    //inizializzazione array
    let mioAggiungo = [];
    //funzione iniziale (scrive la lista)
    init()

    function init() {
        scriviLista();
    }

    //stampa l'array mettendo ogni elemento come list item di un ordered list
    function scriviLista() {
        let lista = '';
        for (i = 0; i < mioAggiungo.length; i++) {
            lista += '<li class="my-3" >' + mioAggiungo[i] + '<button class="btn1" type="button">' + "X" + '</button>' + '</li>'
        }
        $('#aggiungi').html(lista);
    }

    //al click del bottone principale inserisco il valore nel campo input nell'array
    $('#btn').on('click', function () {
        let nuovoElemento = $('#nuovoElemento').val();
        mioAggiungo.push(nuovoElemento);
        scriviLista();
    });

    //al click del bottone elimina cancello l'elemento dell'array associato utilizzando la posizione nella ordered list
    $(document).on('click', '.btn1', function () {
        let indice = $(this.parentElement).index();
        mioAggiungo.splice(indice, 1);
        scriviLista();
    })
})