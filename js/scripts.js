alert("Benvenuti sul nuovo portale di Ticket Online.");

const chilometri = prompt("Inserire il numero di chilometri (km) che si desidera percorrere. Verrà applicata la tariffa di 0,21€/km.");

if (isNaN(chilometri)) {
    alert("Valore inserito non valido. Si prega di riprovare.");
} else {
    console.log(`L'utente deve percorrere ${chilometri} km.`);
}

const prezzo = (chilometri * 0.21);
console.log(`L'utente pagherà ${prezzo}€`);
alert(`In base alle tariffe applicate, il biglietto costerà ${prezzo}€.`);

const scontoMinorenne = ((prezzo / 100) * 20).toFixed(2);
const prezzoMinorenne = (prezzo - scontoMinorenne).toFixed(2);

const scontoOver = ((prezzo / 100) * 40).toFixed(2);
const prezzoOver = (prezzo - scontoOver).toFixed(2);

const eta = prompt("Vi informiamo che saranno applicati sconti a minorenni e passeggeri Over-65. Inserite la vostra età per scoprire se potete usufruire dell'offerta!");

if (isNaN(eta)) {
    alert("Valore inserito non valido. Si prega di riprovare.");
} else if (eta < 18) {
    alert(`In quanto passeggero minorenne ha diritto ad uno sconto del 20% pari a ${scontoMinorenne}€. Il prezzo finale del biglietto scontato è ${prezzoMinorenne}€.`);
    console.log(`Sconto passeggero minorenne: ${scontoMinorenne}€.`);
    console.log(`Prezzo finale: ${prezzoMinorenne}€.`);
} else if (eta >= 65) {
    alert(`In quanto passeggero Over-65 ha diritto ad uno sconto del 40% pari a ${scontoOver}€. Il prezzo finale del biglietto scontato è ${prezzoOver}€.`);
    console.log(`Sconto passeggero minorenne: ${scontoOver}€.`);
    console.log(`Prezzo finale: ${prezzoOver}€.`);
} else {
    alert("Siamo spiacenti, non rientra in nessuna categoria a cui viene applicato lo sconto.");
}