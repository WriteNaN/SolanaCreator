import { useWizard } from "react-use-wizard";
import { FaArrowRight } from "react-icons/fa";
import { useWizardState } from "@/hooks/useSharedState";

export default function Base() {
  const { handleStep, nextStep } = useWizard();
  const [tokenState, updateState] = useWizardState();

  return (
    <form
      onSubmit={(e) => {
        return e.preventDefault();
    }}
      className="p-5 space-y-2 bg-black/30 rounded-lg"
    >
      <center>
        <label htmlFor="token-name font-manrope text-lg">Token Name</label>
      </center>
      <input
        type="text"
        className="form-input px-4 py-3 rounded-xl bg-black/50"
        placeholder="Pick A Name (●'◡'●)"
        id="token-name"
      />
      <div className="flex flex-column">
        <button className="w-full btn btn-primary text-white" onClick={nextStep}>Continue <FaArrowRight /></button>
      </div>
    </form>
  );
}
