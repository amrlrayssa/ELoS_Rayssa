import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'

export function degreeToRadians(angle)
{
    let radianAngle = angle * (Math.PI/180) 
    return radianAngle
}

export function resizeCanvasToDisplaySize(renderer,camera)
{
    let canvas = renderer.domElement;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    if(canvas.width !== width ||canvas.height !== height) 
    {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
}

export var sceneProperties = {
    cancelExecution: false,
    phaseTimer: new THREE.Clock(false)
}

export function leanMovement(object,direction = true,positionMultiplier = 1)
{
    let objCopy = object.clone()
    if(direction)
    {
        objCopy.rotation.set(degreeToRadians(15*positionMultiplier),0,0)
    }
    else
    {
        objCopy.rotation.set(0,0,0)
    }
    let newPosition = new THREE.Quaternion()
    newPosition.setFromEuler(objCopy.rotation)
    console.log(objCopy.rotation)
    let requestID
    function rotate()
    {
        if(!object.quaternion.equals(newPosition) && !sceneProperties.cancelExecution)
        {
            object.quaternion.slerp(newPosition,0.2)
            requestID = requestAnimationFrame(rotate)
        }
        else
        {
            cancelAnimationFrame(requestID)
            resolve()
        }
    }
    requestID = requestAnimationFrame(rotate)   
}

export function translateActorFoward(actor,amount,gridMapHelper,sceneProperties)
{
    let objectCopy = actor.clone()
    objectCopy.translateZ(gridMapHelper.getMultiplier()*amount)
    let newPosition = objectCopy.position
    let requestID
    let alpha = 0.01
    leanMovement(actor.getObjectByName('eve'))
    return new Promise(function(resolve){
        function translateActor()
        {
            let collision = gridMapHelper.collisionTests(actor.position,newPosition)
            let trap = gridMapHelper.trapCollision(actor.position)
            if((actor.position.x.toFixed(2) != newPosition.x.toFixed(2)||actor.position.z.toFixed(2) != newPosition.z.toFixed(2)) && !sceneProperties.cancelExecution && !collision && !trap)
            {
                actor.position.lerp(newPosition,alpha)
                alpha += 0.001
                requestID = requestAnimationFrame(translateActor)
            }
            else
            {
                if(collision && !sceneProperties.cancelExecution)
                {
                    printOnConsole("Não há como prosseguir por esse caminho.")
                    sceneProperties.cancelExecution = true
                }
                else if(trap && !sceneProperties.cancelExecution)
                {
                    printOnConsole("Você caiu na armadilha.")
                    sceneProperties.cancelExecution = true   
                }
                leanMovement(actor.getObjectByName('eve'),false)
                cancelAnimationFrame(requestID)
                resolve()
            }
        }
        
        requestID = requestAnimationFrame(translateActor)
    })
}

export function translateActorBackward(actor,amount,gridMapHelper,sceneProperties)
{
    let objectCopy = actor.clone()
    objectCopy.translateZ(-(gridMapHelper.getMultiplier()*amount))
    let newPosition = objectCopy.position
    let requestID
    let alpha = 0.01
    leanMovement(actor.getObjectByName('eve'),true,-1)
    return new Promise(function(resolve){
        function translateActor()
        {
            let collision = gridMapHelper.collisionTests(actor.position,newPosition)
            let trap = gridMapHelper.trapCollision(actor.position)
            if((actor.position.x.toFixed(2) != newPosition.x.toFixed(2)||actor.position.z.toFixed(2) != newPosition.z.toFixed(2)) && !sceneProperties.cancelExecution && !collision && !trap)
            {
                actor.position.lerp(newPosition,alpha)
                alpha += 0.001
                requestID = requestAnimationFrame(translateActor)
            }
            else
            {
                if(collision && !sceneProperties.cancelExecution)
                {
                    printOnConsole("Não há como prosseguir por esse caminho.")
                    sceneProperties.cancelExecution = true
                }
                else if(trap && !sceneProperties.cancelExecution)
                {
                    printOnConsole("Você caiu na armadilha.")
                    sceneProperties.cancelExecution = true   
                }
                leanMovement(actor.getObjectByName('eve'),false)
                cancelAnimationFrame(requestID)
                resolve()
            }
        }
        
        requestID = requestAnimationFrame(translateActor)
    })
}

export function rotateActorRight(actor,sceneProperties)
{
    let objectCopy = actor.clone()
    objectCopy.rotateY(degreeToRadians(-90))
    let newPosition = new THREE.Quaternion()
    newPosition.setFromEuler(objectCopy.rotation)
    let requestID
    return new Promise(function(resolve){
        function rotateActor()
        {
            if(!actor.quaternion.equals(newPosition) && !sceneProperties.cancelExecution)
            {
                actor.quaternion.rotateTowards(newPosition,degreeToRadians(1))
                requestID = requestAnimationFrame(rotateActor)
            }
            else
            {
                cancelAnimationFrame(requestID)
                resolve()
            }
        }

        requestID = requestAnimationFrame(rotateActor)
    })
}

export function rotateActorLeft(actor,sceneProperties)
{
    let objectCopy = actor.clone()
    objectCopy.rotateY(degreeToRadians(90))
    let newPosition = new THREE.Quaternion()
    newPosition.setFromEuler(objectCopy.rotation.clone())
    let requestID
    return new Promise(function(resolve){
        function rotateActor()
        {
            if(!actor.quaternion.equals(newPosition) && !sceneProperties.cancelExecution)
            {
                actor.quaternion.rotateTowards(newPosition,degreeToRadians(1))
                requestID = requestAnimationFrame(rotateActor)
            }
            else
            {
                cancelAnimationFrame(requestID)
                resolve()
            }
        }

        requestID = requestAnimationFrame(rotateActor)
    })
}

export function printOnConsole(content)
{
    let consoleToPrint = document.getElementById("console-printing")
    consoleToPrint.innerHTML += `${content}<br>`
}

export function getMaxSize(object)
{
    let maxSize

    let box = new THREE.Box3().setFromObject(object)
    let min = box.min
    let max = box.max

    let size = new THREE.Box3()
    size.x = max.x - min.x
    size.y = max.y - min.y
    size.z = max.z - min.z

    if(size.x >= size.y && size.x >= size.z)
    {
        maxSize = size.x
    }
    else
    {
        if(size.y >= size.z)
        {
            maxSize = size.y
        }
        else
        {
            maxSize = size.z
        }
    }
    
    return maxSize
}

export function normalizeAndRescale(object,newScale)
{
    let scale = getMaxSize(object)
    object.scale.set(newScale * 1.0/scale, newScale * 1.0/scale, newScale * 1.0/scale)
}

export function loadGLBFile(objectToAdd,path,modelName,scale)
{
    let loader = new GLTFLoader()
    loader.load(path,function(gltf){
        let obj = gltf.scene
        obj.name = modelName
        obj.visible = true
        obj.traverse(function(child){
            if(child)
            {
                child.castShadow = true
            }
        })
        obj.traverse(function(node){
            if(node.material)
            {
                node.material.side = THREE.DoubleSide
            }
        })
        normalizeAndRescale(obj,scale)
        objectToAdd.add(obj)
    })
}

export function loadOBJFile(objectToAdd,path,modelName,texture,scale)
{
    let objLoader = new OBJLoader()
    let textureLoader = new THREE.TextureLoader()
    let tex
    if(texture)
    {
        tex = textureLoader.load(texture)
    }
    objLoader.load(path,function(object){
        object.name = modelName
        object.visible = true
        object.traverse(function(child){
            if(child)
            {
                child.castShadow = true
            }
        })
        object.traverse(function(node){
            if(node.material)
            {
                node.material.side = THREE.DoubleSide
                if(texture)
                {
                    node.material.map = tex
                }
            }
        })
        normalizeAndRescale(object,scale)
        objectToAdd.add(object)
    })
}

export function checkPhaseContinuity(currentPhasePath)
{
    let phasePath = window.sessionStorage.getItem('phasePath')
    if(phasePath != null)
    {
        if(phasePath != currentPhasePath)
        {
            document.location.href = phasePath.substring(phasePath.indexOf('.') + 1)
        }
    }
    else
    {
        document.location.href = '/'   
    }
}

export function getTotalTime(time)
{
    let initialTime = parseFloat(window.sessionStorage.getItem('elapsedTime'))
    let totalTime = initialTime + time

    return totalTime
}

export function setTimeForNextPhase(nextPhasePath,time,finalPhase = false)
{
    if(!finalPhase)
    {
        window.sessionStorage.setItem('phasePath',nextPhasePath)
        window.sessionStorage.setItem('elapsedTime',time)
    }
    else
    {
        window.sessionStorage.clear()
    }
}

export function displayTime(time)
{
    let timerDisplay = document.getElementById("timer")
    let hour = Math.floor(time / 3600)
    let min = Math.floor(time / 60)
    let seg = Math.floor(time % 60)
    timerDisplay.innerText = `Tempo: ${hour < 10 ? '0' + hour : hour}:${(min < 10 ? '0' + min : min)}:${(seg < 10 ? '0' + seg : seg)}`
}