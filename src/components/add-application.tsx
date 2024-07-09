import { useState } from "react";

interface AddApplicationProps {
  onAddApplication: (formData: {
    Date: string;
    Company: string;
    Position: string;
    Source: string;
    Status: Array<string>;
  }) => void;
}

export default function AddApplication({ onAddApplication }: AddApplicationProps) {
  const [formData, setFormData] = useState({
    Date: '',
    Company: '',
    Position: '',
    Source: '',
    Status: ['applied'],
  });
  const [checkedStatus, setCheckedStatus] = useState({
    applied: true,
    ghosted: false,
    interview: false,
    no: false,
    test: false,
    yest: false,
    other: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onAddApplication(formData);
    setFormData({
      Date: '',
      Company: '',
      Position: '',
      Source: '',
      Status: ['applied']
    });  }

  return (
    <form onSubmit={handleSubmit} className="my-3 border p-3 rounded space-y-3 flex flex-col">
      <div className="flex items-center mb-1">
        <label htmlFor="date" className="mr-2 flex-shrink-0">Date applied</label>
        <input 
        type="date" 
        id="date" 
        name="Date"
        className="border rounded flex-grow text-black" 
        value={formData.Date}
        onChange={handleChange} 
          required />
      </div>
      <div className="flex items-center mb-1">
        <label htmlFor="company" className="mr-2 flex-shrink-0">Company name</label>
        <input 
        type="text" 
        id="company" 
        name="Company"
        className="border rounded flex-grow text-black" 
        value={formData.Company}
        onChange={handleChange} 
          required />
      </div>
      <div className="flex items-center mb-1">
        <label htmlFor="position" className="mr-2 flex-shrink-0">Title</label>
        <select 
        id="position" 
        name="Position"
        value={formData.Position}
          onChange={handleChange}        
          className="border rounded flex-grow text-black"
          required>
          <option value="">Select a job title</option>
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
        <label htmlFor="source" className="mr-2 flex-shrink-0">Source</label>
        <select 
        id="source" 
        name="Source"
          value={formData.Source}
          onChange={handleChange}   
        className="border rounded flex-grow text-black"
        required>
          <option value="">Where did you find this job post?</option>
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
        <div className="border rounded flex-grow p-2">
          <label className="mr-3"><input
            type="checkbox" name="Status" value="applied" onChange={handleChange} checked/>Applied</label>
          <label className="mr-3"><input
            type="checkbox" name="Status" value="ghosted" onChange={handleChange} />Ghosted</label>
          <label className="mr-3"><input
            type="checkbox" name="Status" value="interview" onChange={handleChange} />Interview</label>
          <label className="mr-3"><input
            type="checkbox" name="Status" value="no" onChange={handleChange} />Nope</label>
          <label className="mr-3"><input
            type="checkbox" name="Status" value="test" onChange={handleChange} />Take-home test</label>
          <label className="mr-3"><input
            type="checkbox" name="Status" value="yes" onChange={handleChange} />Hired!</label>
          <label className="mr-3"><input
            type="checkbox" name="Status" value="other" onChange={handleChange} />Other</label>
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="mt-1 group rounded-lg border border-white px-2 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Submit</button>
      </div>
    </form>
  );

}