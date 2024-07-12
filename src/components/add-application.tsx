import { useState } from "react";

interface ApplicationFormData {
  Date: string;
  Company: string;
  Position: string;
  Source: string;
  Status: string[];
}

interface AddApplicationProps {
  onAddApplication: (formData: ApplicationFormData) => void;
}

export default function AddApplication({ onAddApplication }: AddApplicationProps) {
  const [formData, setFormData] = useState<ApplicationFormData>({
    Date: '',
    Company: '',
    Position: '',
    Source: '',
    Status: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const { checked } = e.target;
      setFormData(prevFormData => {
        const currentStatus = Array.isArray(prevFormData.Status) ? prevFormData.Status : [];
        if (checked) {
          return { ...prevFormData, Status: [...currentStatus, value] };
          // use this for edit form later to update status!
        } else {
          return { ...prevFormData, Status: currentStatus.filter(status => status !== value) };
        }
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
      Status: []
    });
  }

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
          <option value="Apprenticeship">Apprenticeship</option>
          <option value="Assoc. Software Eng">Associate Software Engineer</option>
          <option value="Backend Software Developer">Backend Software Developer</option>
          <option value="Fullstack Software Engineer">Fullstack Software Engineer</option>
          <option value="Internship">Internship</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Junior Fullstack Software">Junior Fullstack Software</option>
          <option value="Junior Software Engineer">Junior Software Engineer</option>
          <option value="Junior Web Developer">Junior Web Developer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Other">Other</option>
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
        </select>
      </div>
      <div className="flex items-center mb-1">
        <label htmlFor="status" className="mr-2 flex-shrink-0">Status</label>
        <div className="border rounded flex-grow p-2">
          <label className="mr-3">
            <input
              type="checkbox"
              name="Status"
              value="Ghosted"
              onChange={handleChange}
              checked={formData.Status.includes("Ghosted")} />Ghosted</label>
          <label className="mr-3">
            <input
              type="checkbox"
              name="Status"
              value="Interview"
              onChange={handleChange}
              checked={formData.Status.includes("Interview")} />Interview</label>
          <label className="mr-3">
            <input
              type="checkbox"
              name="Status"
              value="Nope"
              onChange={handleChange}
              checked={formData.Status.includes("Nope")} />Nope</label>
          <label className="mr-3">
            <input
              type="checkbox"
              name="Status"
              value="Take home test"
              onChange={handleChange}
              checked={formData.Status.includes("Take home test")} />Take home test</label>
          <label className="mr-3">
            <input
              type="checkbox"
              name="Status"
              value="Hired"
              onChange={handleChange}
              checked={formData.Status.includes("Hired")} />Hired</label>
          <label className="mr-3">
            <input
              type="checkbox"
              name="Status"
              value="Other"
              onChange={handleChange}
              checked={formData.Status.includes("Other")} />Other</label>
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="mt-1 group rounded-lg border border-white px-2 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Submit</button>
      </div>
    </form>
  );
}