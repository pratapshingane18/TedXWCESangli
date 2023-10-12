import TeamMemberInfo from "./member";

const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Meet our Core Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          "Meet our Core Team: Passionate, Creative, and Driven to Inspire Positive Change."
        </p>
      </div>

     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-6 justify-items-center ">
      
      <TeamMemberInfo
  name="Sakshi Deshmukh"
  position=""
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  imgSrc="https://res.cloudinary.com/dpok16gsr/image/upload/v1697034910/TedXFILES/hw9pvmnballpt4v2ds7u.jpg"
/>
   

<TeamMemberInfo
  name="Pratap Shingane"
  position="Web Developer"
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  imgSrc="https://res.cloudinary.com/dpok16gsr/image/upload/v1697034918/TedXFILES/sby83l5wtdvu0lm7wnqd.jpg"
/>


<TeamMemberInfo
  name="Swayambhu Hingane"
  position="Web Developer"
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  imgSrc="https://res.cloudinary.com/dpok16gsr/image/upload/v1697034927/TedXFILES/kfq2bdd35zcajmuljwkq.jpg"
/>

<TeamMemberInfo
  name="Shaifali Sonvane"
  position="Web Developer"
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  imgSrc="https://res.cloudinary.com/dpok16gsr/image/upload/v1697034932/TedXFILES/uhcnrjvkxwliihu3gzih.jpg"
/>

<TeamMemberInfo
  name="Anil Surve"
  position="Web Developer"
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  imgSrc="https://res.cloudinary.com/dpok16gsr/image/upload/v1697034939/TedXFILES/attmwrp0cdqtplvyrzug.jpg"
/>

<TeamMemberInfo
  name="Sanjay Dhaygude"
  position="Web Developer"
  linkedin="https://www.linkedin.com/in/johndoe"
  twitter="https://twitter.com/johndoe"
  imgSrc="https://res.cloudinary.com/dpok16gsr/image/upload/v1697034945/TedXFILES/e700bp6cnjtvwoskllmb.jpg"
/>



    
      </div>

     
    </div>
  );
};

export default Team;
