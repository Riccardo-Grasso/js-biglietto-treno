alert("Benvenuti sul nuovo portale di Ticket Online.");

const chilometri = parseInt(prompt("Inserire il numero di chilometri (km) che si desidera percorrere.\nVerrà applicata la tariffa di 0,21€/km."));

if (isNaN(chilometri)) {
    alert("Valore chilometri inserito non valido. Si prega di riprovare.");

} else {
    const eta = parseInt(prompt("Vi informiamo che saranno applicati sconti a minorenni e passeggeri Over-65.\nInserite la vostra età per scoprire se potete usufruire dell'offerta!"));

    if (isNaN(eta)) {
        alert("Valore età inserito non valido. Si prega di riprovare.");

    } else {
        console.log(`L'utente deve percorrere ${chilometri} km.`);

        const prezzo = (chilometri * 0.21).toFixed(2);
        console.log(`L'utente pagherà ${prezzo}€`);

        let percentualeScontoMinorenne = 20;
        const scontoMinorenne = ((prezzo / 100) * percentualeScontoMinorenne).toFixed(2);
        const prezzoMinorenne = (prezzo - scontoMinorenne).toFixed(2);

        let percentualeScontoOver = 40;
        const scontoOver = ((prezzo / 100) * percentualeScontoOver).toFixed(2);
        const prezzoOver = (prezzo - scontoOver).toFixed(2);

        if (eta < 18) {
            alert(`In base alle tariffe applicate, il biglietto costerà ${prezzo}€.\nIn quanto passeggero minorenne ha diritto ad uno sconto del ${percentualeScontoMinorenne}% pari a ${scontoMinorenne}€.\nIl prezzo finale del biglietto scontato è ${prezzoMinorenne}€.`);
            console.log(`Sconto passeggero minorenne: ${scontoMinorenne}€.`);
            console.log(`Prezzo finale: ${prezzoMinorenne}€.`);
        } else if (eta > 65) {
            alert(`In base alle tariffe applicate, il biglietto costerà ${prezzo}€.\nIn quanto passeggero Over-65 ha diritto ad uno sconto del ${percentualeScontoOver}% pari a ${scontoOver}€.\nIl prezzo finale del biglietto scontato è ${prezzoOver}€.`);
            console.log(`Sconto passeggero Over-65: ${scontoOver}€.`);
            console.log(`Prezzo finale: ${prezzoOver}€.`);
        } else {
            alert(`Siamo spiacenti, non rientra in nessuna categoria a cui viene applicato lo sconto. Il base alle tariffe standard, il suo biglietto costa: ${prezzo}€`);
        }
    }
}