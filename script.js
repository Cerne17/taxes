function main() {

    document.getElementById('secondContainer').removeAttribute("style");

    var capitalSimples = parseFloat(document.getElementById('capitalSimples').value);
    var taxaSimples = parseFloat(document.getElementById('taxaSimples').value);
    var parcelasSimples = parseFloat(document.getElementById('parcelasSimples').value);

    var capitalComposto = parseFloat(document.getElementById('capitalComposto').value);
    var taxaComposta = parseFloat(document.getElementById('taxaComposta').value);
    var parcelasCompostas = parseFloat(document.getElementById('parcelasCompostas').value);

    var jurosSimples = capitalSimples * taxaSimples * parcelasSimples;
    var montanteSimples = jurosSimples + capitalSimples;

    const tax = 1 + taxaComposta;

    var jurosCompostos = capitalComposto * Math.pow(tax, parcelasCompostas) - capitalComposto;
    var montanteComposto = capitalComposto * Math.pow(tax, parcelasCompostas);

    montanteSimples = parseFloat(montanteSimples).toFixed(2);
    jurosSimples = parseFloat(jurosSimples).toFixed(2);

    montanteComposto = parseFloat(montanteComposto).toFixed(2);
    jurosCompostos = parseFloat(jurosCompostos).toFixed(2);

    var infoSimpleMontant = document.getElementById("infoOfSimpleMontant");
    var infoSimpleTaxes = document.getElementById("infoOfSimpleTaxes");

    var infoCompMontant = document.getElementById("infoOfCompMontant");
    var infoCompTaxes = document.getElementById("infoOfCompTaxes");

    infoSimpleMontant.innerHTML = "R$"+montanteSimples;
    infoSimpleTaxes.innerHTML = "R$"+jurosSimples;
    
    infoCompMontant.innerHTML = "R$"+montanteComposto;
    infoCompTaxes.innerHTML = "R$"+jurosCompostos;

}
