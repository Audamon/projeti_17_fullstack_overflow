import connection from "../database";

async function answerQuestion(id: number, answeredBy: string, answer: string){
    await connection.query('UPDATE questions SET answered = true, "answeredAt" = now(), "answeredBy" = $1, answer = $2 WHERE id = $3', [answeredBy,answer,id]);
}
export { answerQuestion };