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
import LaserFence from "../three/LaserFence";

const sceneProperties = {
    cancelExecution: false,
    phase: 0,
    executing: false
}

let laserState;

let setLaserStates;

let setLaserStatesInterval;

const editor = generateDefaultEditor(document.getElementById("editorArea"));

const consoleElement = document.getElementById('consoleArea');

const {renderer, scene, camera, controls} = generateDefaultSceneObjects(document.getElementById("phaseView"));

const gridMapHelper = new GridMapHelper();

const plane = gridMapHelper.createGridPlane();

const actor = loadDefaultActor();

let objectives;
let walls;
let traps;
let laserFences
function changeLaserActiveStatus(index,status)
{
    gridMapHelper.lasers[index].active = status;
    //lasers[index].visible = status;
    if(status == false)
        laserFences[index].setNotVisible();
}
function changeLaserStateStatus(index, status)
{
    gridMapHelper.lasers.forEach(laser => {if(laser.type == "multiColor")laser.state = status});
    if (status == 'blue'){
        laserFences.forEach(laser => {
            if(laser.type == "multiColor")
                laser.setBlue()
        });
    } else if (status == 'red'){
        laserFences.forEach(laser => {
            if(laser.type == "multiColor")
                laser.setRed()
        });
    }
}
function lasersVisualRestart()
{
    for(let i = 0;i < laserFences.length;i++)
    {
        laserFences[i].active = true;
    }
}

scene.add(plane);
scene.add(actor);

async function andarFrente(amount)
{
    await translateActor(actor,amount,gridMapHelper,sceneProperties,consoleElement);
}

