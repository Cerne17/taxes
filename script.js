function main() {

    document.getElementById('secondContainer').removeAttribute("style");

    var capitalSimples = document.getElementById('capitalSimples').value;
    var taxaSimples = document.getElementById('taxaSimples').value;
    var parcelasSimples = document.getElementById('parcelasSimples').value;

    var capitalComposto = document.getElementById('capitalComposto').value;
    var taxaComposta = document.getElementById('taxaComposta').value;
    var parcelasCompostas = document.getElementById('parcelasCompostas').value;
    // console.log(capitalSimples, taxaSimples, parcelasSimples, capitalComposto, taxaComposta, parcelasCompostas)

    var montanteSimples = (capitalSimples * taxaSimples * parcelasSimples) + capitalSimples;
    var jurosSimples = capitalSimples * taxaSimples * parcelasSimples;

    var montanteComposto = capitalComposto * Math.pow((1 + taxaComposta), parcelasCompostas);
    var jurosCompostos = capitalComposto * Math.pow((1 + taxaComposta), parcelasCompostas) - capitalComposto;

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
