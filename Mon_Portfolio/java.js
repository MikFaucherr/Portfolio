function estCourriel(valeur) {
    const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex_email.test(valeur);
}