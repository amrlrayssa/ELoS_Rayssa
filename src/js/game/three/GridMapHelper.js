import * as THREE from "three";
import { degreeToRadians } from "./util";

var aux = new URL('../../../assets/textures/ground.jpg',import.meta.url).toString();
var textureGround = new THREE.TextureLoader().load(aux);

var aux2 = new URL('../../../assets/textures/ground2.jpg',import.meta.url).toString();
var textureGround2 = new THREE.TextureLoader().load(aux2);

var aux3 = new URL('../../../assets/textures/ground3.jpg',import.meta.url).toString();
var textureGround3 = new THREE.TextureLoader().load(aux3);

var aux4 = new URL('../../../assets/textures/ground4.jpg',import.meta.url).toString();
var textureGround4 = new THREE.TextureLoader().load(aux4);

var aux5 = new URL('../../../assets/textures/ground5.jpg',import.meta.url).toString();
var textureGround5 = new THREE.TextureLoader().load(aux5);

var aux6 = new URL('../../../assets/textures/ground6.jpg',import.meta.url).toString();
var textureGround6 = new THREE.TextureLoader().load(aux6);

var aux7 = new URL('../../../assets/textures/ground7.jpg',import.meta.url).toString();
var textureGround7 = new THREE.TextureLoader().load(aux7);

export default class GridMapHelper 
{
    constructor(divisions = 10, divisionsColor = "rgb(255,255,255)")
    {
        this.divisions = divisions;
        this.divisionsColor = divisionsColor;
        this.initialX = (divisions - 1) * -1;
        this.initialZ = (divisions - 1) * -1;
        this.endX = divisions - 1;
        this.endZ = divisions - 1;
        this.obstacles = [];
        this.traps = [];
        this.fires = [];
        this.lasers = [];
        this.crystals = [];
    }

    createGridPlane()
    {
        const planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions);

