const insanitys = new Map();

insanitys
  .set('Aucun', { name: null, level: 0, description: null })
  .set('Fugue', {
    name: 'Fugue',
    level: 0,
    description:
      'Vous errez sans but tel une âme en peine. Vous ne pouvez parler à personne, ni réagir aux agressions verbales. Si on vous touche pendant cette errance, vous gagnez un point de Rage automatiquement. Si on vous attaque physiquement, ou qu’on insiste, cela déclenche immédiatement une Furie sur la cible, qui se calmera lorsqu’elle mourra.',
  })
  .set('Hystérie', {
    name: 'Hystérie',
    level: 0,
    description:
      'Vous tremblez et devenez agressif avec tout votre entourage. Vous vous grattez nerveusement, et vous commencez à prendre des points de Rage à raison d’un par tranche de dix minutes. Vous ne pourrez vous calmer qu’à partir de 30 minutes et en utilisant un point de Volonté. Si vous n’en avez plus, il sera nécessaire d’attendre votre Furie. Celle-ci sera particulière, puisqu’elle déclenchera votre colère dans un rayon de trois mètres autour de vous. Tout ce qui se trouve dans ce rayon devra être réduit à l’état de poussière. Si ni objet ni individu ne se trouvent à proximité, vous vous contenterez d’attaquer le sol, les murs, etc...',
  })
  .set('Obsessionnel-Compulsif', {
    name: 'Obsessionnel-Compulsif',
    level: 0,
    description:
      'Tout doit être droit, propre, rangé. Vous retrouvez votre bien-être dans une pièce parfaite, où tout n’est que parallèles et angles droits. Problème, tout n’est jamais parfait, parallèle et angle droit. C’est parti donc pour faire le tour, encore, et encore, et régler au millimètre chaque détail, y revenir, encore et encore. Vous ne vociférez qu’à peine aux gens, ils ne méritent pas d’avoir votre attention entière dans ce capharnaüm. Si on essaye de vous arrêter, vous allez vous débattre et même vous faire mal, pour pouvoir continuer. Il faudra trente minutes pour vous calmer en dépensant un point de Volonté, ou une heure sans.',
  })
  .set('Paranoïa', {
    name: 'Paranoïa',
    level: 0,
    description:
      'Ce n’est pas que vous délirez, c’est que vous comprenez, là, enfin, que tout le monde vous déteste. Ils cherchent tous à vous nuire, de près ou de loin, et les plus gentils ne sont que des hypocrites qui vous poignarderont dans le dos. Ils vont vous jurer qu’il n’y a rien qui se prépare contre vous, c’est un complot absolu. Vous gagnez un point de Rage par tranche de 10 minutes, et au bout de 30 minutes, vous pouvez dépenser 2 points de Volonté pour vous calmer. Si vous n’avez pas assez de points de Volonté, vous allez laisser libre court à votre Rage sur une personne, celle que vous considérer être la tête pensante de vos malheurs.',
  })
  .set('Personnalités multiples', {
    name: 'Personnalités multiples',
    level: 0,
    description:
      'Plusieurs esprits se trouvent dans votre corps, et quand on dit plusieurs, c’est vraiment plusieurs. Vous pouvez regarder ceux qui se plaignent d’avoir deux ou trois personnalités, vous, vous en avez dix minimum. En cas de crises, allez voir un Organisateur, et pendant une heure ça va devenir un festival où vous allez passer d’une personnalité à l’autre de manière relativement anarchique. Vos différentes personnalités n’auront accès qu’à certaines parties de votre feuille et des connaissances que vous avez, elles pourraient n’employer qu’une seule langue où ne plus savoir comment attacher des lacets.',
  })
  .set('Schizophrénie', {
    name: 'Schizophrénie',
    level: 0,
    description:
      'Vous allez souffrir d’hallucinations auditives et visuelles, au point de confondre les individus et de ne plus savoir ce qui réel ou non. Ça peut aller de la simple conversation à entendre continuellement quelqu’un vous répéter que vous allez mourir, c’est sûr. Vous concentrer devient compliqué, et vous pouvez déclencher des attaques, voir en esquiver, de la part de choses qui n’existent pas. Au début d’une crise, allez immédiatement voir un Organisateur. Il faut une heure pour que les voix et les images cessent, petit à petit.',
  })
  .set('Sociopathie', {
    name: 'Sociopathie',
    level: 0,
    description:
      'Vous ne ressentez plus rien, plus d’amour, de peine, de tristesse. Vous pouvez feindre des émotions, qui déclencheront au mieux un petit sourire sur votre visage. Le seul moyen de ressentir quelque chose, c’est de faire du mal à quelqu’un, pas forcément en face, mais vous avez une victime qui devra subir une situation humiliante pour que vous vous sentiez mieux. Vous êtes immunisé à toute action d’Empathie, vous ne pouvez gagner ni dépenser de Rage pendant votre crise, et elle ne peut se terminer que par une dépense de 2 points de Volonté, ou un succès dans votre entreprise de destruction/humiliation d’un individu. Celui-ci doit être définit avant à votre Organisateur. Note : N’oubliez pas que vous n’êtes pas obligé d’aller jusqu’à sa mort définitive, votre but est surtout d’engranger du calme en déclenchant de la souffrance.',
  });
export default function getInsanity(name) {
  const insanityObject = insanitys.get(name);
  return insanityObject;
}
