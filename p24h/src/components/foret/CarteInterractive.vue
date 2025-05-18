<script setup lang="ts">
import { ref, computed } from "vue";

interface Lieu {
  id: number;
  name: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

const lieux = ref<Lieu[]>([
  {
    id: 1,
    name: "Clairière des Trois Fers",
    description:
      "Situé au nord-est de la forêt, son nom fait référence aux trois morcreaux de métal retrouvés plantés dans le sol au centre ducercle de lumière formé par celle-ci. \n Cette clairière à pour particularité d'attirer les promeneurs sans même y être d'eux même, ce n'est pas pour rien qu'ils sont unanimes sur le fait qu'une ambiance particulière y règne.\n Si vous avez de la chance vous pourrait apercevoir un verdier et même l'entendre chanter. La légende raconte égalementqu'un chevalier yaurait passer 3 nuits guidé par une voix mais l'on ne sait pas comment il a terminé.\n Cette clairière qui n'est pas unsitez majeur de cette fôret n'a néanmois pas été oublié, un ancien érudit aurait même proposé la théorie qu'elle serait en autre un lieu d'attente.\n Pour les visiteurs les plus plus curieux vous trouverez un endroit pour le moins surprenant",
    xPercent: 65,
    yPercent: 19,
  },
  {
    id: 2,
    name: "Grotte visitable (1)",
    description:
      "La grotte de Tenval fait partie des 2 grottes visitables de la forêt avec celle d'Avelek. La première se trouve au nord et la seconde au sud-est de la forêt.\n La particularité de la première grotte réside dans sa faculté à paraitre invisible pour tout visiteurs qui ne connait pas son emplacement exact.\n Pour y accéder il vous faudra vous accroupir ainsi que braver les ronces et la mousse qui recouvre la butte.\n A l'interieur de ce petit espace vous y trouverez une atmosphère pesante ainsi que des cavités parfois inondés. ",
    xPercent: 46,
    yPercent: 28,
  },
  {
    id: 3,
    name: "Chapelle de St Léonard",
    description:
      "Situé à l'est de Paimpont se trouvent les vestiges anciens d'une chapelle médiéval. Aucun registre ne mentionne son existance pourtant la chapelle de St-Lonard existe bel et bien.\n Certaines histoires racontent qu'autrefois elle servait de point de repli pour les ermites ou jeunes claires fuyant les troubles du duché, ou encore d'un prieuré autonome 'récupéré' par la guilde puis abandonné plus tard.\n Il ne reste qu'aujourd'hui ses vestiges oubliés servant de repère pour les guèpes. Vous entendrez parfois la cloche sonner vous rapellant que la chapelle est bien présente. Les habitants du village ne mentionneront pas son existance malgrè leur connaissance de celle-ci. Si vous voulez vous y rendre mieux vaut être accompagnés, le lieux n'est pas dangereux mais l'atmosphère peux vite devenir pesante.    ",
    xPercent: 70,
    yPercent: 51,
  },
  {
    id: 4,
    name: "Village de Paimpont",
    description:
      "Souvent décrit comme la porte d'entrée du mystère le village de Paimpont est entouré d'étange et de boids profonds. Vous y trouverez en sont centre l'abbaye Notre-Dame dont les pierres se mirent dans l'étang du village.\n Les guildiens y viennent discrément et fréquemment pour consulter des archivres ou interroger des voyageurs. Ce village semblent repoussés les créatures qui ne se risquent pas à franchir les abords de l'étang. On y raconte même qu'un pacte aurait été scéllé entre les anciens moines et les entités de la forêt.\n Pour les visiteurs vous pourrait vous arrêté à la maison du patrimoine, rencontrés des artisans locaux spécialisés dans les herbes ou les potions, ou encore explorés les sentiers venant vers des lieux mythiques comme le Val sans retour, l'arbre d'or ou le Miroir aux fées   ",
    xPercent: 50,
    yPercent: 51,
  },
  {
    id: 5,
    name: "Dolmen (1)",
    description:
      "Une large clairière entoure ce dolmen, comme si les arbres eux-même refusaient de trop s'en approcher. La mousse qui recouvre le socle en pierre est étonnamment douce, presque accueillante, et la lumière y joue de manière étrange, filtrée par des feuillages toujours mouvants. Ce lieu ne semble pas menaçant. Mais il ne cherche pas à rassurer pour autant. Ceux qui s'y arrêtent longtemps repartent souvent distraits, comme perdus dans leurs propres pensées.\n Ce dolmen est composé d'une grande dalle plate où se posent parfois les Phoenicurus, soutenue par six piliers de pierre. L'ensemble, bien que simple en apparence, dégage une harmonie troublante - comme si chaque élément avait été soigneusement calculé pour répondre à une logique oubliée. Les piliers sont irréguliers, certains marqués de stries naturelles, d'autres lissés par le temps ou la mousse. Autour le sol semble dégagé, toujours propre, comme si rien n'osait y pousser durablement. L'atmosphère y est suspendue, entre lumière tamisée et silence attentif.",
    xPercent: 21,
    yPercent: 44,
  },
  {
    id: 6,
    name: "Village de Ploëmel",
    description: "Village typique du Morbihan.",
    xPercent: 31,
    yPercent: 62,
  },
  {
    id: 7,
    name: "Château de Roche Voilée",
    description: "Château caché dans la forêt.",
    xPercent: 14,
    yPercent: 61,
  },
  {
    id: 8,
    name: "Dolmen (2)",
    description:
      "Dans les profondeurs plus sombres et humides du sud est, un second dolmen repose, partiellement effondré, permis des pierres dispersées comme un jeu ancien. La lumière y filtre à peine. L'air y est dense, gorgé d'un silence parfois brisé par les chants des Loriots. Même les pas les plus légers éveillent des échos mous dans l'humus. Ce lieu n'évolue pas la peur, mais plutôt une forme de respect involontaire. Ici, on ne parle pas fort.",
    xPercent: 38,
    yPercent: 76,
  },
  {
    id: 9,
    name: "Vieux Chêne",
    description:
      "Endroit près duquel la lumière comme le bruit  arrivent rarement, on date ce chêne d'au moins 500ans. Entièrement recouvert de mousse, cet arbre, large comme trois hommes, est semblable à une entité ancienne recouverte d'un manteau vert, pour qui les arbres alentours se seraient inclinés afin de lui céder leur lumière. Lieu de nombreuses légendes, on raconte que de nombreux aventuriers s'y recueillent, y apportent des objets symboliques avant de partir en mission. Selon une légende, les vieux druides de l'ancien temps, voire même Merlin, venaient chercher ici non pas la vérité, mais un silence que seul ce lieu peut apporter.",
    xPercent: 24,
    yPercent: 83,
  },
  {
    id: 10,
    name: "Grotte visitable (2)",
    description:
      "A contrario la grotte d'Anelevek est tous l'opposé de celle de Tenval, elle est difficile à manquer tant son ouverture est grande.\n On peut y accéder grâce à un sentier pour accéder à la première grande salle qui s'ouvre sur un réseau de gallerie plus profonde.\n Ces galleries sont néanmoins plus difficile d'accés certaines nécéssitant même de ramper.\n Pour les plus téméraires vous pourrez explorer ces étranges galleries où le vent vous rapelle la respiration de la terre.\n Certains membres de la guilde laissent penser qu'autrefois cette grotte servait de prison pour les créatures trop daugereuses pour être détruites. A ce jour aucune preuve n'a été apportés à ces témoignages.   ",
    xPercent: 50,
    yPercent: 87,
  },
]);

const selectedLieu = ref<Lieu | null>(null);

function handleClick(lieu: Lieu) {
  selectedLieu.value = lieu;

  const sectionId = lieu.name.replace(/\s*\(\d+\)/, "");
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const lieuxFusionnes = computed(() => {
  const map = new Map<string, string[]>();

  lieux.value.forEach((lieu) => {
    const nomNettoye = lieu.name.replace(/\s*\(\d+\)/, "");
    if (!map.has(nomNettoye)) {
      map.set(nomNettoye, []);
    }
    map.get(nomNettoye)!.push(lieu.description);
  });

  return Array.from(map.entries()).map(([nom, descriptions]) => ({
    nom,
    descriptions,
  }));
});
</script>

<template>
  <div class="carte-container">
    <img
      src="../../assets/carteForet.jpg"
      alt="Carte de Brocéliande"
      class="carte-image"
    />

    <div
      v-for="lieu in lieux"
      :key="lieu.id"
      class="point"
      :style="{
        left: lieu.xPercent + '%',
        top: lieu.yPercent + '%',
      }"
      @click="handleClick(lieu)"
    >
      <span class="tooltip">{{ lieu.name }}</span>
    </div>
  </div>

  <div>
    <h2 class="text-3xl font-bold my-4">Découvrir les lieux</h2>
    <div
      v-for="lieu in lieuxFusionnes"
      :key="lieu.nom"
      :id="lieu.nom"
      class="mb-12"
    >
      <h3 class="text-xl font-semibold text-green-800">{{ lieu.nom }}</h3>
      <div class="mt-1 space-y-1">
        <p
          v-for="(desc, i) in lieu.descriptions"
          :key="i"
          class="text-gray-100"
        >
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carte-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
}

.carte-image {
  width: 100%;
  height: auto;
  display: block;
}

.point {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: forestgreen;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}

.point:hover .tooltip {
  display: block;
}

.tooltip {
  display: none;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #ccc;
  white-space: nowrap;
  z-index: 10;
}

.info-box {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 250px;
  z-index: 20;
}

@media (max-width: 600px) {
  .info-box {
    top: auto;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
}

.sections-container {
  margin-top: 3rem;
  padding: 1rem;
  background-color: #f9f9f9;
}

.lieu-section {
  margin-bottom: 2rem;
  padding: 1rem;
  border-left: 4px solid forestgreen;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
</style>
