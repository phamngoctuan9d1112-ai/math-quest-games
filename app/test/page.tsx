"use client";

export default function TestPage() {
  async function testAI() {
    const res = await fetch("/api/ai-solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: "2 + 2 bằng bao nhiêu?",
        options: ["1", "2", "3", "4"],
      }),
    });

   const data = await res.json();

console.log(data);

alert(JSON.stringify(data, null, 2));


  }

  return (
    <div className="p-10">
      <button
        onClick={testAI}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Test AI
      </button>
    </div>
  );
}