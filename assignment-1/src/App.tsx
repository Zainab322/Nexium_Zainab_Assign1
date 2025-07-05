import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QuoteCard from "@/components/lib/QuoteCard";
import { quotes } from "@/data/quotes";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [topic, setTopic] = useState("");
  const [resultQuotes, setResultQuotes] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const foundQuotes = quotes[topic.toLowerCase()];
    setResultQuotes(foundQuotes || []);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center p-4">
      <div className="backdrop-blur-md bg-white/70 border border-white/50 shadow-2xl max-w-md w-full p-8 rounded-2xl animate-fade-in">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Quote Generator
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex space-x-2 mb-6"
        >
          <Input
            placeholder="Enter topic e.g. success"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            className="transition duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 hover:shadow-lg"
          >
            Get Quotes
          </Button>
        </form>
        <AnimatePresence>
          {resultQuotes.length > 0 ? (
            <div className="space-y-3">
              {resultQuotes.slice(0, 3).map((quote) => (
                <motion.div
                  key={quote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuoteCard quote={quote} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.p
              className="text-center text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No quotes found.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
