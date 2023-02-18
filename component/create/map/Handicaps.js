const handicaps = new Map();

handicaps
  .set('Aucun', { name: null, level: 0, description: null })
  .set('Achromatopsie', {
    name: 'Achromatopsie',
    level: 0,
    description:
      'Vous ne percevez pas les couleurs, Tout n’est pour vous qu’une succession de nuances de gris. Ça pose quelques soucis, notamment lorsqu’on vous demande de désamorcer une bombe en coupant le fil rouge.',
  })
  .set('Amblyopie', {
    name: 'Amblyopie',
    level: 0,
    description:
      'Vous voyez la vie en flou, sans une paire de lunettes adaptée vous devez considérer votre Perception comme inférieure de un point sur votre niveau actuel tant que vous utilisez la vue.',
  })
  .set('Audition déficiente', {
    name: 'Audition déficiente',
    level: 0,
    description:
      'Vous n’arrivez pas à entendre les murmures, et seuls les sons forts ne sont pas déformés et parviennent à atteindre votre oreille.',
  })
  .set('Boiteux', {
    name: 'Boiteux',
    level: 0,
    description:
      'Une vieille blessure qui n’a jamais totalement guéri vous fait terriblement boiter. Sous toutes vos formes, il vous est impossible de courir à votre distance maximum. Divisez votre distance de déplacement par deux en toutes circonstances, arrondie à l’inférieur ',
  })
  .set('Borgne', {
    name: 'Borgne',
    level: 0,
    description:
      'Vous avez un œil en moins, certes cicatrisé, mais qui vous handicape toujours. La vision en 3 dimensions est impossible, et malgré le prestige de la cicatrice vous êtes sacrément handicapé dans toutes les utilisations de Perception. Celle-ci est divisé par 2 dès qu’elle fait intervenir la vue, arrondie à l’inférieur.',
  })
  .set('Cécité', {
    name: 'Cécité',
    level: 0,
    description:
      'Vous êtes entièrement aveugle. Votre odorat vous permet à peine de sentir les directions où se trouvent les autres individus. Vous êtes considéré comme ayant 0 en Perception en usant de vos yeux. Il vous est impossible d’utiliser vos yeux sous toutes vos formes.',
  })
  .set('Manchot', {
    name: 'Manchot',
    level: 0,
    description:
      'Vous avez un bras en moins. À la différence d’un œil, cela réduit grandement vos capacités physiques et vous place souvent dans une situation de faiblesse vis à vis de vos camarades. Vous perdez un point en Force, et vous divisez par deux votre Dextérité, arrondi à l’inférieur, perdant de fait les compétences nécessaires',
  })
  .set('Monstrueux', {
    name: 'Monstrueux',
    level: 0,
    description:
      'Vous avez un physique digne de quasimodo. Les gens ont du mal à ne pas détourner les yeux, et apprécient peu votre conversation, du moins au début. Votre apparence est à 0 et ne vous attendez pas à ce que ça change un jour',
  })
  .set('Muet', {
    name: 'Muet',
    level: 0,
    description:
      'Vous ne pouvez pas vous exprimer par la parole, que ce soit sous forme Homidé, ou sous toutes les formes intermédiaires.',
  })
  .set('Musc animal', {
    name: 'Musc animal',
    level: 0,
    description:
      'Vous dégagez une odeur qui peine à masquer votre nature de Garou. Vous ne pouvez pas mettre de points dans Animaux et vous déclenchez systématiquement une réaction vive de la part des animaux autour de vous.',
  })
  .set('Régime Carnivore', {
    name: 'Régime Carnivore',
    level: 0,
    description: 'Vous n’avez pas le choix de votre régime alimentaire, uniquement la viande vous rassasie.',
  })
  .set('Cauchemars', {
    name: 'Cauchemars',
    level: 0,
    description:
      'Vos nuits sont prises par d’horribles cauchemars qui vous empêchent de vous ressourcer efficacement. Vous perdez un point de Volonté chaque matin, et 2 heures après votre réveil vous êtes apathique, ne pouvant gagner aucun point de Rage.',
  })
  .set('Cœur Sensible', {
    name: 'Cœur Sensible',
    level: 0,
    description:
      'Vous ne supportez pas la violence. Si vous vous retrouvez confronté à du sang ou de la guerre, vous allez rentrer en catatonie à moins de dépenser un point de Rage.',
  })
  .set('Compulsion', {
    name: 'Compulsion',
    level: 0,
    description:
      'Vous avez un besoin presque maladif de faire certaines choses à certains moments. Que ce soit vous laver les mains d’une certaine manière, ou refuser de marcher sur des lignes sur le sol. Ce n’est pas du niveau du dérangement d’Obsession-Compulsive, mais ça vous aide beaucoup.',
  })
  .set('Dérangé', {
    name: 'Dérangé',
    level: 0,
    description:
      'Vous êtes atteint d’un dérangement, lequel prend le pas sur vous lorsque vous craquez au niveau de la Volonté, ou que vous êtes soumis à plus de violences et de Rage que vous ne pouvez en supporter (sur décision d’Orga notamment).',
  })
  .set('Intolérance', {
    name: 'Intolérance',
    level: 0,
    description:
      'Que ce soit d’un groupe ethnique, d’une religion, d’une orientation sexuelle ou de genre, vous ne supportez pas les individus qui correspondent à cette catégorie. Votre intolérance est visible, et si vous y êtes confronté vous risquez de craquer. Toute obligation de présence avec des gens issus de cette catégorie devra déclencher des propos voire des actes agressifs, et si vous n’y parvenez pas, il faudra effectuer un test de Furie. (Attention à la Tribu que vous choisissez avec ce handicap).',
  })
  .set('Monomanie', {
    name: 'Monomanie',
    level: 0,
    description:
      'Vous avez un objectif personnel complexe, très complexe ; il vous faudrait plus d’une vie pour y parvenir et sans doute toute une armée. Devenir Roi de la Nation, rétablir la Trinité originelle, sauver l’âme des Garous corrompus : cet objectif peut être varié mais hors de portée, et vous ne reculerez devant rien pour l’atteindre, étant prêt à vous mettre en danger, ainsi que vos camarades, pour sa réussite.',
  })
  .set('Phobie', {
    name: 'Phobie',
    level: 0,
    description:
      'Vous êtes un Garou, une force de la nature, pourtant quelque chose, quelque part, vous terrifie au plus haut point. Vous ne pouvez pas supporter de vous retrouver face à votre peur. Si l’on vous y force, vous porterez votre rage sur la personne qui vous y pousse, et sinon il faudra dépenser un point de Volonté pour ne pas simplement courir dans l’autre sens. Note : Ce handicap peut être pris par les Fiannas, il s’agira de la seule chose qui résiste à leur courage.',
  })
  .set('Présomptueux', {
    name: 'Présomptueux',
    level: 0,
    description:
      'Pour vous, vos capacités vous permettent d’accomplir absolument n’importe quoi. Il n’y a rien au monde qui vous résiste, et à moins d’un essai, l’échec n’est pas envisageable. Notez qu’un échec sur une chose ne vous vaccinera pas de l’essai, c’est peut-être juste CET ordinateur qui vous résiste, ou CE mur que vous ne pouvez pas grimper.',
  })
  .set('Velléitaire', {
    name: 'Velléitaire',
    level: 0,
    description:
      'Vous avez du mal à vous imposer, et votre nature profonde vous pousse en situation de stress à obéir. Si vous perdez un challenge de Volonté, vous devrez obéir à tous les ordres de la personne pendant une heure, à condition qu’ils ne mettent pas votre vie en danger.',
  })
  .set('Vindicatif', {
    name: 'Vindicatif',
    level: 0,
    description:
      'Vous n’avez pas un objectif précis, mais un groupe surnaturel (une tribu, les vampires, une espèce de Ferae, etc...) vous a blessé au point que vous désiriez porter la vengeance contre eux. Votre vengeance doit être totale, et pour résister à l’idée de tout laisser tomber pour vous jeter dans la bataille il est nécessaire de dépenser un point de Volonté.',
  })
  .set('Chassé', {
    name: 'Chassé',
    level: 0,
    description:
      'Quelqu’un, quelque part, a une raison personnelle de vous en vouloir. Vous avez une cible sur la tête, et si vous avez déjà eu des preuves de ce fait, ça ne vous empêche pas de ne pas savoir qui, voire même pourquoi.',
  })
  .set('Dette à un humain', {
    name: 'Dette à un humain',
    level: 0,
    description:
      'Vous avez contracté une dette auprès d’un humain lambda. Plus les points sont haut, plus la dette est complexe ou l’individu puissant.',
  })
  .set('Dette à un humain (MdT)', {
    name: 'Dette à un humain (MdT)',
    level: 0,
    description:
      'Vous avez contracté une dette auprès d’un humain connaissant le monde surnaturel. Plus les points sont haut, plus la dette est complexe ou l’individu puissant.',
  })
  .set('Dette à une créature surnaturelle', {
    name: 'Dette à une créature surnaturelle',
    level: 0,
    description:
      'Vous avez contracté une dette auprès d’un individu issu du monde surnaturel. Plus les points sont haut, plus la dette est complexe ou l’individu puissant.',
  })
  .set('Ennemi', {
    name: 'Ennemi',
    level: 0,
    description:
      'Une organisation, un Tribu, ou un groupe quelconque vous veut énormément de mal. Si ça n’ira pas forcément jusqu’à votre mort, ils tenteront tout et donneront des ordres clairs pour vous nuire personnellement.',
  })
  .set('Famille Indépendante', {
    name: 'Famille Indépendante',
    level: 0,
    description:
      'Votre famille et vous êtes dans une relation houleuse. Ils rechigneront à vous soutenir à 100%, reculeront devant le danger, et manqueront de confiance en vous. Ils n’en seront pas des traîtres pour autant, et vous pourrez toujours les forcer à faire des choses, en usant de la Force ou de la peur... À vos risques et périls, bien entendu.',
  })
  .set('Inimitié de Camp', {
    name: 'Inimitié de Camp',
    level: 0,
    description:
      'Vous vous êtes heurté avec un Camp dans votre Tribu, déclenchant son ire, que ce soit parce que vous vous êtes moqué de leur objectif, ou même que vous leur avez mis volontairement des bâtons sans les roues.',
  })
  .set('Pupille', {
    name: 'Pupille',
    level: 0,
    description:
      'Que ce soit un membre de votre famille ou simplement un jeune à problème, vous avez la responsabilité d’un louveteau. Ses erreurs seront considérés comme les vôtres, aussi mieux vaut vous montrer sévère, tout en sachant qu’il s’agit néanmoins d’un Loup-Garou.',
  })
  .set('Ronin', {
    name: 'Ronin',
    level: 0,
    description:
      'Vous avez commi un acte qui a entaché votre nom ou celui de votre Tribu, qui vous a dès lors banni. Vous auriez pu, voir dû, être tué pour votre trahison. Vous êtes seul, sans le soutien d’une Tribu et d’une Alliance. Vous pouvez être accueilli dans une nouvelle organisation, mais celle-ci ferait offense à votre Tribu originelle et devrait bien peser le pour et le contre.',
  })
  .set('Sombre secret', {
    name: 'Sombre secret',
    level: 0,
    description:
      'Vous avez commis une faute, grave, à la Litanie. Le genre de crime qui, s’il s’apprend, vous vaudra au mieux un bannissement comme Ronin de votre Tribu, et au pire une mise à mort sauvage et l’oubli de votre existence.',
  })
  .set("Allergie à l'Argent", {
    name: "Allergie à l'Argent",
    level: 0,
    description:
      'Vous avez une faiblesse à l’argent. Il vous brûle la peau sous forme homidé, il vous est donc impossible d’en saisir plus de quelques secondes, et provoque des dégâts aggravés même lorsqu’il n’est pas pur sous forme Crinos et Glabro.',
  })
  .set('Ancêtre Dément', {
    name: 'Ancêtre Dément',
    level: 0,
    description:
      'Votre famille a été entachée, par le passé, par un ancêtre qui a commis de sacrés saccages dans la Nation ou dans votre Tribu. Peut-être est-il responsable de la chute d’un Sept célèbre, ou peut-être a-t-il trahi la Nation au profit du Ver. Vous travaillez, ainsi que votre descendance, pour tenter de redorer votre nom.',
  })
  .set('Docile', {
    name: 'Docile',
    level: 0,
    description:
      'Votre Rage a du mal à s’exprimer. Vous n’êtes pas faible, mais vous avez juste du mal à lier votre partie Loup à celle de votre partie d’Homme. Vous diminuez de 2 votre Rage maximum et ne parvenez à dépenser votre Rage que dans certaines conditions.',
  })
  .set('Marque de la bête', {
    name: 'Marque de la bête',
    level: 0,
    description:
      'Vous portez des stigmates dignes des traditions qu’on appose aux Loup-Garous dans la culture populaire. Un pentagramme sur le dos de la main et un pentagramme sur la paume. Les humains qui vous verront vous prendront simplement pour un cas spécial, mais n’importe qui ayant connaissance de l’existence des Loup-Garous comprendra.',
  })
  .set('Transformation Interdite', {
    name: 'Transformation Interdite',
    level: 0,
    description:
      'Vous ne pouvez vous transformer que sous certaines conditions bien précises, que la Lune soit visible notamment',
  })
  .set('Dévoilé', {
    name: 'Dévoilé',
    level: 0,
    description:
      'Votre transformation en Crinos ne provoque pas le Délire chez les humains, ils se souviendront parfaitement vous avoir vu. S’ils ne sauront pas précisément avoir vu un Loup-Garou, la description précise ne laissera aucun doute à personne.',
  });
export default function getHandicap(name) {
  const handicapObject = handicaps.get(name);
  return handicapObject;
}
