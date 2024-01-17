// ==UserScript==
// @name         BITCOIN BOOS
// @namespace    http://tampermonkey.net/
// @version      0.01
// @description  try to take over the world!
// @author       latyshdev
// @match        https://discord.com/channels/1071136182676754472/*
// @icon         https://cdn.discordapp.com/icons/1071136182676754472/d4eccbd7a624c7a57a745a0370c0bf31.webp?size=96
// @match        *://*/*
// @grant        window.close
// ==/UserScript==

/* =========================================================================== */
// 
const XPATH = {};
XPATH.swords = `//div[contains(@aria-label, 'crossed swords') and contains(@aria-label, ' press to react')]`;

const PAUSES = {};
PAUSES.swordsClicked = 200;
PAUSES.swordsNotExist = 50;

/* =========================================================================== */
// 
( async () => {

})();


/* =========================================================================== */
async function checkSwords () {
  let swordsExists = getElementByXpath(XPATH.swords, document);
  if (swordsExists) {
    swordsExists.click();
    await pause(PAUSES.swordsClicked);
    return checkSwords();
  } else {
    await pause(PAUSES.swordsNotExist);
    return checkSwords();
  }
};

/* ========================================================================= */
function getElementByXpath (xpath, frame_document) {
  return document.evaluate(
    xpath,
    frame_document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

/* ========================================================================= */
async function pause(ms) {
  return await new Promise(r=>setTimeout(r, ms));
};

/* ========================================================================= */
function randomBetweenInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
};

/* =========================================================================== */
/* КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН  */
/* =========================================================================== */
/* КАК ЖЕ ДОХУЯ НАСЫПЯТ КАК ЖЕ ДОХУЯ НАСЫПЯТ КАК ЖЕ ДОХУЯ НАСЫПЯТ КАК ЖЕ ДОХУЯ */
/* =========================================================================== */
/* КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН КЖДН  */
/* =========================================================================== */