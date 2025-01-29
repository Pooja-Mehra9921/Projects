import { useState } from "react";
import { Button, Card, CardContent, Typography, LinearProgress } from "@mui/material";

const flashCards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified."
  },
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is node.js ?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is tailwind css?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is csss?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is html5?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is github?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is python?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is vuee?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is next.js?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is typescript?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is mongodb?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is database?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is operating system?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is flutter?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is ES6 Features?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is SQL?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is PHP?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is Angular?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }
  ,
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  }

  // Add more flashcards as needed
];

export default function FlashCardApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flashCards.length);
    setShowAnswer(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + flashCards.length) % flashCards.length);
    setShowAnswer(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Flash Cards
      </Typography>
      <LinearProgress variant="determinate" value={((currentIndex + 1) / flashCards.length) * 100} style={{ width: "100%", marginBottom: "10px" }} />
      <Typography variant="body2">{((currentIndex + 1) / flashCards.length) * 100}%</Typography>
      <Typography variant="body2">{currentIndex + 1} of {flashCards.length}</Typography>
      <Card variant="outlined" style={{ width: "100%", padding: "20px", marginTop: "10px", textAlign: "center" }}>
        <CardContent>
          <Typography variant="h6">
            {showAnswer ? flashCards[currentIndex].answer : flashCards[currentIndex].question}
          </Typography>
        </CardContent>
      </Card>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "10px" }}>
        <Button variant="contained" onClick={handlePrevious} disabled={currentIndex === 0}>
          &lt; Previous
        </Button>
        <Button variant="contained" color="primary" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={currentIndex === flashCards.length - 1}>
          Next &gt;
        </Button>
      </div>
    </div>
  );
}
