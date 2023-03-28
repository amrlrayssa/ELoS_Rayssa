
import * as THREE from 'three';
import { CSG } from '../FireBase/CSGMesh';

class LaserFence extends THREE.Object3D {  

   constructor(){
      super();
      const laserFenceGeometry = new THREE.BoxGeometry(0.5, 2, 0.3);
      const laserFenceMaterial = new THREE.MeshLambertMaterial({color:"gray"});
      const laserGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 64, 64);
      const laserBlueMaterial = new THREE.MeshLambertMaterial({color:"blue", transparent:true, opacity: 0.5});
      const laserRedMaterial = new THREE.MeshLambertMaterial({color:"red", transparent:true, opacity: 0.5});
      
      // fences
      let laserFence1 = new THREE.Mesh(laserFenceGeometry, laserFenceMaterial);
      laserFence1.position.set(0, 0, -1)
      let laserFence2 = new THREE.Mesh(laserFenceGeometry, laserFenceMaterial);
      laserFence2.position.set(0, 0, 1)

      // blue lasers
      let laserBlue1 = new THREE.Mesh(laserGeometry, laserBlueMaterial)
      laserBlue1.rotateX(-Math.PI / 2);
      laserBlue1.position.set(0, 0.6, 0)
      let laserBlue2 = new THREE.Mesh(laserGeometry, laserBlueMaterial)
      laserBlue2.rotateX(-Math.PI / 2);
      laserBlue2.position.set(0, 0, 0)
      let laserBlue3 = new THREE.Mesh(laserGeometry, laserBlueMaterial)
      laserBlue3.rotateX(-Math.PI / 2);
      laserBlue3.position.set(0, -0.6, 0)

      //red lasers
      let laserRed1 = new THREE.Mesh(laserGeometry, laserRedMaterial)
      laserRed1.rotateX(-Math.PI / 2);
      laserRed1.position.set(0, 0.6, 0)
      let laserRed2 = new THREE.Mesh(laserGeometry, laserRedMaterial)
      laserRed2.rotateX(-Math.PI / 2);
      laserRed2.position.set(0, 0, 0)
      let laserRed3 = new THREE.Mesh(laserGeometry, laserRedMaterial)
      laserRed3.rotateX(-Math.PI / 2);
      laserRed3.position.set(0, -0.6, 0)

      this.add(laserFence1);
      this.add(laserFence2);
      this.add(laserBlue1);
      this.add(laserBlue2);
      this.add(laserBlue3);      
      this.add(laserRed1);
      this.add(laserRed2);
      this.add(laserRed3);
      return this;
   }

   setLaserFenceVisibility(visibility)
   {
      this.visible = visibility
   }

   setBlue(){

   }

   setRed(){

   }
}

export default LaserFence;

