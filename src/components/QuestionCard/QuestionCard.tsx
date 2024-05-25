import { Question } from "../../types/question";

export default function QuestionCard({ question }: { question: Question }) {
    const {  question: questionText, options, type } = question;

    return (
        <div className="border-2 border-blue-500 p-4 rounded-md">
            <h3 className="text-2xl font-bold text-blue-5000 mb-4">{questionText}</h3>
            {type === "radio" && (
                <div className="flex flex-col space-y-2">
                    {options.map((option, index) => (
                        <label key={index}>
                            <input type="radio" name="answer" value={option} />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                </div>
            )    
            }

            {type === "checkbox" && (
                 <div className="flex flex-col">
                      {options.map((option, index) => (
                            <label key={index}>
                             <input type="checkbox" name="answer" value={option} />
                             <span className="ml-2">{option}</span>
                            </label>
                      ))}
                 </div>
                )    
            }

            {type === "text" && (
                <input type="text" name="answer" />
            )}

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Submit</button>
        </div>
    )
}