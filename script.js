function Main() {

    document.getElementById('secondContainer').removeAttribute("style");

    var capitalSimples = document.getElementById('capitalSimples');
    var taxaSimples = document.getElementById('taxaSimples');
    var parcelasSimples = document.getElementById('parcelasSimples');

    var capitalComposto = document.getElementById('capitalComposto');
    var taxaComposta = document.getElementById('taxaComposta');
    var parcelasCompostas = document.getElementById('parcelasCompostas');

    var montanteSimples = (capitalSimples * taxaSimples * parcelasSimples) + capitalSimples;
    var jurosSimples = capitalSimples * taxaSimples * parcelasSimples;

    var montanteComposto = capitalComposto * Math.pow((1 + taxaComposta), parcelasCompostas);
    var jurosCompostos = capitalComposto * Math.pow((1 + taxaComposta), parcelasCompostas) - capitalComposto;

    var infoSimpleMontant = getElementById("infoOfSimpleMontant");
    var infoSimpleTaxes = getElementById("infoOfSimpleTaxes");

    var infoCompMontant = getElementById("infoOfCompMontant");
    var infoCompTaxes = getElementById("infoOfCompTaxes");

    infoSimpleMontant.innerHTML = montanteSimples;
    infoSimpleTaxes.innerHTML = jurosSimples;
    
    infoCompMontant.innerHTML = montanteComposto;
    infoCompTaxes.innerHTML = jurosCompostos;

    console.log(montanteSimples);
    console.log(jurosSimples);
    console.log(montanteComposto);
    console.log(jurosCompostos);

}
