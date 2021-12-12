export interface Question{
    question: string;
    student: string;
    class: string;
    tags: string
    answered?: boolean;
    submitAt?: string;
    answeredAt?: string;
    answeredBy?: string;
    answer?: string;
}
