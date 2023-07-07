import * as THREE from "three";
import { generateDefaultEditor, readOnlyState, editState } from "../editor";
import {
    generateDefaultSceneObjects,
    resizeCanvasToDisplaySize,
    loadDefaultActor,
    loadDefaultObjectives,
    translateActor,
    rotateActor,
    checkCollision,
    degreeToRadians
} from "../three/util";
import GridMapHelper from "../three/GridMapHelper";
import parseCode from "./parser";
import { displayTime, configureDataAndUpload } from "../timer";
import { Modal } from "bootstrap";
import {SpikeTrap, trapsActivation, trapsDeactivation} from "../three/SpikeTrap";

//Defining Level 1 Scene's Properties

const sceneProperties = {
    cancelExecution: false,
    timer: 0,
    phase: 0
}

//Generating default Level 1 Objects

const logModal = new Modal(document.getElementById("logModal"));

let timerUpadate;

function updateTime()
{
    sceneProperties.timer++;
}

const editor = generateDefaultEditor(document.getElementById("editorArea"), {
    lineNumbers: true,
});

const andarFrenteBtn = document.getElementById('andarFrente');
andarFrenteBtn.addEventListener("click",() => { 
    let cursorAnchor = editor.state.selection.main.anchor
    let cursorHead = editor.state.selection.main.head
    let transaction
    let actualLine
    if(cursorAnchor <= cursorHead){
        transaction = editor.state.update({changes: {from: cursorAnchor, to: cursorHead, insert: "andarFrente(?)\n"}})
        actualLine = editor.state.doc.lineAt(cursorAnchor).number
    }
    else {
        transaction = editor.state.update({changes: {from: cursorHead, to: cursorAnchor, insert: "andarFrente(?)\n"}})
        actualLine = editor.state.doc.lineAt(cursorHead).number
    }
    editor.dispatch(transaction)
    editor.focus()
    let nextLinePos = editor.state.doc.line(actualLine+1).to
    editor.dispatch({selection:{anchor: nextLinePos}})
});

const andarTrasBtn = document.getElementById('andarTras');
andarTrasBtn.addEventListener("click",() => { 
    let cursorAnchor = editor.state.selection.main.anchor
    let cursorHead = editor.state.selection.main.head
    let transaction
    let actualLine
    if(cursorAnchor <= cursorHead){
        transaction = editor.state.update({changes: {from: cursorAnchor, to: cursorHead, insert: "andarTras(?)\n"}})
        actualLine = editor.state.doc.lineAt(cursorAnchor).number
    }
    else {
        transaction = editor.state.update({changes: {from: cursorHead, to: cursorAnchor, insert: "andarTras(?)\n"}})
        actualLine = editor.state.doc.lineAt(cursorHead).number
    }
    editor.dispatch(transaction)
    editor.focus()
    let nextLinePos = editor.state.doc.line(actualLine+1).to
    editor.dispatch({selection:{anchor: nextLinePos}})
});

const girarEsquerdaBtn = document.getElementById('girarEsquerda');
girarEsquerdaBtn.addEventListener("click",() => { 
    let cursorAnchor = editor.state.selection.main.anchor
    let cursorHead = editor.state.selection.main.head
    let transaction
    let actualLine
    if(cursorAnchor <= cursorHead){
        transaction = editor.state.update({changes: {from: cursorAnchor, to: cursorHead, insert: "girarEsquerda()\n"}})
        actualLine = editor.state.doc.lineAt(cursorAnchor).number
    }
    else {
        transaction = editor.state.update({changes: {from: cursorHead, to: cursorAnchor, insert: "girarEsquerda()\n"}})
        actualLine = editor.state.doc.lineAt(cursorHead).number
    }
    editor.dispatch(transaction)
    editor.focus()
    let nextLinePos = editor.state.doc.line(actualLine+1).to
    editor.dispatch({selection:{anchor: nextLinePos}})
});

const girarDireitaBtn = document.getElementById('girarDireita');
girarDireitaBtn.addEventListener("click",() => { 
    let cursorAnchor = editor.state.selection.main.anchor
    let cursorHead = editor.state.selection.main.head
    let transaction
    let actualLine
    if(cursorAnchor <= cursorHead){
        transaction = editor.state.update({changes: {from: cursorAnchor, to: cursorHead, insert: "girarDireita()\n"}})
        actualLine = editor.state.doc.lineAt(cursorAnchor).number
    }
    else {
        transaction = editor.state.update({changes: {from: cursorHead, to: cursorAnchor, insert: "girarDireita()\n"}})
        actualLine = editor.state.doc.lineAt(cursorHead).number
    }
    editor.dispatch(transaction)
    editor.focus()
    let nextLinePos = editor.state.doc.line(actualLine+1).to
    editor.dispatch({selection:{anchor: nextLinePos}})
});

