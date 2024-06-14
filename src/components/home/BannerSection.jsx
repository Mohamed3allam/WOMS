import React from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from 'react-three-fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Loader } from 'three';
// const loadModel = (gltf, dracoLoader) =>{
//     gltf.scene.traverse((child) => {
//        if (child.isMesh) {
//          if (child.material.map) {
//            child.material.map.anisotropy = 16;
//          }
//          if (dracoLoader.decodeDracoFile) {
//            const geometry = dracoLoader.decodeDracoFile(
//              child.geometry,
//              child.geometry.drawcalls
//            );
//            child.geometry.dispose();
//            child.geometry = geometry;
//          }
//        }
//     });
//     return new gltf.scene;
//    };
//    const My3DScene = ({ images }) =>{
//     return (
//        <Canvas>
//          <ambientLight />
//          <pointLight position={[10, 10, 10]} />
//          <Loader
//            url={images['room.fbx']}
//            dracoLoaderPath="/path/to/draco_decoder.js"
//            loadModel={loadModel}
//          />
//        </Canvas>
//     );
//    };
export default function BannerSection({ images }) {

    

    return (
        <>
            <section className="banner-section" style={{backgroundImage: `url(${images['banner1-green-blue.jpg']})`}}>
                <div className="container">
                    <div className="banner-wrapper">
                        <div className="banner-content">
                            <h1 className='banner-woms d-flex align-items-center wow fadeInDown' style={{fontSize:'8vw',fontWeight:'900',color:'#042c45'}}>W<span  style={{display:'flex',alignItems:'center',minWidth:'fit-content'}}><img src={images['logo.png']} alt="logo" width={120} className='woms-logo' /></span>MS</h1>
                            <h1 className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".1s"><span style={{color:'#042c45'}}>World Organization</span>  <b>for Medical Science</b></h1>
                            <Link to="about" className="lab-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s"><span>
                                    Read more about us <i className="icofont-rounded-double-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <My3DScene images={images} /> */}

        </>
    )
}
