document.querySelectorAll('.Tache').forEach(tache => {
    const mere = tache.querySelector(':scope > input[type="checkbox"]');
    const filles = tache.querySelectorAll('.lst input[type="checkbox"]');

    // Mère → coche/décoche toutes les filles
    mere.addEventListener('change', () => {
        filles.forEach(f => f.checked = mere.checked);
        mere.indeterminate = false;
    });

    // Filles → mettent à jour la mère
    filles.forEach(f => {
        f.addEventListener('change', () => {
            const nbCochees = [...filles].filter(x => x.checked).length;
            mere.checked = nbCochees === filles.length;
            mere.indeterminate = nbCochees > 0 && nbCochees < filles.length;
        });
    });
});