const darMeiaVoltaBtn = document.getElementById('darMeiaVolta');
darMeiaVoltaBtn.addEventListener("click",() => { 
    let cursorAnchor = editor.state.selection.main.anchor
    let cursorHead = editor.state.selection.main.head
    let transaction
    let actualLine
    if(cursorAnchor <= cursorHead){
        transaction = editor.state.update({changes: {from: cursorAnchor, to: cursorHead, insert: "darMeiaVolta()\n"}})
        actualLine = editor.state.doc.lineAt(cursorAnchor).number
    }
    else {
        transaction = editor.state.update({changes: {from: cursorHead, to: cursorAnchor, insert: "darMeiaVolta()\n"}})
        actualLine = editor.state.doc.lineAt(cursorHead).number
    }
    editor.dispatch(transaction)
    editor.focus()
    let nextLinePos = editor.state.doc.line(actualLine+1).to
    editor.dispatch({selection:{anchor: nextLinePos}})
});

const coletarCristalBtn = document.getElementById('coletarCristal');
coletarCristalBtn.addEventListener("click",() => { 
    let cursorAnchor = editor.state.selection.main.anchor
    let cursorHead = editor.state.selection.main.head
    let transaction
    let actualLine
    if(cursorAnchor <= cursorHead){
        transaction = editor.state.update({changes: {from: cursorAnchor, to: cursorHead, insert: "coletarCristal()\n"}})
        actualLine = editor.state.doc.lineAt(cursorAnchor).number
    }
    else {
        transaction = editor.state.update({changes: {from: cursorHead, to: cursorAnchor, insert: "coletarCristal()\n"}})
        actualLine = editor.state.doc.lineAt(cursorHead).number
    }
    editor.dispatch(transaction)
    editor.focus()
    let nextLinePos = editor.state.doc.line(actualLine+1).to
    editor.dispatch({selection:{anchor: nextLinePos}})
});

const consoleElement = document.getElementById('consoleArea');

const {renderer, scene, camera, controls} = generateDefaultSceneObjects(document.getElementById("phaseView"));

const gridMapHelper = new GridMapHelper();

const plane = gridMapHelper.createGridPlane();
const plane2 = gridMapHelper.createGridPlane2();
const plane3 = gridMapHelper.createGridPlane3();
const plane4 = gridMapHelper.createGridPlane4();
const plane5 = gridMapHelper.createGridPlane5();
const plane6 = gridMapHelper.createGridPlane6();
const plane7 = gridMapHelper.createGridPlane7();

const actor = loadDefaultActor();

let objectives;
let walls;
let traps;

let spikeTrapState;

let setSpikeTrapState;

let setSpikeTrapStateInterval;

scene.add(actor);

async function andarFrente(amount)
{
    let correctedAmount = amount > 10 ? 10 : amount;
    await translateActor(actor,correctedAmount,gridMapHelper,sceneProperties,consoleElement);
}

async function andarTras(amount)
{
    let correctedAmount = amount > 10 ? 10 : amount;
    await translateActor(actor,-correctedAmount,gridMapHelper,sceneProperties,consoleElement);
}

async function girarEsquerda()
{
    await rotateActor(actor,90,sceneProperties,1);
}

async function girarDireita()
{
    await rotateActor(actor,90,sceneProperties,-1);
}

async function darMeiaVolta()
{
    await rotateActor(actor,180,sceneProperties,1);
}

let coletarCristal;

let resetLevel;

let winCondition;

const phaseGeneration = [];

//Functions to create the phases

