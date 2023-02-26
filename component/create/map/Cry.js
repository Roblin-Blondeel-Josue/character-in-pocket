const cry = new Map();
cry
  .set('Aucun', {
    name: 'Aucun',
    level: 0,
    description: null,
  })
  .set('Voix Lointaine', {
    name: 'Voix Lointaine',
    level: 0,
    description:
      '15 secondes : Le Galliard peut lancer un appel qui résonne par rayons de 20km par niveau de représentation (donc de 20km à Représentation 1, à 100km à Représentation 5) dans la langue connue seulement des Loup-Garous, généralement il s’agit de se présenter ou d’énoncer son arrivée sur un Sept, mais il peut aussi s’agir d’un appel à l’aide.',
  })
  .set('Appel à la Bataille', {
    name: 'Appel à la Bataille',
    level: 0,
    description:
      '5 minutes : L’Appel à la bataille pousse ceux qui l’entendent à se préparer à un combat qui approche rapidement. L’Appel à la bataille permet d’ignorer la première attaque infligeant des dégâts que recevra le Garou (hors dégâts avec une arme en Argent).',
  })
  .set('Bénédiction de Morphée', {
    name: 'Bénédiction de Morphée',
    level: 0,
    description:
      '3 minutes : La Bénédiction de Morphée plonge ceux qui l’écoutent dans un trouble, puis dans un profond sommeil. Le seul moyen de résister est de dépenser un point de Rage, ou un point de Volonté. Il est nécessaire de dépenser chaque tour ce point de Rage ou de Volonté pour tenir, ou alors faire taire le chanteur. Une fois en sommeil, seule une action physique ou l’arrêt de la Représentation peut réveiller le dormeur.',
  })
  .set('Chant de la Sirène', {
    name: 'Chant de la Sirène',
    level: 0,
    description:
      '3 minutes : Le Chant de la Sirène développe une transe qui plonge les Garous dans une admiration, faisant paraître le Galliard plus beau, plus grand et plus fort. Il est difficile de décrocher les yeux du Garou et sa présence ainsi que son charisme impressionnent tout le monde.',
  })
  .set('Chant des Héros', {
    name: 'Chant des Héros',
    level: 0,
    description:
      '8 minutes  : Le Chant des Héros invoque les Anciens de/s la/es Tribu/s. Ce n’est pas tant qu’ils vont arriver que leur aura qui viendra donner du courage et de la Force. Ceux qui l’entendent choisissent un bonus pour le combat parmi : un point de dégât supplémentaire au combat, deux points de vie supplémentaire, un point de Volonté temporaire',
  })
  .set('Cri de Luna', {
    name: 'Cri de Luna',
    level: 0,
    description:
      '5 minutes : Le Cri de Luna touche les Garous dans leur cœur et vient réveiller leur Rage. Ce Hurlement en appelle donc à la Rage profonde, et il ne prépare pas tant une bataille qu’un massacre. Ce chant rajoute deux points de Rage à ceux qui sont touchés.',
  })
  .set('Titillage en règles', {
    name: 'Titillage en règles',
    level: 0,
    description:
      '1 minute : Le titillage en règles est un hurlement d’humiliation à l’encontre d’un groupe ou d’une personne. Le Galliard utilise généralement ce hurlement pour moquer ses adversaires, les forçant à privilégier le duel contre le Galliard plutôt que l’affrontement global. Le hurlement provoquera l’adversaire, les humiliant, les rabaissant au possible.',
  })
  .set('Dernier Carré', {
    name: 'Dernier Carré',
    level: 0,
    description:
      '5 minutes : Le Dernier Carré est un hurlement sacré lancé par un Galliard qui lance ainsi un appel au sacrifice. Ceux qui l’entendent, ET qui y répondent dans la limite de sa compétence Représentation regagnent dès lors leur maximum de point de vie, de Volonté, de Rage et de Gnose. Lorsque le hurlement cesse, les Garous l’ayant suivi meurent irrémédiablement. On raconte que le Dernier Carré est un des pouvoirs les plus puissants, et que ceux qui le poussent pour les meilleurs moments peuvent rejoindre dans l’autre monde Luna en personne.',
  });
export default function getCry(name) {
  const cryObject = cry.get(name);
  return cryObject;
}
