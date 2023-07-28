const nameAtk = prompt("Insira o nome do personagem atacante: ");

const damageAtk = prompt(
  "Insira a força do personagem atacante (Força entre 10 ~ 50 max): "
);

const nameDef = prompt("Insira o nome do personagem defensor: ");

const lifeDef = prompt(
  "Insira os pontos de vida do defensor (Vida 100 ~ 150 max): "
);

const defenseDef = prompt(
  "Insira a defesa do personagem defensor (Defesa entre 10 ~ 50 max): "
);

const shieldDef = prompt("O defensor possui um escudo ? (Sim/Não): ");

let dmgDone = 0;

if (damageAtk > defenseDef) {
  if ((shieldDef == "Sim") | (shieldDef == "sim")) {
    dmgDone = (damageAtk - defenseDef) / 2;
  } else {
    dmgDone = damageAtk - defenseDef;
  }
}

const newLifeDef = lifeDef - dmgDone;

alert(
  "Resultado da batalha: " +
    "\n \nNome do personagem atacante: " +
    nameAtk +
    "\nForça do personagem atacante: " +
    damageAtk +
    "\n \nNome do personagem defensor: " +
    nameDef +
    "\nVida do personagem defensor: " +
    lifeDef +
    "\nDefesa do personagem defensor: " +
    defenseDef +
    "\nO personagem defensor possui um escudo: " +
    shieldDef +
    "\n \nPontos de vida após a batalha: " +
    newLifeDef
);
