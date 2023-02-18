const avantages = new Map();
avantages
  .set('Aucun', { name: null, level: 0, description: null })
  .set('Ambidextre', {
    name: 'Ambidextre',
    level: 0,
    description:
      'Vous pouvez agir avec une deuxième action par tour qui peut faire des dégâts. Pour cela, vous utilisez votre main non directrice. Votre attaque prend en compte la diminution du niveau de la compétence. ',
  })
  .set('Armes Naturelles', {
    name: 'Armes Naturelles',
    level: 0,
    description:
      'Vous disposez d’un bonus de dégâts de 1 point lorsque vous attaquez avec des griffes ou des crocs d’un point, en forme Glabro ou en forme Lupus.',
  })
  .set('Entraînement Crinos', {
    name: 'Entraînement Crinos',
    level: 0,
    description:
      'Vous pouvez acheter des Capacités dont vous n’atteignez pas les conditions en temps normal. Elles se débloqueront dans vos transformations, en Glabro, Crinos ou Lupus, si vous atteignez la Force, la Dextérité ou la Vigueur suffisante.',
  })
  .set('Inodorance', {
    name: 'Inodorance',
    level: 0,
    description:
      'Vous ne dégagez aucune odeur dans quelques conditions que ce soit. Il est impossible de remonter votre piste en se fiant à son odorat.',
  })
  .set('Répugnant', {
    name: 'Répugnant',
    level: 0,
    description:
      'Vous mordre déclenche une série de douleurs chez votre adversaire qui va être obligé de vomir pendant plusieurs secondes.',
  })
  .set('Robuste', {
    name: 'Robuste',
    level: 0,
    description: 'Vous gagnez trois points de Vie supplémentaires à rajouter à votre maximum.',
  })
  .set('As du Volant', {
    name: 'As du Volant',
    level: 0,
    description:
      'Vous gagnez les égalités à niveau égal dans la compétence dans un challenge opposé de conduite. De plus vous pouvez faire grimper pour un tour votre véhicule d’un niveau supérieur.',
  })
  .set("Champion de l'Informatique", {
    name: "Champion de l'Informatique",
    level: 0,
    description:
      'Vous gagnez les égalités à niveau égal dans la compétence dans un challenge statique. De plus vous pouvez faire grimper ou descendre le niveau d’un ordinateur une fois par soir.',
  })
  .set("Code d'Honneur", {
    name: "Code d'Honneur",
    level: 0,
    description:
      'Vous êtes un Garou connu pour son sens de l’Honneur et le respect strict de celui-ci. Vous devez définir celui dont il s’agit. Vous pouvez ignorer, une fois par soir, une dépense de point de Volonté pour défendre votre Code de l’Honneur.',
  })
  .set('Force Intérieur', {
    name: 'Force Intérieur',
    level: 0,
    description:
      'À 0 points de vie, vous pouvez vous déplacer en rampant sur une distance de deux mètres en un tour. À la fin du tour vous tombez dans un coma profond.',
  })
  .set('Hyposomnie', {
    name: 'Hyposomnie',
    level: 0,
    description:
      'Vous n’avez besoin que de la moitié des heures de sommeil nécessaires d’ordinaire à un Garou. Vous pouvez faire plus de choses en journée, et surtout éviter d’être surpris pendant votre repos. Vous gagnez un point d’AIP (action inter-partie).',
  })
  .set('Indomptable', {
    name: 'Indomptable',
    level: 0,
    description:
      'Vous êtes difficile à maîtriser. Les actions surnaturelles de domination, notamment des Vampires, ne nécessitent plus de dépenser de la Volonté mais uniquement de la Rage pour y résister. De plus, vous pouvez ignorer un ordre surnaturel par soir.',
  })
  .set('Sang-froid', {
    name: 'Sang-froid',
    level: 0,
    description:
      'Vous n’avez pas l’habitude de craquer facilement. Il faut deux échecs annoncés pour vous faire entrer en furie, et non plus un seul.',
  })
  .set('Volonté de fer', {
    name: 'Volonté de fer',
    level: 0,
    description:
      'Vous ne perdez que la moitié des points que vous devriez perdre en Volonté, jusqu’à un minimum de 1 et arrondi à l’inférieur.',
  })
  .set('Faveur à un humain', {
    name: 'Faveur à un humain',
    level: 0,
    description:
      'Quelqu’un vous doit une Faveur, assez énorme pour vous sortir d’une incartade de manière exceptionnelle. Cette Faveur doit être payée, par un principe d’honneur qui est cher à la Nation.',
  })
  .set('Faveur à un humain (MdT)', {
    name: 'Faveur à un humain (MdT)',
    level: 0,
    description:
      'Quelqu’un vous doit une Faveur, assez énorme pour vous sortir d’une incartade de manière exceptionnelle. Cette Faveur doit être payée, par un principe d’honneur qui est cher à la Nation.',
  })
  .set('Faveur à une créature surnaturelle', {
    name: 'Faveur à une créature surnaturelle',
    level: 0,
    description:
      'Quelqu’un vous doit une Faveur, assez énorme pour vous sortir d’une incartade de manière exceptionnelle. Cette Faveur doit être payée, par un principe d’honneur qui est cher à la Nation.',
  })
  .set('Magnétisme Animale', {
    name: 'Magnétisme Animale',
    level: 0,
    description:
      'Vous dégagez une aura de confiance animale. Vous êtes considéré comme ayant une Apparence supérieure de 1 auprès de tous les humains. Ceci peut même dépasser le seuil maximum de 5. Attention néanmoins, un Attribut de 6 est forcément surnaturel, et vous pouvez renseigner quelqu’un sur votre nature surnaturelle.',
  })
  .set('Sang Surnaturel', {
    name: 'Sang Surnaturel',
    level: 0,
    description:
      'Vous avez dans les veines un sang ancien, autre que Lupin, qui court. Que ce soit des Fées, des Ferae, ou d’autres choses dont vous n’avez même pas connaissance, vous avez une vision plus ouverte du monde, et potentiellement des alliés cachés qui pourraient vous aider',
  })
  .set('Soutien Familial', {
    name: 'Soutien Familial',
    level: 0,
    description:
      'Vous vous entendez parfaitement avec vos Parentèles, lesquels vous soutiennent quoi qu’il arrive. Si bien sûr ils ne subiront pas sans rien dire des conditions d’esclaves, ils seront prêts à risquer leurs vies, voire à se salir durablement les mains pour vous satisfaire.',
  })
  .set('Aimant à Esprit', {
    name: 'Aimant à Esprit',
    level: 0,
    description:
      'Vous avez une aura spirituelle qui attire à vous les Esprits et facilite les échanges avec eux. Vos rituels pour interagir avec eux sont facilités, et il arrive que parfois, dans de rares cas, ils vous viennent en aide.',
  })
  .set('Chanceux', {
    name: 'Chanceux',
    level: 0,
    description:
      'Une fois par soir, vous pouvez relancer un challenge gratuitement. Attention, ça ne marche qu’une fois par soir.',
  })
  .set('Tolérance à l’Argent', {
    name: 'Tolérance à l’Argent',
    level: 0,
    description:
      'Vous avez une résistance naturelle à l’argent. Sous forme Glabro ou Crinos, vous pouvez transformer deux dégâts aggravé en létaux à chaque coup d’une arme en Argent pur.',
  });

export default function getAvantage(name) {
  const avantageObject = avantages.get(name);
  return avantageObject;
}
