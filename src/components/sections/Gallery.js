// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter = dynamic(() => import('@/components/elements/PortfolioFilter'), { ssr: false, })
export default function Gallery() {

    return (
        <>
            <section className="project-section pb_150 centred">
                <div className="auto-container">
                    <div data-animation-box className="sec-title mb_55">
                        <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Image Gallery</span>
                        <h2>Image in Various Styles</h2>
                    </div>
                    {/*Sortable Gallery*/}
                    <div className="sortable-masonry">
                        {/*Filter*/}
                        <PortfolioFilter />
                    </div>
                </div>
            </section>
        </>
    )
}