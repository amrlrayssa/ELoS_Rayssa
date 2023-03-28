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
let lasers;
function changeLaserActiveStatus(index,status)
{
    gridMapHelper.lasers[index].active = status;
    lasers[index].visible = status;
}
function changeLaserStateStatus(index,status)
{
    let color = status == 'blue' ? 'rgb(0,0,255)' : 'rgb(255,0,0)';
    gridMapHelper.lasers[index].state = status;
    lasers[index].material.color.set(color);
}
function lasersVisualRestart()
{
    for(let i = 0;i < lasers.length;i++)
    {
        lasers[i].visible = true;
        lasers[i].material.color.set('rgb(0,0,255)');
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

//Phase 1
phaseGeneration.push(
    () => {
        document.getElementById('phaseTitle').innerText = "Nível 3 - Fase 1 de 8";
        document.getElementById('phaseObjective').innerText = "Faça o robô chegar ao cristal, após isso, o colete.";
        
        camera.position.set(0,15,30);

        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0),1.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0,degreeToRadians(90),0);

        objectives = loadDefaultObjectives(1);
        objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9),0.0,gridMapHelper.getGlobalZPositionFromCoord(5));
        scene.add(objectives[0]);

        walls = [];
        const boxGeometry = new THREE.BoxGeometry(18,2,2);
        const boxMaterial = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls.push(new THREE.Mesh(boxGeometry,boxMaterial));
        walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(4));
        walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5),1,gridMapHelper.getGlobalZPositionFromCoord(6));
        scene.add(walls[0]);
        scene.add(walls[1]);
        gridMapHelper.addObstacle(1,9,4,4);
        gridMapHelper.addObstacle(1,9,6,6);

        const laserFenceGeometry = new THREE.BoxGeometry(0.5, 2, 0.3);
        const laserFenceMaterial = new THREE.MeshLambertMaterial({color:"gray"});
        let laserFence1 = new THREE.Mesh(laserFenceGeometry, laserFenceMaterial);
        laserFence1.position.set(2, 1, 7)
        let laserFence2 = new THREE.Mesh(laserFenceGeometry, laserFenceMaterial);
        laserFence2.position.set(2, 1, 8)
        //laserFence.position.set(gridMapHelper.getGlobalXPositionFromCoord(2),1,gridMapHelper.getGlobalZPositionFromCoord(9))
        //gridMapHelper.addLaser(2,9)
        //scene.add(laserFence);
        let laserFenceCSG = CSG.fromMesh(laserFence1)
        laserFenceCSG = laserFenceCSG.union(laserFence2)
        let auxMat = new THREE.Matrix4();
        let obj1 = CSG.toMesh(laserFenceCSG, auxMat)

        lasers = [];
        const laserGeometry = new THREE.BoxGeometry(2,2,2);
        const laserMaterial = new THREE.MeshLambertMaterial({color: 'rgb(0,0,255)'});
        lasers.push(new THREE.Mesh(laserGeometry,laserMaterial));
        lasers[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),0.1,gridMapHelper.getGlobalZPositionFromCoord(5));
        gridMapHelper.addLaser(7,5);
        laserState = 0;
        setLaserStates = () => {
            if(laserState == 0)
            {
                changeLaserStateStatus(0,'blue');
            }
            else
            {
                changeLaserStateStatus(0,'red');
            }
        }
        scene.add(lasers[0]);

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
            if(!objectives[0].visible)
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
        removeObjects(objectives,walls,traps,lasers);
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