        const grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor);
        grid.rotateX(degreeToRadians(90));
        grid.translateY(0.02);

        const planeMaterial = new THREE.MeshLambertMaterial({map: textureGround, side: THREE.DoubleSide});

        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.add(grid);
        plane.receiveShadow = true;
        plane.rotateX(degreeToRadians(-90));

        return plane;
    }

    createGridPlane2()
    {
        const planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions);

        const grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor);
        grid.rotateX(degreeToRadians(90));
        grid.translateY(0.02);

        const planeMaterial = new THREE.MeshLambertMaterial({map: textureGround2, side: THREE.DoubleSide});

        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.add(grid);
        plane.receiveShadow = true;
        plane.rotateX(degreeToRadians(-90));

        return plane;
    }

    createGridPlane3()
    {
        const planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions);

        const grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor);
        grid.rotateX(degreeToRadians(90));
        grid.translateY(0.02);

        const planeMaterial = new THREE.MeshLambertMaterial({map: textureGround3, side: THREE.DoubleSide});

        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.add(grid);
        plane.receiveShadow = true;
        plane.rotateX(degreeToRadians(-90));

        return plane;
    }

    createGridPlane4()
    {
        const planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions);

        const grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor);
        grid.rotateX(degreeToRadians(90));
        grid.translateY(0.02);

        const planeMaterial = new THREE.MeshLambertMaterial({map: textureGround4, side: THREE.DoubleSide});

        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.add(grid);
        plane.receiveShadow = true;
        plane.rotateX(degreeToRadians(-90));

        return plane;
    }

    createGridPlane5()
    {
        const planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions);

        const grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor);
        grid.rotateX(degreeToRadians(90));
        grid.translateY(0.02);

        const planeMaterial = new THREE.MeshLambertMaterial({map: textureGround5, side: THREE.DoubleSide});

        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.add(grid);
        plane.receiveShadow = true;
        plane.rotateX(degreeToRadians(-90));

        return plane;
    }

    createGridPlane6()
    {
        const planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions);

        const grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor);
        grid.rotateX(degreeToRadians(90));
        grid.translateY(0.02);

        const planeMaterial = new THREE.MeshLambertMaterial({map: textureGround6, side: THREE.DoubleSide});

        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.add(grid);
        plane.receiveShadow = true;
        plane.rotateX(degreeToRadians(-90));

        return plane;
    }

    createGridPlane7()
    {
        const planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions);

        const grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor);
        grid.rotateX(degreeToRadians(90));
        grid.translateY(0.02);

        const planeMaterial = new THREE.MeshLambertMaterial({map: textureGround7, side: THREE.DoubleSide});

        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.add(grid);
        plane.receiveShadow = true;
        plane.rotateX(degreeToRadians(-90));

        return plane;
    }

    getMultiplier()
    {
        return 2;
    }

    getGlobalPositionFromCoord(initialAxis,coord)
    {
        const pos = initialAxis + this.getMultiplier() * coord;
        return pos;
    }

    getGlobalXPositionFromCoord(xcoord)
    {
        return this.getGlobalPositionFromCoord(this.initialX,xcoord);
    }

    getGlobalZPositionFromCoord(zcoord)
    {
        return this.getGlobalPositionFromCoord(this.initialZ,zcoord);
    }

    getCoordFromGlobalPosition(initialAxis,axis,mode = 0)
    {
        let coord;
        if(mode == 1)
        {
            coord = Math.floor((Math.floor(axis) - initialAxis) / this.getMultiplier());
        }
        else if(mode == 2)
        {
            coord = Math.ceil((Math.ceil(axis) - initialAxis) / this.getMultiplier());
        }
        else
        {
            coord = Math.round((Math.round(axis) - initialAxis) / this.getMultiplier());
        }

        return coord;
    }

    getXCoordFromGlobalPosition(x)
    {
        return this.getCoordFromGlobalPosition(this.initialX,x);
    }

    getZCoordFromGlobalPosition(z)
    {
        return this.getCoordFromGlobalPosition(this.initialZ,z);   
    }

    borderOfMap(initialAxis,endAxis,axis,mode)
    {
        if(this.getCoordFromGlobalPosition(initialAxis,axis,mode) >= 0 && this.getCoordFromGlobalPosition(initialAxis,axis,mode) <= this.getCoordFromGlobalPosition(initialAxis,endAxis,mode))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    borderMapCollision(position,newPosition)
    {
        const modeX = position.x >= newPosition.x ? 1 : 2;
        const modeZ = position.z >= newPosition.z ? 1 : 2;

        if(this.borderOfMap(this.initialX,this.endX,position.x,modeX) || this.borderOfMap(this.initialZ,this.endZ,position.z,modeZ))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    addObstacle(minX,maxX,minZ,maxZ)
    {
        this.obstacles.push(
            {
                minX: minX,
                maxX: maxX,
                minZ: minZ,
                maxZ: maxZ,
                active: true
            }
        );
    }

    clearObstacles()
    {
        this.obstacles = [];
    }

    obstacleCollision(position,newPosition,obstacle)
    {
        const positionXCoord = this.getXCoordFromGlobalPosition(position.x)
        const positionZCoord = this.getZCoordFromGlobalPosition(position.z)
        const newPositionXCoord = this.getXCoordFromGlobalPosition(newPosition.x)
        const newPositionZCoord = this.getZCoordFromGlobalPosition(newPosition.z)

        let nextPosX
        let nextPosZ
        if(positionXCoord < newPositionXCoord)
        {
            nextPosX = positionXCoord + 1
        }
        else if(positionXCoord > newPositionXCoord)
        {
            nextPosX = positionXCoord - 1
        }
        else
        {
            nextPosX = positionXCoord
        }

        if(positionZCoord < newPositionZCoord)
        {
            nextPosZ = positionZCoord + 1
        }
        else if(positionZCoord > newPositionZCoord)
        {
            nextPosZ = positionZCoord - 1
        }
        else
        {
            nextPosZ = positionZCoord
        }

        if((nextPosX < obstacle.minX || nextPosZ < obstacle.minZ) || (nextPosX > obstacle.maxX || nextPosZ > obstacle.maxZ))
        {
            return false
        }
        else
        {
            return true
        }
    }

    collisionTests(position,newPosition)
    {
        let activeObstacles = this.obstacles.filter(obstacle => obstacle.active == true);
        if(!this.borderMapCollision(position,newPosition))
        {
            for(let i = 0;i < activeObstacles.length;i++)
            {
                if(this.obstacleCollision(position,newPosition,activeObstacles[i]))
                {
                    const newPositionUpdate = new THREE.Vector3(this.getGlobalXPositionFromCoord(this.getXCoordFromGlobalPosition(position.x)),newPosition.y,this.getGlobalZPositionFromCoord(this.getZCoordFromGlobalPosition(position.z)));
                    return newPositionUpdate;
                }
                else
                {
                    continue;
                }
            }
            
            return newPosition;
        }
        else
        {
            const newPositionUpdate = new THREE.Vector3(this.getGlobalXPositionFromCoord(this.getXCoordFromGlobalPosition(position.x)),newPosition.y,this.getGlobalZPositionFromCoord(this.getZCoordFromGlobalPosition(position.z)));
            return newPositionUpdate;   
        }
    }

    addTrap(x,z,obj)
    {
        this.traps.push({
            x:x,
            z:z,
            obj:obj
        });
    }
    
    clearTraps()
    {
        this.traps = [];
    }

    trapCollision(position)
    {
        for(let i = 0;i < this.traps.length;i++)
        {
            if(this.getXCoordFromGlobalPosition(position.x) == this.traps[i].x && this.getZCoordFromGlobalPosition(position.z) == this.traps[i].z)
            {
                let requestID = null
                let alpha2 = 0.1
                let thisTrap = this.traps[i].obj
                activateTrap()
                function activateTrap(){
                    if(thisTrap.spikes[4].position.y.toFixed(1) < 1)
                    {
                        alpha2 += 0.05;
                        thisTrap.spikes.forEach(spike => spike.position.lerp(new THREE.Vector3(spike.position.x, 1, spike.position.z), alpha2))
                        requestID = requestAnimationFrame(activateTrap);
                    }
                    else
                    {
                        cancelAnimationFrame(requestID);
                        alpha2 = 0.1
                    }
                }
                return new THREE.Vector3(this.getGlobalXPositionFromCoord(this.traps[i].x),position.y,this.getGlobalZPositionFromCoord(this.traps[i].z));
            }
            else
            {
                continue
            }
        }

        return false
    }

    addFire(x,z)
    {
        const fire = {
            id: this.fires.length,
            x:x,
            z:z,
            active: true
        };

        this.fires.push(fire);
    }

    fireCollision(position)
    {
        const activeFires = this.fires.filter(fire => fire.active == true);

        for(let i = 0;i < activeFires.length;i++)
        {
            if(this.getXCoordFromGlobalPosition(position.x) == activeFires[i].x && this.getZCoordFromGlobalPosition(position.z) == activeFires[i].z)
            {
                return new THREE.Vector3(this.getGlobalXPositionFromCoord(activeFires[i].x),position.y,this.getGlobalZPositionFromCoord(activeFires[i].z));
            }
            else
            {
                continue;
            }
        }

        return false;
    }

    detectFire(position,state = true)
    {
        const fireFiltered = this.fires.filter(fire => fire.active == state);

        for(let i = 0;i < fireFiltered.length;i++)
            {
                if(this.getXCoordFromGlobalPosition(position.x) == fireFiltered[i].x && this.getZCoordFromGlobalPosition(position.z) == fireFiltered[i].z)
                {
                    return fireFiltered[i].id;
                }
                else
                {
                    continue;
                }
            }

            return null;
    }

    restartFires()
    {
        for(let i = 0;i < this.fires.length;i++)
        {
            this.fires[i].active = true;
        }
    }

    clearFires()
    {
        this.fires = [];
    }

    addLaser(x,z, laserFence)
    {
        laserFence.index = this.lasers.length
        laserFence.x = x;
        laserFence.z = z;
        laserFence.active = true;
        laserFence.state = laserFence.state;

        this.lasers.push(laserFence);
    }

    laserCollision(position)
    {
        const laserFiltered = this.lasers.filter(laser => laser.active == true);
        
        for(let i = 0;i < laserFiltered.length;i++)
        {
            if(this.getXCoordFromGlobalPosition(position.x) == laserFiltered[i].x && this.getZCoordFromGlobalPosition(position.z) == laserFiltered[i].z)
            {
                return true;
            }
            else
            {
                continue;
            }
        }

        return false;
    }

    detectLaser(position, state)
    {
        const laserFiltered = this.lasers.filter(laser => laser.state == state && laser.active == true);

        for(let i = 0;i < laserFiltered.length;i++)
        {
            if(this.getXCoordFromGlobalPosition(position.x) == laserFiltered[i].x && this.getZCoordFromGlobalPosition(position.z) == laserFiltered[i].z)
            {
                return laserFiltered[i].index;
            }
            else
            {
                continue;
            }
        }

        return null;
    }

    restartLasers()
    {
        for(let i = 0;i < this.lasers.length;i++)
        {
            this.lasers[i].active = true;
        }
    }

    clearLasers()
    {
        this.lasers = [];
    }
}