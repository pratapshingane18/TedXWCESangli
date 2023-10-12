import React from "react";
import Speakercard from "./Speakerinfo/speakercard";

const Speakerinfo = () => {
  return (
    <div className="Speakerinfopage">
     

      <div className="SpeakerCardInfo">

      <Speakercard
      name="John Doe"
      photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107353/TedXFILES/zqm5jikselvrlmjqokac.jpg"
      achievements="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      studyInfo="Ph.D. in Computer Science from XYZ University"
     shortIntro="John Doe is an accomplished speaker with a passion for technology and education."
     />

     <Speakercard
      name="Mark ZuckerBerG"
      photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697105351/TedXFILES/kswrhwpsfjqwf0gweigq.jpg"
      achievements="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      studyInfo="Ph.D. in Computer Science from XYZ University"
     shortIntro="John Doe is an accomplished speaker with a passion for technology and education."
     />

    <Speakercard
      name="Dwayne Johnson"
      photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107102/TedXFILES/dznszgvndo7agcrm1d1v.jpg"
      achievements="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      studyInfo="Ph.D. in Computer Science from XYZ University"
     shortIntro="John Doe is an accomplished speaker with a passion for technology and education."
     />

     <Speakercard
      name="Dwayne Johnson"
      photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107103/TedXFILES/d6m7ljtxsndsmx8e66pa.jpg"
      achievements="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      studyInfo="Ph.D. in Computer Science from XYZ University"
     shortIntro="John Doe is an accomplished speaker with a passion for technology and education."
     />

     
      

      </div>

    
    
    </div>
  );
};

export default Speakerinfo;
