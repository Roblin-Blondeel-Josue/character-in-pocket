const clans = new Map();
clans
  .set("Crocs d'Argent", [
    { name: 'Indépendant' },
    { name: "Famille d'Hautcourt" },
    { name: "Famille d'Herberive" },
    { name: 'Famille Dutueil' },
    { name: 'Famille Gossein' },
  ])
  .set('Enfants de Gaia', [
    { name: 'Sans Clan' },
    { name: 'Les Filles de Demeter' },
    { name: "L'Arbre véritable" },
    { name: 'Les Chercheurs' },
    { name: "L'Oeuvre patiente" },
    { name: 'Le Cimier de la Corne' },
  ])
  .set('Fiannas', [
    { name: 'Sans Clan' },
    { name: "Questeurs d'Ys" },
    { name: 'La Nouvelle Hermine' },
    { name: 'Les Enfants du Reflet' },
    { name: 'Le Sang de Finn' },
    { name: 'La Chasse Sauvage' },
  ])
  .set('Fils de Fenrir', [
    { name: 'Sans Clan' },
    { name: 'Néo Asgard' },
    { name: 'La Chevauchée Fantastique' },
    { name: 'La Main de Tyr' },
    { name: 'La Fraternité Millénaire' },
  ])
  .set('Furies Noires', [
    { name: 'Sans Clan' },
    { name: 'Les Filles de Thémis' },
    { name: 'La Sororité' },
    { name: "L'Ordre de Sainté-Mère Miséricorde" },
    { name: 'Les Filles de la Lune' },
    { name: 'Les Ménades' },
  ])
  .set("Gardiens d'Anubis", [
    { name: 'Sans Clan' },
    { name: 'Les Dagues de Nout' },
    { name: 'Les Hérauts' },
    { name: "Les Larmes d'Anubis" },
    { name: 'Les Voyageurs' },
    { name: 'Protecteurs de Bastet' },
  ])
  .set('Marcheurs sur Verre', [
    { name: 'Sans Clan' },
    { name: 'Les Loups Sociétaires' },
    { name: 'Les CyberChiens' },
    { name: 'Dies Ultimae' },
    { name: 'Les Contradicteurs Aléatoires' },
    { name: 'Les Primitifs Urbains' },
  ])
  .set("Rongeurs d'Os", [
    { name: 'Sans Clan' },
    { name: 'Rammstein' },
    { name: 'Motorhead' },
    { name: 'Skip the Use' },
    { name: 'Clash' },
    { name: 'Nirvana' },
  ])
  .set("Seigneurs de l'Ombre", [
    { name: 'Sans Clan' },
    { name: 'Les Enfants de Corbeau' },
    { name: 'La Garde Noire' },
    { name: 'Les Juges de la Fin' },
    { name: 'Les Forestiers de la Nuit' },
    { name: 'Les Illuminés de la tempête' },
  ])
  .set('Hurleurs Blancs', ['Aucun']);

export default function getClans(tribe) {
  const clansList = clans.get(tribe);
  return clansList;
}
