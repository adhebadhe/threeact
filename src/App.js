import React, { Component } from 'react'; import ReactDOM from 'react-dom' 
import * as THREE from 'three'

// Works ---------------------
import sp from './g.png'


class App extends Component {
    componentDidMount() {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      //document.body.appendChild(renderer.domElement);
      this.mount.appendChild(renderer.domElement);


      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial( { color: 0x00ff00} );


      // DOESNT WORK --------------------------
      const texture = new THREE.TextureLoader().load(sp);

     // Works ----------
     //const loader = new THREE.TextureLoader();
     //const mat = new THREE.SpriteMaterial({map: loader.load(resource),});
     const mat = new THREE.SpriteMaterial({map: texture});
     var sprite = new THREE.Sprite(mat);

      var cube = new THREE.Mesh(geometry, mat);

      camera.position.z = 5;
      sprite.scale.set(.5, .5, .5);
      sprite.position.y = -3.4;
      scene.add(sprite);


      var animate = function () {
        sprite.position.x += 0.002;
        console.log(sprite.position.x);
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    }
    render() {
      return (
        <div className="App">
          <div className="p" ref={ref => (this.mount = ref)}/>
        </div>
      );
    }
}

export default App;
