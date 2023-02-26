const dons = new Map();

dons
  .set('Aucun', { name: null, level: 0, description: null })
  .set('Appel des forces du Kaos', {
    name: 'Appel des forces du Kaos',
    level: 0,
    description:
      '1 point de Gnose : Vous pouvez appeler les animaux sensibles au Kaos sur une zone d’environ deux kilomètres de diamètre. Ils se rendront au point d’origine du Garou, causant des troubles divers et pouvant se montrer hostiles face aux belligérants du lanceur d’appel.',
  })
  .set('Calmer la Bête Sauvage', {
    name: 'Calmer la Bête Sauvage',
    level: 0,
    description:
      '1 point de Volonté pour 2 de Rage : Le Garou en Frénésie peut être un danger pour l’ensemble de son environnement. Avec le Don Calmer la bête sauvage, un Garou peut sacrifier sa Volonté pour diminuer la Rage d’un Garou en furie. Il s’agit du seul Don pouvant calmer la Frénésie',
  })
  .set('Griffes Acérées', {
    name: 'Griffes Acérées',
    level: 0,
    description:
      '1 tour : Sous forme Glabro ou Crinos, le Garou aiguise ses griffes pendant un tour contre un matériau solide. Après ça, sa première attaque inflige un dégât supplémentaire, de plus il percera les protections de son adversaire.',
  })
  .set('Maître du Feu', {
    name: 'Maître du Feu',
    level: 0,
    description:
      '1 point de Gnose : Pour la durée d’un combat, le feu inflige des dégâts contondants plutôt qu’aggravés.',
  })
  .set('Odeur de l’Eau Vive', {
    name: 'Odeur de l’Eau Vive',
    level: 0,
    description:
      '1 point de Gnose  : Vous pouvez vous débarrasser de votre odeur qui devient semblable à toutes celles qui l’entourent. Le Don dure 30 minutes après activation.',
  })
  .set('Odeur de la Vraie Forme', {
    name: 'Odeur de la Vraie Forme',
    level: 0,
    description:
      '1 fois par heure : Vous pouvez sentir l’aura d’une personne et deviner à partir de là sa nature. Les odeurs décrites ne sont pas aussi simples que « c’est un vampire », il peut s’agir de couleurs, de sons, et d’un éventail d’autres adjectifs, toujours en lien avec la caractéristique de la créature. Au joueur de se souvenir de ce qui correspond à quoi.',
  })
  .set('Langage du Sceau', {
    name: 'Langage du Sceau',
    level: 0,
    description:
      '1 point de Gnose : Le Garou peut déverrouiller ou verrouiller n’importe quelle porte dotée d’une serrure traditionnelle (sans trace d’électronique) ainsi que les coffres et cadenas.',
  })
  .set('Regard du tueur', {
    name: 'Regard du tueur',
    level: 0,
    description:
      '1 Point de Rage : Le Garou extériorise sa rage et son envie de meurtre, provoquant une peur surnaturelle chez sa victime mortelle qui va se mettre à fuir immédiatement la zone jusqu’à parvenir en sécurité. Si le don est employé sur une créature surnaturelle, la fuite peut être contrée par une dépense d’un point de Volonté.',
  })
  .set('Repousser les balles', {
    name: 'Repousser les balles',
    level: 0,
    description:
      '1 point de Gnose : Les balles ne peuvent plus vous toucher pour une durée de 3 tours maximum. Est considéré comme balle tout projectile envoyé à l’aide de poudre.',
  })
  .set('Sentir le Ver', {
    name: 'Sentir le Ver',
    level: 0,
    description:
      '1 fois par heure : Vous pouvez sentir l’empreinte de la corruption du Ver sur un individu, un lieu ou un objet. La corruption sera précise sans pour autant être chiffrée, par contre si une corruption majeure se trouve quelque part, elle pourra dissimuler des empreintes plus petites. N’oubliez pas que le Ver a apparemment disparu du monde.',
  })
  .set('Sentir l’Argent', {
    name: 'Sentir l’Argent',
    level: 0,
    description:
      'Vous pouvez sentir la présence d’Argent pur sur quelqu’un, ainsi que la quantité relative (savoir s’il s’agit d’une croix en Argent pur, de balles, ou d’une arme blanche par exemple).',
  })
  .set('Visage du mensonge', {
    name: 'Visage du mensonge',
    level: 0,
    description:
      "1 point de Volonté : Le Garou use de sa force de volonté pour persuader et convaincre son auditeur qu’il ment sur un sujet. Le destinataire prendra donc chaque phrase prononcée par le Garou comme un mensonge. Attention, ça ne permet pas non plus d’annuler la connaissance d’un individu, plus d'instiller ou de supprimer un doute Exemple : si le Garou dit à un autre Garou que les Garous existent, l’autre ayant la connaissance de ce fait ne le remettra pas en doute. Le dire à un humain qui aura cru voir quelque chose obtiendra l’effet inverse.",
  })
  .set('Vraie Peur', {
    name: 'Vraie Peur',
    level: 0,
    description:
      '1 point de Volonté Le Garou projette non plus sa Rage, mais une force puissante de Volonté qui va écraser celle de son adversaire, le paralysant sur place pendant un tour. Une attaque physique annule immédiatement la paralysie. Il est nécessaire de dépenser deux points de Rage pour bouger à nouveau ou un point de Volonté.',
  });
export default function getDons(name) {
  const donsObject = dons.get(name);
  return donsObject;
}