//Phase 1
phaseGeneration.push(
    () => {
        scene.add(plane7);
        document.getElementById('phaseTitle').innerText = "Teste 1";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/stone_wall7.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);

//Phase 2
phaseGeneration.push(
    () => {
        scene.remove(plane7);
        scene.add(plane6);
        document.getElementById('phaseTitle').innerText = "Teste 2";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/stone_wall6.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);

//Phase 3
phaseGeneration.push(
    () => {
        scene.remove(plane6);
        scene.add(plane5);
        document.getElementById('phaseTitle').innerText = "Teste 3";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/stone_wall5.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);

//Phase 4
phaseGeneration.push(
    () => {
        scene.remove(plane5);
        scene.add(plane4);
        document.getElementById('phaseTitle').innerText = "Teste 4";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/stone_wall4.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);

//Phase 5
phaseGeneration.push(
    () => {
        scene.remove(plane4);
        scene.add(plane3);
        document.getElementById('phaseTitle').innerText = "Teste 5";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/stone_wall3.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);

//Phase 6
phaseGeneration.push(
    () => {
        scene.remove(plane3);
        scene.add(plane2);
        document.getElementById('phaseTitle').innerText = "Teste 6";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/wall.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);

//Phase 7
phaseGeneration.push(
    () => {
        scene.remove(plane2);
        scene.add(plane);
        document.getElementById('phaseTitle').innerText = "Teste 7";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/stone_wall2.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);

//Phase 8
phaseGeneration.push(
    () => {
        scene.remove(plane2);
        scene.add(plane);
        document.getElementById('phaseTitle').innerText = "Teste 8";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";

        camera.position.set(0,15,30);
        camera.rotation.set(0,0,0);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),0.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        gridMapHelper.addObstacle(8,8,0,0);
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(2,2,2);
        var aux = new URL('../../../assets/textures/stone_wall.jpg',import.meta.url).toString();
        var textureParede = new THREE.TextureLoader().load(aux);
        const boxMaterial = new THREE.MeshBasicMaterial({map: textureParede});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),1.0,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),1.0,gridMapHelper.getGlobalZPositionFromCoord(1));
        gridMapHelper.addObstacle(2,8,2,2);
        gridMapHelper.addObstacle(2,9,4,4);
        gridMapHelper.addObstacle(7,7,0,1);
        scene.add(walls[0]);
        scene.add(walls[1]);
        scene.add(walls[2]);
        scene.add(walls[3]);
        scene.add(walls[4]);
        scene.add(walls[5]);
        scene.add(walls[6]);
        scene.add(walls[7]);
        scene.add(walls[8]);
        scene.add(walls[9]);
        scene.add(walls[10]);
        scene.add(walls[11]);
        scene.add(walls[12]);
        scene.add(walls[13]);
        scene.add(walls[14]);
        scene.add(walls[15]);
        scene.add(walls[16]);
        scene.add(walls[17]);

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor.getObjectByName('interactionReference'),objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
                gridMapHelper.obstacles[0].active = false;
            }
            else
            {
                consoleElement.innerText += "Robô não está em frente ao cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.obstacles[0].active = true;
        }

        winCondition = () =>{
            if(!objectives[0].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        timerUpadate = setInterval(updateTime,1000);
    }
);


//Defining function that remove objects, scene render and button's functions

function removeObjects(crystals, walls, traps)
{
    if(crystals != undefined)
    {
        for(let i = 0; i < crystals.length; i++)
        {
            scene.remove(crystals[i]);
        }
    }

    if(walls != undefined)
    {
        for(let i = 0; i < walls.length; i++)
        {
            scene.remove(walls[i]);
        }
        gridMapHelper.clearObstacles();   
    }

    if(traps != undefined)
    {
        for(let i = 0; i < traps.length; i++)
        {
            scene.remove(traps[i]);
        }   
        gridMapHelper.clearTraps();
    }

    crystals = undefined;
    walls = undefined;
    traps = undefined;
}

function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
    displayTime(sceneProperties.timer,document.getElementById("timer"));
}

window.addEventListener('resize',() => {
    resizeCanvasToDisplaySize(renderer,camera);
});

const finishEarlierButton = document.getElementById('finishEarlier');

const execBtn = document.getElementById("execBtn")
execBtn.addEventListener("click",async function() {
    const codeParsed = parseCode(editor.state.doc.toString());
    sceneProperties.cancelExecution = false;
    if(traps != null)
        trapsDeactivation(traps)
    if(codeParsed != null)
    {
        resetLevel();
        sceneProperties.executing = true;
        this.disabled = true;
        await eval(codeParsed);
        if(winCondition())
        {
            readOnlyState.doc = editor.state.doc;
            editor.setState(readOnlyState);
            document.getElementById('winMessage').classList.remove('invisible');
            document.getElementById('advanceBtn').classList.remove('invisible');
            document.getElementById("resetBtn").disabled = true;
            finishEarlierButton.disabled = true;
            clearInterval(timerUpadate);
            if(sceneProperties.phase == phaseGeneration.length - 1)
            {
                configureDataAndUpload(document.getElementById("name"),document.getElementById("age"),'gender','prog-exp',document.getElementById("subBtn"),sceneProperties.timer,'../','Nível 1/Completo');
            }
        }
        else
        {
            sceneProperties.executing = false;
            this.disabled = false;
        }
    }
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click",() => {
    sceneProperties.cancelExecution = true;
    resetLevel();
});

const advanceBtn = document.getElementById('advanceBtn');
advanceBtn.addEventListener('click',(e) => {
    sceneProperties.phase++;
    if(sceneProperties.phase < phaseGeneration.length)
    {
        removeObjects(objectives,walls,traps);
        phaseGeneration[sceneProperties.phase]();
        editor.setState(editState);
        consoleElement.innerText = null;
        document.getElementById('winMessage').classList.add('invisible');
        document.getElementById('advanceBtn').classList.add('invisible');
        execBtn.disabled = false;
        resetBtn.disabled = false;
        finishEarlierButton.disabled = false;
    }
    else
    {
        sceneProperties.phase = sceneProperties.phase > phaseGeneration.length ? phaseGeneration.length : sceneProperties.phase;
        logModal.show();
    }
});

finishEarlierButton.addEventListener('click', (e) => {
    if(confirm("Deseja realmente finalizar a prática?"))
    {
        clearInterval(timerUpadate);
        configureDataAndUpload(document.getElementById("name"),document.getElementById("age"),'gender','prog-exp',document.getElementById("subBtn"),sceneProperties.timer,'../',`Nível 1/Fase ${sceneProperties.phase + 1}`);
        logModal.show();
    }
});

//Running level 1

resizeCanvasToDisplaySize(renderer,camera);
phaseGeneration[sceneProperties.phase]();
animate();