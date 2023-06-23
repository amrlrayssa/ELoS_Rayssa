function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiredf3e"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiredf3e"] = parcelRequire;
}
parcelRequire.register("1mCsO", function(module, exports) {

var $49pUz = parcelRequire("49pUz");

var $jgsti = parcelRequire("jgsti");

var $6mhZf = parcelRequire("6mhZf");

var $2Y9dv = parcelRequire("2Y9dv");

var $8vOEa = parcelRequire("8vOEa");
const sceneProperties = {
    cancelExecution: false,
    phase: 0
};
const editor = (0, $jgsti.generateDefaultEditor)(document.getElementById("editorArea"));
const consoleElement = document.getElementById("consoleArea");
const { renderer , scene , camera , controls  } = (0, $6mhZf.generateDefaultSceneObjects)(document.getElementById("phaseView"));
const gridMapHelper = new (0, $2Y9dv.default)();
const plane = gridMapHelper.createGridPlane();
const actor = (0, $6mhZf.loadDefaultActor)();
let objectives;
let walls;
let openDoors;
let doors;
scene.add(plane);
scene.add(actor);
async function andarFrente(amount) {
    let correctedAmount = amount > 10 ? 10 : amount;
    await (0, $6mhZf.translateActor)(actor, correctedAmount, gridMapHelper, sceneProperties, consoleElement);
}
async function andarTras(amount) {
    let correctedAmount = amount > 10 ? 10 : amount;
    await (0, $6mhZf.translateActor)(actor, -correctedAmount, gridMapHelper, sceneProperties, consoleElement);
}
async function girarEsquerda() {
    await (0, $6mhZf.rotateActor)(actor, 90, sceneProperties, 1);
}
async function girarDireita() {
    await (0, $6mhZf.rotateActor)(actor, 90, sceneProperties, -1);
}
async function darMeiaVolta() {
    await (0, $6mhZf.rotateActor)(actor, 180, sceneProperties, 1);
}
let girarManivela;
let portaFechada;
let coletarCristal;
let resetLevel;
let winCondition;
const phaseGeneration = [];
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 4 - Fase de Testes";
    document.getElementById("phaseObjective").innerText = "Abra a porta, fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(9, 9, 5, 5);
    scene.add(objectives[0]);
    const doorCrank = new $49pUz.Mesh(new $49pUz.BoxGeometry(0.5, 0.5, 1), new $49pUz.MeshLambertMaterial({
        color: "rgb(255,0,255)"
    }));
    doorCrank.position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(4.6));
    const doorInteractionReference = new $49pUz.Object3D();
    doorInteractionReference.position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    doorCrank.add(doorInteractionReference);
    scene.add(doorCrank);
    openDoors = [];
    doors = [];
    doors.push(new $49pUz.Mesh(new $49pUz.BoxGeometry(2, 2, 2), new $49pUz.MeshLambertMaterial({
        color: "rgb(255,0,255)"
    })));
    doors[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(5, 5, 5, 5);
    scene.add(doors[0]);
    openDoors.push(false);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(18, 2, 2);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    scene.add(walls[0]);
    scene.add(walls[1]);
    gridMapHelper.addObstacle(1, 9, 4, 4);
    gridMapHelper.addObstacle(1, 9, 6, 6);
    portaFechada = ()=>{
        if (sceneProperties.cancelExecution) return false;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), doorInteractionReference, gridMapHelper)) return !openDoors[0];
        else {
            consoleElement.innerText += "\xc9 preciso estar de frente de uma manivela para usar este comando.\n";
            return false;
        }
    };
    girarManivela = ()=>{
        return new Promise((resolve)=>{
            if (sceneProperties.cancelExecution) resolve();
            if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), doorInteractionReference, gridMapHelper)) {
                function translateDoor() {
                    doors[0].translateY(0.1);
                    resolve();
                }
                if (doors[0].position.y >= 3) {
                    openDoors[0] = true;
                    gridMapHelper.obstacles[1].active = false;
                    resolve();
                } else requestAnimationFrame(translateDoor);
            } else {
                consoleElement.innerText += "\xc9 preciso estar de frente de uma manivela para usar este comando.\n";
                resolve();
            }
        });
    };
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        doors[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
        gridMapHelper.obstacles[0].active = true;
        gridMapHelper.obstacles[1].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
});
function removeObjects(crystals, walls) {
    if (crystals != undefined) for(let i = 0; i < crystals.length; i++)scene.remove(crystals[i]);
    if (walls != undefined) {
        for(let i1 = 0; i1 < walls.length; i1++)scene.remove(walls[i1]);
        gridMapHelper.clearObstacles();
    }
    crystals = undefined;
    walls = undefined;
    traps = undefined;
    lasers = undefined;
}
function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}
window.addEventListener("resize", ()=>{
    (0, $6mhZf.resizeCanvasToDisplaySize)(renderer, camera);
});
const execBtn = document.getElementById("execBtn");
execBtn.addEventListener("click", async function() {
    const codeParsed = (0, $8vOEa.default)(editor.state.doc.toString());
    console.log(codeParsed);
    sceneProperties.cancelExecution = false;
    if (codeParsed != null) {
        resetLevel();
        this.disabled = true;
        await eval(codeParsed);
        if (winCondition()) {
            (0, $jgsti.readOnlyState).doc = editor.state.doc;
            editor.setState((0, $jgsti.readOnlyState));
            document.getElementById("winMessage").classList.remove("invisible");
            document.getElementById("advanceBtn").classList.remove("invisible");
            document.getElementById("resetBtn").disabled = true;
        } else {
            sceneProperties.executing = false;
            this.disabled = false;
        }
    }
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", ()=>{
    sceneProperties.cancelExecution = true;
    resetLevel();
});
const advanceBtn = document.getElementById("advanceBtn");
advanceBtn.addEventListener("click", (e)=>{
    sceneProperties.phase++;
    if (sceneProperties.phase < phaseGeneration.length) {
        removeObjects(objectives, walls);
        phaseGeneration[sceneProperties.phase]();
        editor.setState((0, $jgsti.editState));
        consoleElement.innerText = null;
        document.getElementById("winMessage").classList.add("invisible");
        document.getElementById("advanceBtn").classList.add("invisible");
        execBtn.disabled = false;
        resetBtn.disabled = false;
    } else {
        sceneProperties.phase = sceneProperties.phase > phaseGeneration.length ? phaseGeneration.length : sceneProperties.phase;
        window.location.href = "../";
    }
});
(0, $6mhZf.resizeCanvasToDisplaySize)(renderer, camera);
phaseGeneration[sceneProperties.phase]();
animate();

});
parcelRequire.register("8vOEa", function(module, exports) {

$parcel$export(module.exports, "default", () => $63288163d0e35ed8$export$2e2bcd8739ae039);
const $63288163d0e35ed8$var$functionFilter = [
    {
        filter: new RegExp("^andarFrente(\\s+)?\\((\\s+)?(0|[1-9][0-9]*)(\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^andarTras(\\s+)?\\((\\s+)?(0|[1-9][0-9]*)(\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^girarEsquerda(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^girarDireita(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^darMeiaVolta(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^coletarCristal(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "normal"
    },
    {
        filter: new RegExp("^desativarLaserAzul(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "mustCondition"
    },
    {
        filter: new RegExp("^desativarLaserVermelho(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "mustCondition"
    },
    {
        filter: new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$"),
        type: "conditional"
    },
    {
        filter: new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$"),
        type: "conditional&&blockValidation"
    },
    {
        filter: new RegExp("^sen\xe3o$"),
        type: "elseValidation"
    },
    {
        filter: new RegExp("^sen\xe3o(\\s+)?{$"),
        type: "elseValidation&&blockValidation"
    },
    {
        filter: new RegExp("^}$"),
        type: "closeBlockValidation"
    },
    {
        filter: new RegExp("^{$"),
        type: "blockValidation"
    },
    {
        filter: new RegExp("^enquanto(\\s+)?\\((\\s+)?.+\\)$"),
        type: "loop"
    },
    {
        filter: new RegExp("^enquanto(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$"),
        type: "loop&&blockValidation"
    },
    {
        filter: new RegExp("^girarManivela(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    }
];
const $63288163d0e35ed8$var$conditionalParameters = [
    new RegExp("true"),
    new RegExp("false"),
    new RegExp("^laserAzulAtivo(\\s+)?\\((\\s+)?\\)(\\s+)?$"),
    new RegExp("^laserVermelhoAtivo(\\s+)?\\((\\s+)?\\)(\\s+)?$"),
    new RegExp("^portaFechada(\\s+)?\\((\\s+)?\\)(\\s+)?$")
];
function $63288163d0e35ed8$var$ifValidation(line) {
    let trimLine = line.trim();
    let condition = line.substring(trimLine.indexOf("(") + 1, trimLine.lastIndexOf(")"));
    for(let i = 0; i < $63288163d0e35ed8$var$conditionalParameters.length; i++){
        if ($63288163d0e35ed8$var$conditionalParameters[i].test(condition.trim())) return true;
        else continue;
    }
    return false;
}
function $63288163d0e35ed8$var$blockValidation(lines, index) {
    let valid = false;
    let ignoreClosure = 0;
    for(let i = index + 1; i < lines.length; i++){
        if (lines[i].includes("}")) {
            if (ignoreClosure == 0) {
                valid = true;
                break;
            } else ignoreClosure--;
        } else if (lines[i].includes("{")) ignoreClosure++;
        else continue;
    }
    return valid;
}
function $63288163d0e35ed8$var$closeBlockValidation(lines, index) {
    let valid = false;
    for(let i = index - 1; i >= 0; i--){
        if (lines[i].includes("{")) {
            valid = true;
            break;
        } else continue;
    }
    return valid;
}
function $63288163d0e35ed8$var$mustConditionValidation(lines, index) {
    let valid = false;
    let completeCommonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?(\\s+)?$");
    let commonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$");
    let completeblockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{[^}]*?$");
    let blockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$");
    let commonElse = new RegExp("^sen\xe3o$");
    let blockElse = new RegExp("^sen\xe3o(\\s+)?{$");
    let completeCommonElse = new RegExp("^sen\xe3o(\\s+)?.+(\\s+)?$");
    let completeBlockElse = new RegExp("^sen\xe3o(\\s+)?{[^]*?$");
    let start = null;
    for(let i = index - 1; i >= 0; i--){
        if (commonIf.test(lines[i].trim()) || blockIf.test(lines[i].trim()) || commonElse.test(lines[i].trim()) || blockElse.test(lines[i].trim())) {
            start = i;
            break;
        } else continue;
    }
    if (start != null) {
        let codeTillFunction = "";
        for(let i1 = start; i1 < index; i1++)codeTillFunction += `${lines[i1].trim()}\n`;
        if (completeCommonIf.test(codeTillFunction.trim()) || completeblockIf.test(codeTillFunction.trim()) || completeCommonElse.test(codeTillFunction.trim()) || completeBlockElse.test(codeTillFunction.trim())) {
            valid = true;
            return valid;
        } else return valid;
    } else return valid;
}
function $63288163d0e35ed8$var$elseValidation(lines, index) {
    let valid = false;
    let completeCommonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?.+(\\s+)?$");
    let commonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$");
    let completeblockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{[^]*?}$");
    let blockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$");
    let start = null;
    for(let i = index - 1; i >= 0; i--){
        if (commonIf.test(lines[i].trim()) || blockIf.test(lines[i].trim())) {
            start = i;
            break;
        } else continue;
    }
    if (start != null) {
        let codeTillElse = "";
        for(let i1 = start; i1 < index; i1++)codeTillElse += `${lines[i1].trim()}\n`;
        if (completeCommonIf.test(codeTillElse.trim()) || completeblockIf.test(codeTillElse.trim())) {
            valid = true;
            return valid;
        } else return valid;
    } else return valid;
}
function $63288163d0e35ed8$var$predictFunction(lines, index) {
    const directionFilter = [
        new RegExp("^andarFrente(\\s+)?\\((\\s+)?\\d+(\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^andarTras(\\s+)?\\((\\s+)?\\d+(\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^girarEsquerda(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^girarDireita(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^darMeiaVolta(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$")
    ];
    let position = [
        0,
        5
    ];
    let axis = 0;
    let value = "+";
    let direction = 0;
    function calcDirection(direction) {
        const dirGuide = [
            {
                axis: 0,
                value: "+"
            },
            {
                axis: 1,
                value: "+"
            },
            {
                axis: 0,
                value: "-"
            },
            {
                axis: 1,
                value: "-"
            }
        ];
        return dirGuide[direction];
    }
    function correctRotation(index) {
        let i = index;
        if (i > 3) return 0;
        else if (i < 0) return 3;
        else return i;
    }
    for(let i = 0; i < index; i++){
        if (directionFilter[0].test(lines[i])) {
            let amount = parseInt(lines[i].substring(lines[i].indexOf("(") + 1, lines[i].indexOf(")")));
            if (value == "+") position[axis] += amount;
            else position[axis] -= amount;
        } else if (directionFilter[1].test(lines[i])) {
            let amount1 = parseInt(lines[i].substring(lines[i].indexOf("(") + 1, lines[i].indexOf(")")));
            if (value == "-") position[axis] += amount1;
            else position[axis] -= amount1;
        } else if (directionFilter[2].test(lines[i])) {
            direction--;
            direction = correctRotation(direction);
            const obj = calcDirection(direction);
            axis = obj.axis;
            value = obj.value;
        } else if (directionFilter[3].test(lines[i])) {
            direction++;
            direction = correctRotation(direction);
            const obj1 = calcDirection(direction);
            axis = obj1.axis;
            value = obj1.value;
        } else if (directionFilter[4].test(lines[i])) {
            direction--;
            direction = correctRotation(direction);
            direction--;
            direction = correctRotation(direction);
            const obj2 = calcDirection(direction);
            axis = obj2.axis;
            value = obj2.value;
        } else continue;
    }
    if (value == "+") position[axis]++;
    else position[axis]--;
    return position;
}
function $63288163d0e35ed8$var$printError(text, line) {
    const consoleElement = document.getElementById("consoleArea");
    consoleElement.innerText += `Código inválido: ${text} linha: ${line}\n`;
}
function $63288163d0e35ed8$export$2e2bcd8739ae039(code, limit = 0) {
    let codeParsed = "async function runCode(){\n";
    let badLuckFunctions = "\n";
    let lines = code.split("\n");
    let valid = true;
    let totalCommands = 0;
    for(let i = 0; i < lines.length; i++){
        let validLine = false;
        let lineType;
        if (lines[i].trim() != "") {
            for(let j = 0; j < $63288163d0e35ed8$var$functionFilter.length; j++){
                validLine = $63288163d0e35ed8$var$functionFilter[j].filter.test(lines[i].trim());
                if (validLine) {
                    lineType = $63288163d0e35ed8$var$functionFilter[j].type;
                    break;
                } else continue;
            }
            if (validLine) {
                if (lineType === "sequential") {
                    let lineParsed = `await ${lines[i].trim()}\n`;
                    codeParsed += lineParsed;
                    totalCommands++;
                } else if (lineType === "conditional&&blockValidation") {
                    let validConditional = false;
                    if ($63288163d0e35ed8$var$blockValidation(lines, i)) {
                        if ($63288163d0e35ed8$var$ifValidation(lines[i])) validConditional = true;
                        else $63288163d0e35ed8$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                    } else $63288163d0e35ed8$var$printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                    if (validConditional) {
                        let line = lines[i].trim();
                        let lineParsed1 = `if${line.substring(line.indexOf("("))}\n`;
                        codeParsed += lineParsed1;
                        totalCommands++;
                    } else {
                        valid = false;
                        break;
                    }
                } else if (lineType === "conditional") {
                    if ($63288163d0e35ed8$var$ifValidation(lines[i])) {
                        let line1 = lines[i].trim();
                        let lineParsed2 = `if${line1.substring(line1.indexOf("("))}\n`;
                        codeParsed += lineParsed2;
                        totalCommands++;
                    } else {
                        $63288163d0e35ed8$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "elseValidation") {
                    if ($63288163d0e35ed8$var$elseValidation(lines, i)) {
                        let lineParsed3 = "else\n";
                        codeParsed += lineParsed3;
                        totalCommands++;
                    } else {
                        $63288163d0e35ed8$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "elseValidation&&blockValidation") {
                    let validElse = false;
                    if ($63288163d0e35ed8$var$blockValidation(lines, i)) {
                        if ($63288163d0e35ed8$var$elseValidation(lines, i)) validElse = true;
                        else $63288163d0e35ed8$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                    } else $63288163d0e35ed8$var$printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                    if (validElse) {
                        let lineParsed4 = "else{\n";
                        codeParsed += lineParsed4;
                        totalCommands++;
                    } else {
                        valid = false;
                        break;
                    }
                } else if (lineType === "blockValidation") {
                    if ($63288163d0e35ed8$var$blockValidation(lines, i)) {
                        let lineParsed5 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed5;
                        totalCommands++;
                    } else {
                        $63288163d0e35ed8$var$printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "closeBlockValidation") {
                    if ($63288163d0e35ed8$var$closeBlockValidation(lines, i)) {
                        let lineParsed6 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed6;
                        totalCommands++;
                    } else {
                        $63288163d0e35ed8$var$printError(`${lines[i]} (Bloco é fechado mas nunca é aberto)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "mustCondition") {
                    if ($63288163d0e35ed8$var$mustConditionValidation(lines, i)) {
                        let lineParsed7 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed7;
                        totalCommands++;
                    } else {
                        let state = $63288163d0e35ed8$var$functionFilter[6].filter.test(lines[i].trim()) ? "blue" : "red";
                        let pos = $63288163d0e35ed8$var$predictFunction(lines, i);
                        badLuckFunctions += `badLuck([${pos[0]},${pos[1]}],'${state}')\n`;
                        let lineParsed8 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed8;
                        totalCommands++;
                    }
                } else if (lineType === "loop") {
                    if ($63288163d0e35ed8$var$ifValidation(lines[i])) {
                        let line2 = lines[i].trim();
                        let lineParsed9 = `while${line2.substring(line2.indexOf("("))}\n`;
                        codeParsed += lineParsed9;
                        totalCommands++;
                    } else {
                        $63288163d0e35ed8$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "loop&&blockValidation") {
                    let validConditional1 = false;
                    if ($63288163d0e35ed8$var$blockValidation(lines, i)) {
                        if ($63288163d0e35ed8$var$ifValidation(lines[i])) validConditional1 = true;
                        else $63288163d0e35ed8$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                    } else $63288163d0e35ed8$var$printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                    if (validConditional1) {
                        let line3 = lines[i].trim();
                        let lineParsed10 = `while${line3.substring(line3.indexOf("("))}\n`;
                        codeParsed += lineParsed10;
                        totalCommands++;
                    } else {
                        valid = false;
                        break;
                    }
                } else {
                    let lineParsed11 = `${lines[i].trim()}\n`;
                    codeParsed += lineParsed11;
                    totalCommands++;
                }
            } else {
                $63288163d0e35ed8$var$printError(lines[i], i + 1);
                valid = false;
                break;
            }
            if (limit > 0 && totalCommands > limit) {
                document.getElementById("consoleArea").innerText += `Aviso: O código tem mais linhas do que o robô pode processar. Tente rescrever seu código em ${limit} linhas ou menos.\n`;
                valid = false;
                break;
            }
        } else continue;
    }
    if (valid) {
        codeParsed += `}${badLuckFunctions}runCode()\n`;
        return codeParsed;
    } else return null;
}

});



parcelRequire("1mCsO");

