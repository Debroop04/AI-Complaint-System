import { useState } from "react";
import ComplaintForm from "../components/ComplaintForm";
import AIAssistant from "../components/AIAssistant";

const Home = () => {
  const [formData, setFormData] = useState({});

  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 p-6 lg:p-8">

      <div className="col-span-12 lg:col-span-8">
        <ComplaintForm formData={formData} />
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <AIAssistant
            formData={formData}
            onDataExtracted={setFormData}
          />
        </div>
      </div>

    </div>
  );
};

export default Home;