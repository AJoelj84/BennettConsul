import React from 'react';
import NLOM from '../assets/images/NLofM.jpg';
import PUBM from '../assets/images/PubMed.jpg';
import NatureCom from '../assets/images/naturecom.jpg';
import ASPET from '../assets/images/aspet.jpg';
import PLOSONE from '../assets/images/PlosOne.jpg';
import STEMC from '../assets/images/stemcellsint.jpg';
import NYAOS from '../assets/images/NYacademyOfSci.jpg';
import MALP from '../assets/images/maryannliebertpublishers.jpg';

function Publications() {
    return (
        <div className="sedan-regular">
            <div className="row">
                <div className="col-md-6">
                    <a className='link card-body' href="https://www.nature.com/articles/s41467-020-17254-w">
                        <div className='card cardleft'>
                            <img src={NatureCom} className="cardimg" alt="nature communications logo" />
                            The choline transporter Slc44a2 controls platelet activation and thrombosis by regulating mitochondrial function
                        </div>
                    </a>
                </div>


                <div className="col-md-6">
                    <a class='link card-body' href="https://jpet.aspetjournals.org/content/369/2/182">
                        <div className='card cardright'>
                            <img src={ASPET} className="cardimg" alt="ASPET Journal of Pharmacology" />
                            Acetylcholine Inhibits Platelet Activation
                        </div>
                    </a>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <a class='link card-body' href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0206407">
                        <div className='card cardleft'>
                            <img src={PLOSONE} className="cardimg" alt="PLOS ONE" />  
                            Conditional deletion of Ahr alters gene expression profiles in hematopoietic stem cells
                        </div>
                    </a>
                </div>


                <div className="col-md-6">
                    <a class='link card-body' href="https://www.hindawi.com/journals/sci/2016/4536187/">
                        <div className='card cardright'>
                            <img src={STEMC} className="cardimg" alt="Stem Cells International" />
                            Aryl Hydrocarbon Receptor Deficiency in an Exon 3 Deletion Mouse Model Promotes Hematopoietic Stem Cell Proliferation and Impacts Endosteal Niche Cells
                        </div>
                    </a>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <a class='link card-body' href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0133791">
                        <div className='card cardleft'>
                            <img src={PLOSONE} className="cardimg" alt="PLOS ONE" />
                            Deficiency in Aryl Hydrocarbon Receptor (AHR) Expression throughout Aging Alters Gene Expression Profiles in Murine Long-Term Hematopoietic Stem Cells
                        </div>
                    </a>
                </div>


                <div className="col-md-6">
                    <a class='link card-body' href="https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.12361">
                        <div className='card cardright'>
                            <img src={NYAOS} className="cardimg" alt="NY Academy of Science" />
                            The Ah receptor in stem cell cycling, regulation, and quiescence
                        </div>
                    </a>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <a class='link card-body' href="https://www.liebertpub.com/doi/10.1089/scd.2013.0346">
                        <div className='card cardleft'>
                            <img src={MALP} className="cardimg" alt="Mary Ann Liebert, Inc Publishers" />
                            Loss of aryl hydrocarbon receptor promotes gene changes associated with premature hematopoietic stem cell exhaustion and development of a myeloproliferative disorder in aging mice
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Publications;
