import React from 'react';

const speakercard = (props) => {
  const { name, photo, achievements, studyInfo, shortIntro } = props;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-2 md:m-4 lg:m-6 flex flex-col md:flex-row">
      {/* Speaker Photo */}
      <div className="w-full h-full md:w-1/3">
        <img src={photo} alt={`${name}'s Photo`} className="max-w-full h-full rounded object-contain" />
      
      </div>

      {/* Speaker Details */}
      <div className="w-full md:w-2/3 md:pl-4">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <div className="mb-4">
          {/* Achievements */}
          <h3 className="text-lg font-medium mb-2">Achievements</h3>
          <p>{achievements}</p>
        </div>

        <div className="mb-4">
          {/* Study Info */}
          <h3 className="text-lg font-medium mb-2">Study Info</h3>
          <p>{studyInfo}</p>
        </div>

        {/* Short Intro */}
        <div>
          <h3 className="text-lg font-medium mb-2">Short Introduction</h3>
          <p>{shortIntro}</p>
        </div>
      </div>
    </div>
  );
};

export default speakercard;
