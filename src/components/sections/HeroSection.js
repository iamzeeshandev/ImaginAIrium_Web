export default function HeroSection() {

    return (
        <section class="hero-section">
            <video
                className="hero-video"
                src="assets/images/resource/hero-video-1.mp4"
                autoPlay
                loop
                muted
            />
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-md-6">
                        <div class="hero-content">
                            <h1><strong>Revolutionize Your Business with AI</strong></h1>
                            <p>Unleash the power of AI automation, insights, and creativity.</p>
                            <a type="submit" href="#contact" className="theme-btn btn-one mt_50 py_10 pl_70 pr_70">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

