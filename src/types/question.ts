export interface Question {
    id: string;
    question: string;
    answer: string | string[] | null;
    options: string[];
    type: 'checkbox' | 'radio' | 'text';
    points: number;
}