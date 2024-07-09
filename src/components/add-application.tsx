// import { useRouter } from "next/router";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { useState } from "react";

export default function AddApplication() {
  const [formData, setFormData] = useState({
    Date: '',
    Company: '',
    Position: '',
    Source: '',
    Status: '',
  });
  // const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //send to home component.
  }

  return (
    <form onSubmit={handleSubmit} className="my-3 border p-3 rounded space-y-3 flex flex-col">
      <div className="flex items-center mb-1">
        <label htmlFor="date" className="mr-2 flex-shrink-0">Date applied</label>
        <input type="date" id="date" className="border rounded flex-grow" />
      </div>
      <div className="flex items-center mb-1">
        <label htmlFor="company" className="mr-2 flex-shrink-0">Company name</label>
        <input type="text" id="company" className="border rounded flex-grow" />
      </div>
      <div className="flex items-center mb-1">
        <label htmlFor="position" className="mr-2 flex-shrink-0">Job Title</label>
        <select id="position" name="position" className="border rounded flex-grow text-black">
          <option value="apprentice">Apprenticeship</option>
          <option value="associateSoftwareEng">Associate Software Engineer</option>
          <option value="backSoftwareDev">Backend Software Developer</option>
          <option value="inter">Internship</option>
          <option value="juniorDev">Junior Developer</option>
          <option value="juniorFullstack">Junior Fullstack Software</option>
          <option value="juniorSoftwareEng">Junior Software Engineer</option>
          <option value="juniorWebDev">Junior Web Developer</option>
          <option value="qa">QA Engineer</option>
          <option value="softwareDev">Software Developer</option>
          <option value="softwareEng">Software Engineer</option>
          <option value="webDev">Web Developer</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex items-center mb-1">
        <label htmlFor="source" className="mr-2 flex-shrink-0">Posting source</label>
        <select id="source" name="source" className="border rounded flex-grow text-black">
          <option value="glassdoor">Glassdoor</option>
          <option value="indeed">Indeed</option>
          <option value="linkedin">LinkedIn</option>
          <option value="macslist">MacsList</option>
          <option value="networking">Networking</option>
          <option value="otta">Otta</option>
          <option value="oit">Out In Tech</option>
          <option value="silicon">Silicon Forest</option>
          <option value="website">Website</option>
          <option value="other">Other</option>
          <option value="other">Other</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex items-center mb-1">
        <label htmlFor="status" className="mr-2 flex-shrink-0">Status</label>
        <select id="status" name="status" className="border rounded flex-grow text-black" multiple>
          <option value="ghost">Ghosted</option>
          <option value="interview">Interview</option>
          <option value="nope">Nope</option>
          <option value="test">Take-home test</option>
          <option value="yahoo">Yahoo</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="mt-1 group rounded-lg border border-white px-2 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Submit</button>
      </div>
    </form>
  );

}