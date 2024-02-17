import video from "./videos/videoplayback1.mp4";
import './style.css'

const Workshop = () => {
    return (
        <div className="main-wrapper">
            <div className="page-banner mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <h1 className="mb-0">Workshop</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="workshop">
                <div className="video-container border border-1 rounded-4 overflow-hidden">
                    <video
                        className="video"
                        controls
                        poster="https://i.ibb.co/c1SK0H8/workshop-pedagogy-and-curriculum.jpg"
                    >
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
                <div className="content-container px-3">
                    <p className="workshop-date">22 April 2022</p>
                    <h1 className="workshop-heading">
                        One-Day Workshop on Pedagogy and Curriculum Needs of Children with
                        Moderate Intellectual Disability
                    </h1>
                    <p className="workshop-content">
                        A One-Day Workshop on Pedagogy and Curriculum Needs of Children with
                        Moderate Intellectual Disability was held on 22 April 2022, to
                        discuss the needs of the special children, and the Pedagogy that can
                        be used to provide them with proper teaching and learning
                        experiences
                    </p>
                </div>
            </div>
            <div className="workshop">
                <div className="content-container px-3">
                    <p className="workshop-date">20 August 2022</p>
                    <h1 className="workshop-heading">
                        Topic validation workshop
                    </h1>
                    <p className="workshop-content">
                        In the workshop,the experts carefully validated the topics intended for intellectually disabled childrenensuring their relevance, suitability,and alignment with the children&apos;s needs and learning objectives.
                    </p>
                </div>
                <div className="video-container border border-1 rounded-4 overflow-hidden">
                    <video
                        className="video"
                        controls
                        poster="https://i.ibb.co/c1SK0H8/workshop-pedagogy-and-curriculum.jpg"
                    >
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div className="workshop">
                <div className="video-container border border-1 rounded-4 overflow-hidden">
                    <video
                        className="video"
                        controls
                        poster="https://i.ibb.co/c1SK0H8/workshop-pedagogy-and-curriculum.jpg"
                    >
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
                <div className="content-container px-3">
                    <p className="workshop-date">20 November 2021</p>
                    <h1 className="workshop-heading">
                        Script Validation workshop
                    </h1>
                    <p className="workshop-content">
                        During the 2D video script validation workshop, the special educators meticulously reviewed and recommended to refine the scripts, ensuring their coherence, relevance, and alignment with the intended messaging and visual storytelling for the 2D videos.
                    </p>
                </div>
            </div>

            </div>
            
        </div>
    )
};

export default Workshop;