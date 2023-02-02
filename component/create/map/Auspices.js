const auspices = new Map();
auspices
  .set('Nouvelle Lune partielle', {
    name: 'Ragabash',
    moon: 'Nouvelle Lune partielle',
    bonus: 'Lupus : Vous pouvez vous changer en Lupus',
    rage: 2,
  })
  .set('Nouvelle Lune complète', {
    name: 'Ragabash',
    moon: 'Nouvelle Lune complète',
    bonus:
      'Mouton Noir : Une fois par soirée, pour une scène d’une durée maximum de trois minutes, vous pouvez ignorer votre handicap de tribu',
    rage: 2,
  })
  .set('Croissant de Lune ascendant', {
    name: 'Théurge',
    moon: 'Croissant de Lune ascendant',
    bonus:
      'Ritualiste: Trois rituels de récompense et un de châtiment. Vous pouvez une fois par session parler clairement avec un Esprit, sans devoir interpréter ses propos.',
    rage: 4,
  })
  .set('Croissant de Lune descendant', {
    name: 'Théurge',
    moon: 'Croissant de Lune descendant',
    bonus:
      'Ritualiste: Un rituel de récompense et trois de châtiment. Vous pouvez une fois par session parler clairement avec un Esprit, sans devoir interpréter ses propos.',
    rage: 4,
  })
  .set('Demi-Lune de Lune ascendante', {
    name: 'Philodox',
    moon: 'Demi-Lune de Lune ascendante',
    bonus:
      'Instinctif: Vous obtenez deux dons au choix parmis ceux des Lupus. Vous pouvez utiliser un don nécessitant de la Gnose sans en dépenser, une fois par session de jeu',
    rage: 6,
  })
  .set('Demi-Lune de Lune descendante', {
    name: 'Philodox',
    moon: 'Demi-Lune de Lune descendante',
    bonus:
      'Justice: Deux rituels de châtiments. Vous pouvez invoquer un exemplaire de la Litanie. Vous pouvez utiliser une action ou un don nécessitant de la Volonté sans en dépenser, une fois par session de jeu ',
    rage: 6,
  })
  .set('Lune Gibbeuse ascendant', {
    name: 'Gaillard',
    moon: 'Lune Gibbeuse ascendant',
    bonus:
      'Appel de la Forêt: Vous pouvez prendre quatre hurlements dans la section dédiée, de plus, vous disposez d’un re-test automatique en cas de challenge d’Harano.',
    rage: 8,
  })
  .set('Lune Gibbeuse descendant', {
    name: 'Gaillard',
    moon: 'Lune Gibbeuse descendant',
    bonus:
      'La Rumeur: Une fois par début de soirée, que ce soit dans un bar, dans la rue ou autre, vous avez vent d’une rumeur concrète sur la zone où vous vous trouvez. De plus, vous pouvez prendre deux hurlements dans la section dédiée, vous disposez d’un re-test automatique en cas de challenge d’Harano.',
    rage: 8,
  })
  .set('Pleine Lune partielle', {
    name: 'Ahroun',
    moon: 'Pleine Lune partielle',
    bonus: 'Roc: Trois points de vie supplémentaire et régénération d’un point supplémentaire par tour',
    rage: 10,
  })
  .set('Pleine Lune complète', {
    name: 'Ahroun',
    moon: 'Pleine Lune complète',
    bonus:
      'Berzerk: un seul point de Rage pour se transformer en Crinos et un point de dégât supplémentaire sur toutes les attaques.',
    rage: 10,
  });

export default function getAuspice(moon) {
  const auspiceObject = auspices.get(moon);
  return auspiceObject;
}