async function andarTras(amount)
{
    await translateActor(actor,-amount,gridMapHelper,sceneProperties,consoleElement);
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

function laserAzul()
{
    if(gridMapHelper.detectLaser(actor.position,'blue') != null)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function desativarAzul()
{
    let laserIndex = gridMapHelper.detectLaser(actor.position,'blue');
    
    if(laserIndex != null)
    {
        changeLaserActiveStatus(laserIndex,false);
    }
}

function desativarVermelho()
{
    let laserIndex = gridMapHelper.detectLaser(actor.position,'red');
    
    if(laserIndex != null)
    {
        changeLaserActiveStatus(laserIndex,false);
    }   
}

function badLuck(position,state)
{
    const vector = new THREE.Vector3(gridMapHelper.getGlobalXPositionFromCoord(position[0]),0,gridMapHelper.getGlobalZPositionFromCoord(position[1]));
    let newLaserState = state == 'blue' ? 'red' : 'blue';
    let laserIndex = gridMapHelper.detectLaser(actor.position,state);

    if(laserIndex != null)
    {
        changeLaserStateStatus(laserIndex,newLaserState);
    }
}

let coletarCristal;

let resetLevel;

let winCondition;

const phaseGeneration = [];

// //Phase 1
// phaseGeneration.push(
//     () => {
//         document.getElementById('phaseTitle').innerText = "Nível 3 - Fase 1 de 8";
//         document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";
        
//         sceneProperties.executing = false;
//         camera.position.set(0,15,30);

//         actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
//         actor.rotation.set(0,degreeToRadians(90),0);

//         objectives = loadDefaultObjectives(1);
//         objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.0,gridMapHelper.getGlobalZPositionFromCoord(5));
//         scene.add(objectives[0]);

//         walls = [];
//         const boxGeometry = new THREE.BoxGeometry(18,2,2);
//         const boxMaterial = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
//         walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
//         walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(4));
//         walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(6));
//         scene.add(walls[0]);
//         scene.add(walls[1]);
//         gridMapHelper.addObstacle(1,9,4,4);
//         gridMapHelper.addObstacle(1,9,6,6);

//         laserFences = [];
//         laserFences.push(new LaserFence("multiColor"));
//         laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
//         gridMapHelper.addLaser(7,5, laserFences[0]);
//         scene.add(laserFences[0]);
//         //laserFences[0].setBlue()


//         // lasers = [];
//         // const laserGeometry = new THREE.BoxGeometry(2,2,2);
//         // const laserMaterial = new THREE.MeshLambertMaterial({color: 'rgb(0,0,255)'});
//         // lasers.push(new THREE.Mesh(laserGeometry,laserMaterial));
//         // lasers[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),0.1,gridMapHelper.getGlobalZPositionFromCoord(5));
//         // gridMapHelper.addLaser(7,5);
//          laserState = 0;
//         setLaserStates = () => {
//             if(laserState == 0)
//             {
//                 changeLaserStateStatus(0, 'blue');
//             }
//             else
//             {
//                 changeLaserStateStatus(0, 'red');
//             }
//         }
//         // scene.add(lasers[0]);

//         coletarCristal = () => {
//             if(sceneProperties.cancelExecution)
//             {
//                 return;
//             }

//             if(checkCollision(actor,objectives[0],gridMapHelper))
//             {
//                 objectives[0].visible = false;
//                 consoleElement.innerText += "Cristal coletado com sucesso.\n";
//             }
//             else
//             {
//                 consoleElement.innerText += "Robô não está sobre o cristal.\n";
//             }
//         }

//         resetLevel = () =>{
//             actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
//             actor.rotation.set(0,degreeToRadians(90),0);
//             actor.getObjectByName('eve').rotation.set(0,0,0);
//             objectives[0].visible = true;
//             gridMapHelper.restartLasers();
//             lasersVisualRestart();
//             setLaserStates();
//         }

//         winCondition = () =>{
//             if(!objectives[0].visible)
//             {
//                 return true;
//             }
//             else
//             {
//                 return false;
//             }
//         }

//         setLaserStatesInterval = setInterval(() => {
//             if(sceneProperties.executing)
//             {
//                 return;
//             }

//             laserState = (laserState + 1) % 2;
//             setLaserStates();
//         },1000);
//     }
// );

// //Phase 2
// phaseGeneration.push(
//     () => {
//         document.getElementById('phaseTitle').innerText = "Nível 3 - Fase 2 de 8";
//         document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";
        
//         sceneProperties.executing = false;
//         camera.position.set(0,15,30);

//         actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
//         actor.rotation.set(0,degreeToRadians(90),0);

//         objectives = loadDefaultObjectives(2);
//         objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),0.0,gridMapHelper.getGlobalZPositionFromCoord(7));
//         objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),0.0,gridMapHelper.getGlobalZPositionFromCoord(3));
//         scene.add(objectives[0]);
//         scene.add(objectives[1]);

//         traps = [];
//         const trapGeometry = new THREE.BoxGeometry(2,1,2);
//         const trapMaterial = new THREE.MeshLambertMaterial({color: "rgb(255,0,0)"});
//         traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
//         traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),0.5,gridMapHelper.getGlobalZPositionFromCoord(5));
//         gridMapHelper.addTrap(3,5);
//         scene.add(traps[0]);

//         walls = [];
//         const boxGeometry1 = new THREE.BoxGeometry(6,2,2);
//         const boxMaterial = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));        
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1,gridMapHelper.getGlobalZPositionFromCoord(4));
//         walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1,gridMapHelper.getGlobalZPositionFromCoord(6));
//         walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1,gridMapHelper.getGlobalZPositionFromCoord(3));
//         walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1,gridMapHelper.getGlobalZPositionFromCoord(7));
//         walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1,gridMapHelper.getGlobalZPositionFromCoord(2));
//         walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),1,gridMapHelper.getGlobalZPositionFromCoord(8));
//         walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(3));
//         walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(7));
//         walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1,gridMapHelper.getGlobalZPositionFromCoord(4));
//         walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),1,gridMapHelper.getGlobalZPositionFromCoord(6));
//         walls[2].rotateY(Math.PI/2)
//         walls[3].rotateY(Math.PI/2)
//         walls[6].rotateY(Math.PI/2)
//         walls[7].rotateY(Math.PI/2)
//         scene.add(walls[0]);
//         scene.add(walls[1]);        
//         scene.add(walls[2]);
//         scene.add(walls[3]);
//         scene.add(walls[4]);
//         scene.add(walls[5]);
//         scene.add(walls[6]);
//         scene.add(walls[7]);
//         scene.add(walls[8]);
//         scene.add(walls[9]);

//         gridMapHelper.addObstacle(1,3,4,4);
//         gridMapHelper.addObstacle(1,3,6,6);
//         gridMapHelper.addObstacle(3,3,6,8);
//         gridMapHelper.addObstacle(3,3,2,4);
//         gridMapHelper.addObstacle(4,4,8,8);
//         gridMapHelper.addObstacle(4,4,2,2);
//         gridMapHelper.addObstacle(5,5,2,4);
//         gridMapHelper.addObstacle(5,5,6,8);
//         gridMapHelper.addObstacle(6,7,6,6);
//         gridMapHelper.addObstacle(6,7,4,4);

//         laserFences = [];
//         laserFences.push(new LaserFence());
//         laserFences.push(new LaserFence());
//         laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
//         laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
//         gridMapHelper.addLaser(4,4, laserFences[0]);
//         gridMapHelper.addLaser(4,6, laserFences[1]);
//         laserFences[0].rotateY(Math.PI/2)
//         laserFences[1].rotateY(Math.PI/2)

//         scene.add(laserFences[0]);
//         scene.add(laserFences[1]);

//          laserState = 0;
//         setLaserStates = () => {
//             if(laserState == 0)
//             {
//                 changeLaserStateStatus(0, 'blue');
//             }
//             else
//             {
//                 changeLaserStateStatus(0, 'red');
//             }
//         }

//         coletarCristal = () => {
//             if(sceneProperties.cancelExecution)
//             {
//                 return;
//             }

//             if(checkCollision(actor,objectives[0],gridMapHelper))
//             {
//                 objectives[0].visible = false;
//                 consoleElement.innerText += "Cristal coletado com sucesso.\n";
//             }
//             else
//             {
//                 consoleElement.innerText += "Robô não está sobre o cristal.\n";
//             }
//         }

//         resetLevel = () =>{
//             actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
//             actor.rotation.set(0,degreeToRadians(90),0);
//             actor.getObjectByName('eve').rotation.set(0,0,0);
//             objectives[0].visible = true;
//             gridMapHelper.restartLasers();
//             lasersVisualRestart();
//             setLaserStates();
//         }

//         winCondition = () =>{
//             if(!objectives[0].visible && !objectives[1].visible)
//             {
//                 return true;
//             }
//             else
//             {
//                 return false;
//             }
//         }

//         setLaserStatesInterval = setInterval(() => {
//             if(sceneProperties.executing)
//             {
//                 return;
//             }

//             laserState = (laserState + 1) % 2;
//             setLaserStates();
//         },1000);
//     }
// );

// //Phase 3
// phaseGeneration.push(
//     () => {
//         document.getElementById('phaseTitle').innerText = "Nível 3 - Fase 3 de 8";
//         document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";
        
//         sceneProperties.executing = false;
//         camera.position.set(0,15,30);

//         actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
//         actor.rotation.set(0,degreeToRadians(90),0);

//         objectives = loadDefaultObjectives(2);
//         objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.0,gridMapHelper.getGlobalZPositionFromCoord(3));
//         objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.0,gridMapHelper.getGlobalZPositionFromCoord(6));
//         scene.add(objectives[0]);
//         scene.add(objectives[1]);

//         traps = [];
//         const trapGeometry = new THREE.BoxGeometry(2,1,2);
//         const trapMaterial = new THREE.MeshLambertMaterial({color: "rgb(255,0,0)"});
//         traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
//         traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
//         traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
//         traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
//         traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
//         traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
//         traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),0.5,gridMapHelper.getGlobalZPositionFromCoord(2));
//         traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),0.5,gridMapHelper.getGlobalZPositionFromCoord(7));
//         traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),0.5,gridMapHelper.getGlobalZPositionFromCoord(4));
//         traps[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),0.5,gridMapHelper.getGlobalZPositionFromCoord(5));
//         traps[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.5,gridMapHelper.getGlobalZPositionFromCoord(2));
//         traps[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.5,gridMapHelper.getGlobalZPositionFromCoord(7));

//         gridMapHelper.addTrap(4,2);
//         gridMapHelper.addTrap(4,7);
//         gridMapHelper.addTrap(6,4);
//         gridMapHelper.addTrap(6,5);
//         gridMapHelper.addTrap(9,2);
//         gridMapHelper.addTrap(9,7);
//         scene.add(traps[0]);
//         scene.add(traps[1]);
//         scene.add(traps[2]);
//         scene.add(traps[3]);
//         scene.add(traps[4]);
//         scene.add(traps[5]);

//         walls = [];
//         const boxGeometry1 = new THREE.BoxGeometry(10,2,2);
//         const boxGeometry2 = new THREE.BoxGeometry(12,2,2);
//         const boxGeometry3 = new THREE.BoxGeometry(4,2,2);
//         const boxGeometry4 = new THREE.BoxGeometry(6,2,2);
//         const boxGeometry5 = new THREE.BoxGeometry(2,2,2);
//         const boxMaterial = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry2,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry3,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry3,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry3,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry4,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry4,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry5,boxMaterial));
//         walls.push(new THREE.Mesh(boxGeometry5,boxMaterial));

//         walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(9));
//         walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(0));
//         walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1,gridMapHelper.getGlobalZPositionFromCoord(4.5));
//         walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(4.5));
//         walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5),1,gridMapHelper.getGlobalZPositionFromCoord(2));
//         walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5),1,gridMapHelper.getGlobalZPositionFromCoord(7));
//         walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1,gridMapHelper.getGlobalZPositionFromCoord(4));
//         walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1,gridMapHelper.getGlobalZPositionFromCoord(5));
//         walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(2));
//         walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(7));

//         walls[2].rotateY(Math.PI/2)
//         walls[3].rotateY(Math.PI/2)

//         scene.add(walls[0]);
//         scene.add(walls[1]);        
//         scene.add(walls[2]);
//         scene.add(walls[3]);
//         scene.add(walls[4]);
//         scene.add(walls[5]);
//         scene.add(walls[6]);
//         scene.add(walls[7]);
//         scene.add(walls[8]);
//         scene.add(walls[9]);


//         gridMapHelper.addObstacle(3,7,9,9);
//         gridMapHelper.addObstacle(3,7,0,0);
//         gridMapHelper.addObstacle(3,3,2,7);
//         gridMapHelper.addObstacle(5,5,4,5);
//         gridMapHelper.addObstacle(5,5,7,7);
//         gridMapHelper.addObstacle(5,5,2,2);
//         gridMapHelper.addObstacle(7,8,7,7);
//         gridMapHelper.addObstacle(7,8,2,2);
//         gridMapHelper.addObstacle(7,9,4,4);
//         gridMapHelper.addObstacle(7,9,5,5);

//         laserFences = [];
//         laserFences.push(new LaserFence());
//         laserFences.push(new LaserFence());
//         laserFences.push(new LaserFence());
//         laserFences.push(new LaserFence());
//         laserFences.push(new LaserFence());
//         laserFences.push(new LaserFence());
//         laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
//         laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
//         laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
//         laserFences[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
//         laserFences[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
//         laserFences[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
//         gridMapHelper.addLaser(3,1, laserFences[0]);
//         gridMapHelper.addLaser(3,8, laserFences[1]);
//         gridMapHelper.addLaser(7,1, laserFences[2]);
//         gridMapHelper.addLaser(7,3, laserFences[3]);
//         gridMapHelper.addLaser(7,6, laserFences[4]);
//         gridMapHelper.addLaser(7,8, laserFences[5]);

//         scene.add(laserFences[0]);
//         scene.add(laserFences[1]);
//         scene.add(laserFences[2]);
//         scene.add(laserFences[3]);
//         scene.add(laserFences[4]);
//         scene.add(laserFences[5]);

//          laserState = 0;
//         setLaserStates = () => {
//             if(laserState == 0)
//             {
//                 changeLaserStateStatus(0, 'blue');
//             }
//             else
//             {
//                 changeLaserStateStatus(0, 'red');
//             }
//         }

//         coletarCristal = () => {
//             if(sceneProperties.cancelExecution)
//             {
//                 return;
//             }

//             if(checkCollision(actor,objectives[0],gridMapHelper))
//             {
//                 objectives[0].visible = false;
//                 consoleElement.innerText += "Cristal coletado com sucesso.\n";
//             }
//             else
//             {
//                 consoleElement.innerText += "Robô não está sobre o cristal.\n";
//             }
//         }

//         resetLevel = () =>{
//             actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
//             actor.rotation.set(0,degreeToRadians(90),0);
//             actor.getObjectByName('eve').rotation.set(0,0,0);
//             objectives[0].visible = true;
//             gridMapHelper.restartLasers();
//             lasersVisualRestart();
//             setLaserStates();
//         }

//         winCondition = () =>{
//             if(!objectives[0].visible && !objectives[1].visible)
//             {
//                 return true;
//             }
//             else
//             {
//                 return false;
//             }
//         }

//         setLaserStatesInterval = setInterval(() => {
//             if(sceneProperties.executing)
//             {
//                 return;
//             }

//             laserState = (laserState + 1) % 2;
//             setLaserStates();
//         },1000);
//     }
// );

//Phase 4
phaseGeneration.push(
    () => {
        document.getElementById('phaseTitle').innerText = "Nível 3 - Fase 4 de 8";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";
        
        sceneProperties.executing = false;
        camera.position.set(0,15,30);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(2);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.0,gridMapHelper.getGlobalZPositionFromCoord(3));
        objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.0,gridMapHelper.getGlobalZPositionFromCoord(6));
        scene.add(objectives[0]);
        scene.add(objectives[1]);

        traps = [];
        const trapGeometry = new THREE.BoxGeometry(2,1,2);
        const trapMaterial = new THREE.MeshLambertMaterial({color: "rgb(255,0,0)"});
        traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
        traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
        traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
        traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
        traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
        traps.push(new THREE.Mesh(trapGeometry,trapMaterial));
        traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),0.5,gridMapHelper.getGlobalZPositionFromCoord(2));
        traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4),0.5,gridMapHelper.getGlobalZPositionFromCoord(7));
        traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),0.5,gridMapHelper.getGlobalZPositionFromCoord(4));
        traps[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(6),0.5,gridMapHelper.getGlobalZPositionFromCoord(5));
        traps[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.5,gridMapHelper.getGlobalZPositionFromCoord(2));
        traps[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.5,gridMapHelper.getGlobalZPositionFromCoord(7));

        gridMapHelper.addTrap(4,2);
        gridMapHelper.addTrap(4,7);
        gridMapHelper.addTrap(6,4);
        gridMapHelper.addTrap(6,5);
        gridMapHelper.addTrap(9,2);
        gridMapHelper.addTrap(9,7);
        scene.add(traps[0]);
        scene.add(traps[1]);
        scene.add(traps[2]);
        scene.add(traps[3]);
        scene.add(traps[4]);
        scene.add(traps[5]);

        walls = [];
        const boxGeometry1 = new THREE.BoxGeometry(10,2,2);
        const boxGeometry2 = new THREE.BoxGeometry(12,2,2);
        const boxGeometry3 = new THREE.BoxGeometry(4,2,2);
        const boxGeometry4 = new THREE.BoxGeometry(6,2,2);
        const boxGeometry5 = new THREE.BoxGeometry(2,2,2);
        const boxMaterial = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
        walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry1,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry2,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry3,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry3,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry3,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry4,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry4,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry5,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry5,boxMaterial));

        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(9));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(0));
        walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3),1,gridMapHelper.getGlobalZPositionFromCoord(4.5));
        walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(4.5));
        walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5),1,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5),1,gridMapHelper.getGlobalZPositionFromCoord(7));
        walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(8),1,gridMapHelper.getGlobalZPositionFromCoord(5));
        walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(2));
        walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(7));

        walls[2].rotateY(Math.PI/2)
        walls[3].rotateY(Math.PI/2)

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


        gridMapHelper.addObstacle(3,7,9,9);
        gridMapHelper.addObstacle(3,7,0,0);
        gridMapHelper.addObstacle(3,3,2,7);
        gridMapHelper.addObstacle(5,5,4,5);
        gridMapHelper.addObstacle(5,5,7,7);
        gridMapHelper.addObstacle(5,5,2,2);
        gridMapHelper.addObstacle(7,8,7,7);
        gridMapHelper.addObstacle(7,8,2,2);
        gridMapHelper.addObstacle(7,9,4,4);
        gridMapHelper.addObstacle(7,9,5,5);

        laserFences = [];
        laserFences.push(new LaserFence());
        laserFences.push(new LaserFence());
        laserFences.push(new LaserFence());
        laserFences.push(new LaserFence());
        laserFences.push(new LaserFence());
        laserFences.push(new LaserFence());
        laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
        laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
        laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
        laserFences[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
        laserFences[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
        laserFences[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
        gridMapHelper.addLaser(3,1, laserFences[0]);
        gridMapHelper.addLaser(3,8, laserFences[1]);
        gridMapHelper.addLaser(7,1, laserFences[2]);
        gridMapHelper.addLaser(7,3, laserFences[3]);
        gridMapHelper.addLaser(7,6, laserFences[4]);
        gridMapHelper.addLaser(7,8, laserFences[5]);

        scene.add(laserFences[0]);
        scene.add(laserFences[1]);
        scene.add(laserFences[2]);
        scene.add(laserFences[3]);
        scene.add(laserFences[4]);
        scene.add(laserFences[5]);

         laserState = 0;
        setLaserStates = () => {
            if(laserState == 0)
            {
                changeLaserStateStatus(0, 'blue');
            }
            else
            {
                changeLaserStateStatus(0, 'red');
            }
        }

        coletarCristal = () => {
            if(sceneProperties.cancelExecution)
            {
                return;
            }

            if(checkCollision(actor,objectives[0],gridMapHelper))
            {
                objectives[0].visible = false;
                consoleElement.innerText += "Cristal coletado com sucesso.\n";
            }
            else
            {
                consoleElement.innerText += "Robô não está sobre o cristal.\n";
            }
        }

        resetLevel = () =>{
            actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
            actor.rotation.set(0,degreeToRadians(90),0);
            actor.getObjectByName('eve').rotation.set(0,0,0);
            objectives[0].visible = true;
            gridMapHelper.restartLasers();
            lasersVisualRestart();
            setLaserStates();
        }

        winCondition = () =>{
            if(!objectives[0].visible && !objectives[1].visible)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        setLaserStatesInterval = setInterval(() => {
            if(sceneProperties.executing)
            {
                return;
            }

            laserState = (laserState + 1) % 2;
            setLaserStates();
        },1000);
    }
);

function removeObjects(crystals, walls, traps, lasers)
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

    if(lasers != undefined)
    {
        for(let i = 0; i < lasers.length; i++)
        {
            scene.remove(lasers[i]);
        }   
        gridMapHelper.clearLasers();   
    }

    crystals = undefined;
    walls = undefined;
    traps = undefined;
    lasers = undefined;
}

function animate()
{
    renderer.render(scene,camera);
    controls.update();
    requestAnimationFrame(animate);
}

window.addEventListener('resize',() => {
    resizeCanvasToDisplaySize(renderer,camera);
});

const execBtn = document.getElementById("execBtn")
execBtn.addEventListener("click",async function() {
    const codeParsed = parseCode(editor.state.doc.toString());
    sceneProperties.cancelExecution = false;
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
        if(setLaserStatesInterval)
        {
            clearInterval(setLaserStatesInterval);
            setLaserStatesInterval = undefined;
        }
        removeObjects(objectives,walls,traps,laserFences);
        phaseGeneration[sceneProperties.phase]();
        editor.setState(editState);
        consoleElement.innerText = null;
        document.getElementById('winMessage').classList.add('invisible');
        document.getElementById('advanceBtn').classList.add('invisible');
        execBtn.disabled = false;
        resetBtn.disabled = false;
    }
    else
    {
        sceneProperties.phase = sceneProperties.phase > phaseGeneration.length ? phaseGeneration.length : sceneProperties.phase;
        window.location.href = "../";
    }
});

resizeCanvasToDisplaySize(renderer,camera);
phaseGeneration[sceneProperties.phase]();
animate();