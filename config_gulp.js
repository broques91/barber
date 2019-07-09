// Fichiers d'extention multiple à copier {lien src : lien dist}
//  Mettre le SRC sans "./" comme suit :  "assets_dev/fonts/**/*" pour que le watch fonctionne dessus
// N.D.A : Le watch a un problème avec l'utilisation du "./".
// N.D.A 2 : Le watch ne peut s'effectuer sur la création d'un nouveau dossier.
const migrationConfig = {
    "src/vendor/fontawesome/fonts/**/*": "./dist/assets/fonts"
};

/* Fichiers JS de vendor à compresser dans le fichier assets_dist/js/vendor.js*/
const vendorConfig = [
    './src/vendor/jquery/dist/jquery.min.js',
    './src/vendor/gsap/src/minified/TweenMax.min.js',
];

// export it
exports.vendorConfig = vendorConfig;
exports.migrationConfig = migrationConfig;