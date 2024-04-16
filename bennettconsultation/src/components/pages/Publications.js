import React from 'react';
import NLOM from '../assets/images/NLofM.jpg'
import PUBM from '../assets/images/PubMed.jpg'


function Publications() {
    return (
        <div className="sedan-regular">
            <div className="row">
                <div className="col-md-6">
                    <div className='card cardleft'>
                        <img src={NLOM} className="cardimg" alt="national library of medicine" />
                        <img src={PUBM} className="cardimg" alt="pubmedimage" />
                        <a className='link card-body' href="https://pubmed.ncbi.nlm.nih.gov/32661250/">The choline transporter Slc44a2 controls platelet activation and thrombosis by regulating mitochondrial function</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='card cardright'>
                        <img src={NLOM} className="cardimg" alt="national library of medicine" />
                        <img src={PUBM} className="cardimg" alt="pubmedimage" />
                        <a class='link card-body' href="https://pubmed.ncbi.nlm.nih.gov/30765424/">Acetylcholine Inhibits Platelet Activation</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className='card cardleft'>
                        <img src={NLOM} className="cardimg" alt="national library of medicine" />
                        <img src={PUBM} className="cardimg" alt="pubmedimage" />
                        <a class='link card-body' href="https://pubmed.ncbi.nlm.nih.gov/30388136/">Conditional deletion of Ahr alters gene expression profiles in hematopoietic stem cells</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='card cardright'>
                        <img src={NLOM} className="cardimg" alt="national library of medicine" />
                        <img src={PUBM} className="cardimg" alt="pubmedimage" />
                        <a class='link card-body' href="https://pubmed.ncbi.nlm.nih.gov/27366154/">Aryl Hydrocarbon Receptor Deficiency in an Exon 3 Deletion Mouse Model Promotes Hematopoietic Stem Cell Proliferation and Impacts Endosteal Niche Cells</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className='card cardleft'>
                        <img src={NLOM} className="cardimg" alt="national library of medicine" />
                        <img src={PUBM} className="cardimg" alt="pubmedimage" />
                        <a class='link card-body' href="https://pubmed.ncbi.nlm.nih.gov/26208102/">Deficiency in Aryl Hydrocarbon Receptor (AHR) Expression throughout Aging Alters Gene Expression Profiles in Murine Long-Term Hematopoietic Stem Cells</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='card cardright'>
                        <img src={NLOM} className="cardimg" alt="national library of medicine" />
                        <img src={PUBM} className="cardimg" alt="pubmedimage" />
                        <a class='link card-body' href="https://pubmed.ncbi.nlm.nih.gov/24495120/">The Ah receptor in stem cell cycling, regulation, and quiescence</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className='card cardleft'>
                        <img src={NLOM} className="cardimg" alt="national library of medicine" />
                        <img src={PUBM} className="cardimg" alt="pubmedimage" />
                        <a class='link card-body' href="https://pubmed.ncbi.nlm.nih.gov/24138668/">Loss of aryl hydrocarbon receptor promotes gene changes associated with premature hematopoietic stem cell exhaustion and development of a myeloproliferative disorder in aging mice</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publications;
