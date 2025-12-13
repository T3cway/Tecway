import ResultCard from "./ResultCard";

const Results = () => {
  return (
    <main className=" bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-normal text-center mb-16 text-balance">
          Our Results
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ResultCard
            value={150}
            suffix="+"
            title="Project success"
            description="Completed projects for clients in over 20 countries, from bold startups to top corporations."
          />

          <ResultCard
            value={100}
            suffix="%"
            title="Client satisfaction"
            description="Clients reporting enhanced efficiency with our custom strategies and advanced tech."
          />

          <ResultCard
            value={10}
            suffix="+"
            title="AI innovation"
            description="Hours spent crafting smart AI tools to optimize workflows across key industries."
          />

          <ResultCard
            value={75}
            suffix="+"
            title="Industry recognition"
            description="Awarded for excellence in design, technology, and sustainability over the last five years."
          />
        </div>
      </div>
    </main>
  );
};

export default Results;
