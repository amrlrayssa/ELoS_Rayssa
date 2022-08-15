import * as THREE from 'three'
import { degreeToRadians } from './Util'

export class GridMapHelper {
    
    constructor(divisions = 10, divisionsColor = "rgb(0,0,0)", planeColor = "rgb(200,200,200)")
    {
        this.divisions = divisions
        this.divisionsColor = divisionsColor
        this.planeColor = planeColor
        this.initialX = (divisions - 1) * -1
        this.initialZ = (divisions - 1) * -1
        this.endX = divisions - 1
        this.endZ = divisions - 1
        this.obstacles = []
        this.traps = []
    }
    
    createGridPlane()
    {
        let planeGeometry = new THREE.PlaneGeometry(this.getMultiplier()*this.divisions,this.getMultiplier()*this.divisions,this.divisions,this.divisions)

        let grid = new THREE.GridHelper(this.getMultiplier()*this.divisions,this.divisions,this.divisionsColor,this.divisionsColor)
        grid.rotateX(degreeToRadians(90))
        grid.translateY(0.01)

        let planeMaterial = new THREE.MeshLambertMaterial({color: this.planeColor, side: THREE.DoubleSide})

        let plane = new THREE.Mesh(planeGeometry,planeMaterial)
        plane.add(grid)
        plane.receiveShadow = true
        plane.rotateX(degreeToRadians(-90))

        return plane
    }

    getGlobalXPositionFromCoord(xcoord)
    {
        let pos = this.initialX + this.getMultiplier()*xcoord
        return pos
    }

    getGlobalZPositionFromCoord(zcoord)
    {
        let pos = this.initialZ + this.getMultiplier()*zcoord
        return pos
    }

    getXCoordFromGlobalPosition(x,mode = 0)
    {
        let coord
        if(mode == 1)
        {
            coord = Math.floor((Math.floor(x) - this.initialX)/this.getMultiplier())
        }
        else if(mode == 2)
        {
            coord = Math.ceil((Math.ceil(x) - this.initialX)/this.getMultiplier())   
        }
        else
        {
            coord = Math.round((Math.round(x) - this.initialX)/this.getMultiplier())    
        }
        return coord
    }

    getZCoordFromGlobalPosition(z,mode = 0)
    {
        let coord
        if(mode == 1)
        {
            coord = Math.floor((Math.floor(z) - this.initialZ)/this.getMultiplier())
        }
        else if(mode == 2)
        {
            coord = Math.ceil((Math.ceil(z) - this.initialZ)/this.getMultiplier())   
        }
        else
        {
            coord = Math.round((Math.round(z) - this.initialZ)/this.getMultiplier())
        }
        return coord   
    }

    getMultiplier()
    {
        return 2
    }

    borderXOfMap(x,mode)
    {
        if(this.getXCoordFromGlobalPosition(x,mode) >= 0 && this.getXCoordFromGlobalPosition(x,mode) <= this.getXCoordFromGlobalPosition(this.endX))
        {
            return false
        }
        else
        {
            return true
        }
    }

    borderZOfMap(z,mode)
    {
        if(this.getXCoordFromGlobalPosition(z,mode) >= 0 && this.getXCoordFromGlobalPosition(z,mode) <= this.getXCoordFromGlobalPosition(this.endZ))
        {
            return false
        }
        else
        {
            return true
        }   
    }

    borderMapCollision(position,newPosition)
    {
        let modeX = position.x >= newPosition.x ? 1 : 2
        let modeZ = position.z >= newPosition.z ? 1 : 2
        if(this.borderXOfMap(position.x,modeX)||this.borderZOfMap(position.z,modeZ))
        {
            return true
        }
        else
        {
            return false
        }
    }

    addObstacle(minX,maxX,minZ,maxZ)
    {
        this.obstacles.push(
            {
                minX: minX,
                maxX: maxX,
                minZ: minZ,
                maxZ: maxZ
            }
        )
    }

    obstacleCollision(position,newPosition,obstacle)
    {
        let positionXCoord = this.getXCoordFromGlobalPosition(position.x)
        let positionZCoord = this.getZCoordFromGlobalPosition(position.z)
        let newPositionXCoord = this.getXCoordFromGlobalPosition(newPosition.x)
        let newPositionZCoord = this.getZCoordFromGlobalPosition(newPosition.z)

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

    addTrap(x,z)
    {
        this.traps.push({
            x:x,
            z:z
        })
    }

    trapCollision(position)
    {
        for(let i = 0;i < this.traps.length;i++)
        {
            if(this.getXCoordFromGlobalPosition(position.x) == this.traps[i].x && this.getZCoordFromGlobalPosition(position.z) == this.traps[i].z)
            {
                return true
            }
            else
            {
                continue
            }
        }

        return false
    }

    collisionTests(position,newPosition)
    {
        if(!this.borderMapCollision(position,newPosition))
        {
            let result = false
            for(let i = 0;i < this.obstacles.length;i++)
            {
                result = this.obstacleCollision(position,newPosition,this.obstacles[i])
                if(result)
                {
                    return result
                }
            }
            
            return result
        }
        else
        {
            return true
        }
    }

}