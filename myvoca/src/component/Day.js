import { useParams } from "react-router-dom";
import Word from './Word.js';
import useFetch from "../hooks/useFetch.js";

export default function Day() {
    const{ day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
    <>
     <h2>Day {day}</h2>
     {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
    )
}