// Publications Page

import React from 'react';
import NatureCom from '../assets/images/naturecom.jpg';
import ASPET from '../assets/images/aspet.jpg';
import PLOSONE from '../assets/images/PlosOne.jpg';
import STEMC from '../assets/images/stemcellsint.jpg';
import NYAOS from '../assets/images/NYacademyOfSci.jpg';
import MALP from '../assets/images/maryannliebertpublishers.jpg';

function Publications() {
    return (
        <div className="bebas-neue-regular">
            <div className="row">
                <div className="col-md-6">
                    <a className='link card-body' href="https://www.nature.com/articles/s41467-020-17254-w">
                        <div className='card cardleft'>
                            The choline transporter Slc44a2 controls platelet activation and thrombosis by regulating mitochondrial function
                            <img src={NatureCom} className="cardimg" alt="nature communications logo" />
                        </div>
                    </a>
                </div>


                <div className="col-md-6">
                    <a class='link card-body' href="https://jpet.aspetjournals.org/content/369/2/182">
                        <div className='card cardright'>
                            Acetylcholine Inhibits Platelet Activation
                            <img src={ASPET} className="cardimgright" alt="ASPET Journal of Pharmacology" />
                        </div>
                    </a>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <a class='link card-body' href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0206407">
                        <div className='card cardleft'>
                            Conditional deletion of Ahr alters gene expression profiles in hematopoietic stem cells
                            <img src={PLOSONE} className="cardimg" alt="PLOS ONE" />                        
                        </div>
                    </a>
                </div>


                <div className="col-md-6">
                    <a class='link card-body' href="https://www.hindawi.com/journals/sci/2016/4536187/">
                        <div className='card cardright'>
                            Aryl Hydrocarbon Receptor Deficiency in an Exon 3 Deletion Mouse Model Promotes Hematopoietic Stem Cell Proliferation and Impacts Endosteal Niche Cells
                            <img src={STEMC} className="cardimgright" alt="Stem Cells International" />
                        </div>
                    </a>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <a class='link card-body' href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0133791">
                        <div className='card cardleft'>
                            Deficiency in Aryl Hydrocarbon Receptor (AHR) Expression throughout Aging Alters Gene Expression Profiles in Murine Long-Term Hematopoietic Stem Cells
                            <img src={PLOSONE} className="cardimg" alt="PLOS ONE" />  
                        </div>
                    </a>
                </div>


                <div className="col-md-6">
                    <a class='link card-body' href="https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.12361">
                        <div className='card cardright'>
                            The Ah receptor in stem cell cycling, regulation, and quiescence
                            <img src={NYAOS} className="cardimg" alt="NY Academy of Science" />                         
                        </div>
                    </a>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <a class='link card-body' href="https://www.liebertpub.com/doi/10.1089/scd.2013.0346">
                        <div className='card cardleft'>
                            Loss of aryl hydrocarbon receptor promotes gene changes associated with premature hematopoietic stem cell exhaustion and development of a myeloproliferative disorder in aging mice
                            <img src={MALP} className="cardimg" alt="Mary Ann Liebert, Inc Publishers" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Publications;