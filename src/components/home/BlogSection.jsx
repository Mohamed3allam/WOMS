import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogSection({ images }) {
    return (
        <section className="blog-section padding-tb bg-color">
            <div className="container">
                <div className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <h2><span>News Feed</span></h2>
                    <h2>Be The First To New Stories</h2>
                </div> 
                <div className="section-wrapper">
                    <div className="row justify-content-center"  style={{color:'#042c45'}}>
                        <div className="col-12 col-md-6 col-xl-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-item-inner">
                                <div className="post-thumb">
                                    <Link href="assets/images/blog/1.jpg" data-rel="lightcase:myCollection"><img
                                            src={images['blog-1.jpg']} alt="blog post images" /></Link>
                                </div>
                                <div className="post-content">
                                    <span className="meta">By <Link href="#">Admin</Link> March 24, 2021</span>
                                    <h4><Link href="#">Globa Empoer Extenve Chanels Extensve Creat Method</Link></h4>
                                    <p>Complete actuaze centi centrcing colora and sharin without anstaled anding bases
                                        aweme medicalplus Template.</p>
                                </div>
                                <div className="blog-footer">
                                    <Link href="#" className="viewall">Read More <i className="icofont-double-right"></i></Link>
                                    <Link href="#" className="blog-comment"><i className="icofont-comment"></i> 30</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="post-item-inner">
                                <div className="post-thumb">
                                    <Link href="assets/images/blog/2.jpg" data-rel="lightcase:myCollection"><img
                                            src={images['blog-2.jpg']} alt="blog" /></Link>
                                </div>
                                <div className="post-content">
                                    <span className="meta">By <Link href="#">Admin</Link> March 24, 2021</span>
                                    <h4><Link href="#">Globa Empoer Extenve Chanels Extensve Creat Method</Link></h4>
                                    <p>Complete actuaze centi centrcing colora and sharin without anstaled anding bases
                                        aweme medicalplus Template.</p>
                                </div>
                                <div className="blog-footer">
                                    <Link href="#" className="viewall">Read More <i className="icofont-double-right"></i></Link>
                                    <Link href="#" className="blog-comment"><i className="icofont-comment"></i> 30</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="post-item-inner">
                                <div className="post-thumb">
                                    <Link href="assets/images/blog/3.jpg" data-rel="lightcase:myCollection"><img
                                            src={images['blog-3.jpg']} alt="blog" /></Link>
                                </div>
                                <div className="post-content">
                                    <span className="meta">By <Link href="#">Admin</Link> March 24, 2021</span>
                                    <h4><Link href="#">Globa Empoer Extenve Chanels Extensve Creat Method</Link></h4>
                                    <p>Complete actuaze centi centrcing colora and sharin without anstaled anding bases
                                        aweme medicalplus Template.</p>
                                </div>
                                <div className="blog-footer">
                                    <Link href="#" className="viewall">Read More <i className="icofont-double-right"></i></Link>
                                    <Link href="#" className="blog-comment"><i className="icofont-comment"></i> 30</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
